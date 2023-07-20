import multer from "multer";
import path from "path";

// Multer configuration for uploading images
const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../../public/images"));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const originalExtension = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix + originalExtension);
    }
});

export const uploadImg = multer({
    storage: imageStorage
});

// Multer configuration for uploading files
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../../public/files"));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const originalExtension = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix + originalExtension);
    }
});

export const uploadFile = multer({
    storage: fileStorage
});


// Multer configuration for uploading videos
const videoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../../public/videos"));
    }
});

export const uploadVideo = multer({
    storage: videoStorage
});

// Multer configuration for uploading audios
const audioStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../../public/audios"));
    }
});

export const uploadAudio = multer({
    storage: audioStorage
});

// Multer configuration for _3D models
const modelStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../../public/models"));
    }
});

export const uploadModel = multer({
    storage: modelStorage
});








