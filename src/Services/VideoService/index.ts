import { Request,Response } from "express";
import GenerateUUID from "../../Utilities/GenerateUUID";
import VideoModel from "../../Models/Video";
import {uploadVideo} from "../../Configuration/MulterUpload";
import { deleteVideos } from "../../Utilities/HandleFsElements";
import { retrieveVideos } from "../../Utilities/HandleFsElements";

export const getVideo = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    const video = await VideoModel.findOne({uuid: uuid});
    if(!video) throw new Error("Video not found");
    const path = video.url;
    const binary = retrieveVideos(path);
    //res.setHeader('Content-Type', 'video/mp4');
    res.send({video: binary, details : video});
}

export const getVideos = async (req:Request,res:Response) => {
    const videos = await VideoModel.find();
    res.json({
        videos
    });
}

const addVideo = async (req:Request,res:Response) => {
    uploadVideo.single("video")(req,res,async (err:any) => {
        if(err) {
            res.json({
                message: "Error uploading video"
            });
        }
        else {
            const uuid = GenerateUUID();
            const creationDate = new Date();
            const { name } = req.body;
            const video = new VideoModel({
                name: name,
                url: req.file?.filename,
                uuid: uuid,
                creationDate: creationDate
            });
            if(!req.file?.filename) throw new Error("Error uploading video");
            await video.save();
            res.json({
                message: "Video saved successfully",
                video
            });
        } 
    }
    );
}

const deleteVideo = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    if(!uuid) throw new Error("wrong uuid");
    const video = await VideoModel.findOne({uuid});
    if(!video) throw new Error("Video not found"); 
    const url = video.url;
    deleteVideos(url);
    await video.deleteOne();
    res.json({ 
        message: "Video deleted successfully"
    });
}

export default {
    getVideos,
    addVideo,
    deleteVideo,
    getVideo
}