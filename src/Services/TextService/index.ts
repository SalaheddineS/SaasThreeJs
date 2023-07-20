import { Request,Response } from "express";
import GenerateUUID from "../../Utilities/GenerateUUID";
import TextModel from "../../Models/Text";

export const getText = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    const text = await TextModel.findOne({uuid: uuid});
    if(!text) throw new Error("Text not found");
    res.json({
        text
    });
}

export const getTexts = async (req:Request,res:Response) => {
    const texts = await TextModel.find();
    res.json({
        texts
    });
}

const addText = async (req:Request,res:Response) => {
    const uuid = GenerateUUID();
    const creationDate = new Date();
    const { name, text } = req.body;
    const textmodel = new TextModel({
        name: name,
        text: text,
        uuid: uuid,
        creationDate: creationDate
    });
    await textmodel.save();
    res.json({
        message: "Text saved successfully",
        text
    });
}

const deleteText = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    await TextModel.findOneAndDelete({uuid});
    res.json({
        message: "Text deleted successfully"
    });
}

export default {
    getTexts,
    addText,
    deleteText,
    getText
}
