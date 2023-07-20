import fs from 'fs';

export const deleteImages = (path: string) => {
    const  pathToElement =  __dirname + "/../../../public/images/" + path;
    fs.unlink(pathToElement, (err) => {
        if (err) throw err;
        console.log('Element is deleted!');
    });
}

export const retrieveImages = (path: string) => {
    const pathToElement =  __dirname + "/../../../public/images/" + path;
    return fs.readFileSync(pathToElement);
}