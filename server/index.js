const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/../public'));
app.use('/api', routes);

app.listen(port, () => console.log(`Navigation bar server: ${port}!`))