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

const inputError = (obj, ...inputFields) => {
    const [title, description, image] = inputFields;
    console.log(image);
    if(obj.title !== undefined){
        title.classList.remove('focus:border-sky-400', 'focus:ring-sky-400');
        title.classList.add('input-error');
    }else{
        title.classList.remove('input-error');
        title.classList.add('focus:border-sky-400', 'focus:ring-sky-400');
    }
    
    if(obj.description !== undefined){
        description.classList.remove('focus:border-sky-400', 'focus:ring-sky-400');
        description.classList.add('input-error');
    }else{
        description.classList.remove('input-error');
        description.classList.add('focus:border-sky-400', 'focus:ring-sky-400');
    }

    if(obj.image !== undefined){
        image.classList.remove('focus:border-sky-400', 'focus:ring-sky-400');
        image.classList.add('input-error');
    }else{
        image.classList.remove('input-error');
        image.classList.add('focus:border-sky-400', 'focus:ring-sky-400');
    }

    
}

addEventListener('load', function(){

    const sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click', function(){

        const title = document.getElementById('title');
        const description = document.getElementById('description');
        const image = document.getElementById('image');

        const error = validateData(title.value, description.value, image.value);
        
        const newPost = {
            "title": title.value,
            "description": description.value,
            "tags": [] ,
            "img": image.value
        };

        if(!error){
           createPost(newPost);
        }else{
           inputError(error, title, description, image)
        }
    });



})
