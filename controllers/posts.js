const pug = require('pug');

const postList = require('../database/post.json');

const elements = {
    title: 'Posts',
    google: "https://google.com",
    amazon: "https://amazon.com",
    postsList: postList,
}

const index = (req,res) => {
    res.send(
        pug.renderFile('./views/posts.pug', elements)
    )
}

module.exports = {
    index
}