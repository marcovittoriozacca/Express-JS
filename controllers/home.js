const pug = require('pug');



const elements = {
    title: "Home",
    myLocation: "http://localhost:3000/",
}

const index = (req, res) => {
    res.send(
        pug.renderFile('./views/index.pug', elements)
    )
}


module.exports = {
    index,
}