const express = require('express');
const app = express();
const port = 3002;
const proxy = require('http-proxy-middleware');
const routes = require('./routes.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/../public'));
app.use('/api', routes);
app.use(
  '/api',
  proxy({ target: 'http://www.example.org', changeOrigin: true })
);

app.listen(port, () => console.log(`Navigation bar server: ${port}!`))