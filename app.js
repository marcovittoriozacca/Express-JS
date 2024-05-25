const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.json());


const home = require('./controllers/home');

const posts = require('./controllers/posts');
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.get('/', home.index);

app.get('/posts', posts.index );

app.listen(port, host, () => {
    console.log(`Server avviato su: http://${host}:${port}`);
})