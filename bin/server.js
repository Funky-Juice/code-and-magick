'use strict';

const data = require('./data/data');
const express = require('express');
const fs = require('fs');
const opener = require('opener');
const path = require('path');
const serveStatic = express.static;
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackMiddlewareConfig = require('./middleware.config.js');


const projectName = process.argv[2];


const PORT = parseInt(process.argv[3], 10) || 1507;


const projectNameToAPIURL = new Map([
  ['code-and-magick', '/api/reviews'],
  ['kekstagram', '/api/pictures']
]);

/** @param {?Error|string} err */
const exitIfError = (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
};


/** @return {Promise.<boolean|string>} */
const readBrowserOpenConfig = () => {
  return new Promise((resolve, reject) => {
    let packageJSON = path.resolve(__dirname, '..', 'package.json');
    fs.readFile(packageJSON, 'utf-8', (err, data) => {
      if (err) return reject(err);

      try {
        let fileContents = JSON.parse(data);
        resolve(fileContents.openBrowser || false);
      } catch (err) {
        reject(err);
      }
    });
  });
};


const serve = serveStatic(webpackConfig.output.path, {
  index: ['index.html', 'index.htm']
});
const app = express();
const compiler = webpack(webpackConfig);
const middleware = webpackMiddleware(compiler, webpackMiddlewareConfig);
app.use(middleware);


app.get(projectNameToAPIURL.get(projectName), (req, res) => {
  let jsonpCallback = req.query.callback;
  data.read(req.query.filter, req.query.from, req.query.to, jsonpCallback).then((data) => {
    res.header('Content-Type', 'application/' + (jsonpCallback ? 'javascript' : 'json')).send(data);
  }).catch(err => {
    console.error('Ошибка при запросе к API', err.message);
    res.status(500).send(err);
  });
});

app.use(serve);

// Форма отзыва отправляется методом POST на index.html.
// Статика отвечает только на GET, поэтому без этого маршрута
// браузер получает 404 с Content-Security-Policy: default-src 'none'.
app.post(['/', '/index.html'], (req, res) => {
  res.redirect(303, '/');
});


app.listen(PORT, '0.0.0.0', (err) => {
  exitIfError(err);

  const hostname = `http://localhost:${PORT}`;

  console.info(`==> 🌎 Сервер запущен на порту ${PORT}. Откройте ${hostname}  у себя в браузере. Чтобы остановить сервер, нажмите Ctrl+C`);

  readBrowserOpenConfig().
    then(open => open && opener(hostname)).
    catch(err => console.error(err));
});
