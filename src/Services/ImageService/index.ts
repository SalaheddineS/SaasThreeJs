import ImageModel from "../../Models/Image";
import { Request,Response } from "express";
import GenerateUUID from "../../Utilities/GenerateUUID";

export const getImages = async (req:Request,res:Response) => {
    const images = await ImageModel.find();
    res.json({
        images
    });
}

const addImage = async (req:Request,res:Response) => {
    const uuid = GenerateUUID();
    const creationDate = new Date();
    const { name, url } = req.body;
    const image = new ImageModel({
        name: name,
        url: url,
        uuid: uuid,
        creationDate: creationDate
    });
    await image.save();
    res.json({
        message: "Image saved successfully",
        image
    });
}

const deleteImage = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    await ImageModel.findOneAndDelete({uuid});
    res.json({
        message: "Image deleted successfully"
    });
}

export default {
    getImages,
    addImage,
    deleteImage
}
