const validateData = (title, description, image) => {
    let error = {};

    error = {...validateTitle(title, error)};
    error = {...validateDescription(description, error)};
    error = {...validateImage(image, error)};
    
    if(Object.keys(error).length === 0){
        return false;
    }
    return error;

}

const validateTitle = (title, error) => {

    //title validation
    if(title === ''){
        error.title = {
            required: 'Title is a required field'
        }
    }
    if(title.length > 255){
        error.title = {
            length: 'This title is too long - max length of 255 characters'
        }
    }
    
    return error
}
const validateDescription = (description, error) => {

    //description validation
    if(description === ''){
        error.description = {
            err: 'Description is a required field'
        }
    }
    if(description.length > 50000){
        error.description = {
            length: 'This description is too long - max length of 50000 characters'
        }
    }
    
    return error
}
const validateImage = (image, error) => {
    // image validation
    if(image === ''){
        error.image = {
            err: 'Image is a required field'
        }
    }
    
    return error
}

const createPost = (object) => {
    fetch('http://localhost:3000/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    })
    .then(r => r).then(d => d)
    .catch(err => console.log(err));
}

addEventListener('load', function(){

    const sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click', function(){

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const image = document.getElementById('image').value;

        const error = validateData(title, description, image);
        
        const newPost = {
            "title": title,
            "description": description,
            "tags": [] ,
            "img": image
        };

        if(!error){
           createPost(newPost);
        }else{
           console.log(error);
        }
    });



})
