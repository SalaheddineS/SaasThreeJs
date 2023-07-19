import { Request,Response } from "express";
import GenerateUUID from "../../Utilities/GenerateUUID";
import _3D_ModelModel from "../../Models/_3D_Model";

export const get_3D_Models = async (req:Request,res:Response) => {
    const _3D_Models = await _3D_ModelModel.find();
    res.json({
        _3D_Models
    });
}

const add_3D_Model = async (req:Request,res:Response) => {
    const uuid = GenerateUUID();
    const creationDate = new Date();
    const { name, url } = req.body;
    const _3D_Model = new _3D_ModelModel({
        name: name,
        url: url,
        uuid: uuid,
        creationDate: creationDate
    });
    await _3D_Model.save();
    res.json({
        message: "_3D_Model saved successfully",
        _3D_Model
    });
}

const delete_3D_Model = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    await _3D_ModelModel.findOneAndDelete({uuid});
    res.json({
        message: "_3D_Model deleted successfully"
    });
}

export default {
    get_3D_Models,
    add_3D_Model,
    delete_3D_Model
}
