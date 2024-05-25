const fs = require('fs');
const path = require('path');

const readAnyFile = (fileName, extension) => {
    const pathName = path.join(__dirname, fileName+'.'+extension);
    if(extension === 'html'){
        const myFile = fs.readFileSync(pathName);
        return myFile.toString();
    }
    return JSON.parse(fs.readFileSync(pathName));
}

const updateJSONFile = (fileName, content) => {
    const pathName = path.join(__dirname, 'database', fileName+'.json'); 
    const myFile = fs.readFileSync(pathName);
    const parsedFile = JSON.parse(myFile);
    const newData = [...parsedFile, content];
    const string = JSON.stringify(newData, null, 2);

    fs.writeFileSync(pathName, string);
}

module.exports = {
    readAnyFile,
    updateJSONFile,
}