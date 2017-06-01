import express from 'express';
import path         from 'path';
const app = express();

console.log(process.env.PRODUCTION);

/************************************************************
 *
 * Express routes for:
 *   - app.js
 *   - style.css
 *   - index.html
 *
 ************************************************************/

// Serve application file depending on environment
app.get('/app.js', (req, res) => {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/app.js');
  } else {
    res.redirect('//localhost:9090/build/app.js');
  }
});

// Serve aggregate stylesheet depending on environment
app.get('/style.css', (req, res) => {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/style.css');
  } else {
    res.redirect('//localhost:9090/build/style.css');
  }
});

// Serve index page
app.get([
    '/',
    '/work',
    '/work/:path?',
    '/about',
    '/contact'
  ], (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.use('/images', express.static(path.join(__dirname, 'src/images')));
app.use('/css', express.static(path.join(__dirname, 'src/css')));


/*************************************************************
 *
 * Webpack Dev Server
 *
 * See: http://webpack.github.io/docs/webpack-dev-server.html
 *
 *************************************************************/

if (!process.env.PRODUCTION) {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.local.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  }).listen(9090, 'localhost', (err, result) => {
    if (err) {
      console.log(err);
    }
  });
}


/******************
 *
 * Express server
 *
 *****************/

const port = process.env.PORT || 80;
const server = app.listen(port, '0.0.0.0', () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Essential React listening at http://%s:%s', host, port);
});
