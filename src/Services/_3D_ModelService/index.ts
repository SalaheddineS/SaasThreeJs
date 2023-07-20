import { Request,Response } from "express";
import GenerateUUID from "../../Utilities/GenerateUUID";
import _3D_ModelModel from "../../Models/_3D_Model";
import { uploadFile } from "../../Configuration/MulterUpload";
import { deleteFiles,retrieveFiles } from "../../Utilities/HandleFsElements";

export const get_3D_Model = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    const _3D_Model = await _3D_ModelModel.findOne({uuid: uuid});
    if(!_3D_Model) throw new Error("_3D_Model not found");
    const path = _3D_Model.url;
    const binary = retrieveFiles(path);
    res.send({file: binary, details : _3D_Model});
}

export const get_3D_Models = async (req:Request,res:Response) => {
    const _3D_Models = await _3D_ModelModel.find();
    res.json({
        _3D_Models
    });
}

const add_3D_Model = async (req:Request,res:Response) => {
    uploadFile.single("file")(req,res,async (err:any) => {
        if(err) {
            res.json({
                message: "Error uploading _3D_Model"
            });
        }
        else {
            const uuid = GenerateUUID();
            const creationDate = new Date();
            const { name } = req.body;
            const _3D_Model = new _3D_ModelModel({
                name: name,
                url: req.file?.filename,
                uuid: uuid,
                creationDate: creationDate
            });
            if(!req.file?.filename) throw new Error("Error uploading _3D_Model");
            await _3D_Model.save();
            res.json({
                message: "_3D_Model saved successfully",
                _3D_Model
            });
        } 
    }
    );
}

const delete_3D_Model = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    if(!uuid) throw new Error("wrong uuid");
    const file = await _3D_ModelModel.findOne({uuid: uuid});
    if(!file) throw new Error("_3D_Model not found");
    deleteFiles(file.url);
    await file.deleteOne();
    res.json({
        message: "_3D_Model deleted successfully"
    });
}

export default {
    get_3D_Models,
    add_3D_Model,
    delete_3D_Model,
    get_3D_Model
}
