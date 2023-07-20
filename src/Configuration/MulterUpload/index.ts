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
        cb(null, 'image' + "-" + uniqueSuffix + originalExtension);
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
        cb(null, 'file' + "-" + uniqueSuffix + originalExtension);
    }
});

export const uploadFile = multer({
    storage: fileStorage
});


// Multer configuration for uploading videos
const videoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../../public/videos"));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const originalExtension = path.extname(file.originalname);
        cb(null, 'video' + "-" + uniqueSuffix + originalExtension);
    }
});

export const uploadVideo = multer({
    storage: videoStorage
});

// Multer configuration for uploading audios
const audioStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../../public/audios"));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const originalExtension = path.extname(file.originalname);
        cb(null, 'audio' + "-" + uniqueSuffix + originalExtension);
    }
});

export const uploadAudio = multer({
    storage: audioStorage
});









