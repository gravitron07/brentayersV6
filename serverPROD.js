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
  res.sendFile(__dirname + '/build/app.js');
});

// Serve aggregate stylesheet depending on environment
app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/build/style.css');
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



/******************
 *
 * Express server
 *
 *****************/
const port = 80;
const server = app.listen(port, '0.0.0.0', () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Essential React listening at http://%s:%s', host, port);
});
