import fs from 'fs';

export const deleteImages = (path: string) => {
    const  pathToElement =  __dirname + "/../../../public/images/" + path;
    fs.unlink(pathToElement, (err) => {
        if (err) throw err;
    });
}

export const retrieveImages = (path: string) => {
    const pathToElement =  __dirname + "/../../../public/images/" + path;
    return fs.readFileSync(pathToElement);
}

export const retrieveVideos = (path: string) => {
    const pathToElement =  __dirname + "/../../../public/videos/" + path;
    return fs.readFileSync(pathToElement);
}

export const deleteVideos = (path: string) => {
    const pathToElement =  __dirname + "/../../../public/videos/" + path;
    fs.unlink(pathToElement, (err) => {
        if (err) throw err;
    }
    );
}

export const deleteAudios = (path: string) => {
    const pathToElement =  __dirname + "/../../../public/audios/" + path;
    fs.unlink(pathToElement, (err) => {
        if (err) throw err;
    }
    );
}

export const retrieveAudios = (path: string) => {
    const pathToElement =  __dirname + "/../../../public/audios/" + path;
    return fs.readFileSync(pathToElement);
}

export const deleteFiles = (path: string) => {
    const pathToElement =  __dirname + "/../../../public/files/" + path;
    fs.unlink(pathToElement, (err) => {
        if (err) throw err;
    }
    );
}

export const retrieveFiles = (path: string) => {
    const pathToElement =  __dirname + "/../../../public/files/" + path;
    fs.readFileSync(pathToElement);
}

