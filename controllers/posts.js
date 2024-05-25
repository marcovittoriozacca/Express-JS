const pug = require('pug');

const postList = require('../database/post.json');

const {updateJSONFile} = require('../utilities.js');

const elements = {
    title: 'Posts',
    myLocation: "http://localhost:3000/",
    postsList: postList,
}

const index = (req,res) => {
    res.format({

        "html": () => {
            res.send(
                pug.renderFile('./views/posts.pug', elements)
            )
        },

        "json": () => {
            res.send(postList);
        }

    })
}

const create = (req,res) => {

    let {title, description, tags, img} = req.body;
    
    if(typeof tags !== "object"){
            tags = [];
    }

    const newPost = {
        title: title || "New Post",
        description: description || "New post's description!",
        tags: tags || [],
        img: img || "/img/broken-img.png"
    };

    updateJSONFile('post', newPost);
    res.redirect('/posts');
}

module.exports = {
    index,
    create,
}