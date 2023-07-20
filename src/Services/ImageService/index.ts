import ImageModel from "../../Models/Image";
import { Request,Response } from "express";
import GenerateUUID from "../../Utilities/GenerateUUID";
import {uploadImg} from "../../Configuration/MulterUpload";
import { deleteImages,retrieveImages } from "../../Utilities/HandleFsElements";

export const getImage = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    const image = await ImageModel.findOne({uuid: uuid});
    if(!image) throw new Error("Image not found");
    const path = image.url;
    const binary = retrieveImages(path);
    res.send({image: binary, details : image});
}

export const getImages = async (req:Request,res:Response) => {
    const images = await ImageModel.find();
    res.json({
        images
    });
}

const addImage = async (req:Request,res:Response) => {
    uploadImg.single("image")(req,res,async (err:any) => {
        if(err) {
            res.json({
                message: "Error uploading image"
            });
        }
        else {
            const uuid = GenerateUUID();
            const creationDate = new Date();
            const { name } = req.body;
            const image = new ImageModel({
                name: name,
                url: req.file?.filename,
                uuid: uuid,
                creationDate: creationDate
            });
            if(!req.file?.filename) throw new Error("Error uploading image");
            await image.save();
            res.json({
                message: "Image saved successfully",
                image
            });
        } 
    }
    );
}

const deleteImage = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    const image = await ImageModel.findOne({uuid: uuid});
    if(!image) throw new Error("Image not found");
    const url = image.url; 
    deleteImages(url);
    await image.deleteOne();
    res.json({
        message: "Image deleted successfully"
    });
}



export default { 
    getImages,
    addImage,
    deleteImage,
    getImage
}
