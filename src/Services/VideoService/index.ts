import { Request,Response } from "express";
import GenerateUUID from "../../Utilities/GenerateUUID";
import VideoModel from "../../Models/Video";

export const getVideos = async (req:Request,res:Response) => {
    const videos = await VideoModel.find();
    res.json({
        videos
    });
}

const addVideo = async (req:Request,res:Response) => {
    const uuid = GenerateUUID();
    const creationDate = new Date();
    const { name, url } = req.body;
    const video = new VideoModel({
        name: name,
        url: url,
        uuid: uuid,
        creationDate: creationDate
    });
    await video.save();
    res.json({
        message: "Video saved successfully",
        video
    });
}

const deleteVideo = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    await VideoModel.deleteOne({uuid});
    res.json({
        message: "Video deleted successfully"
    });
}

export default {
    getVideos,
    addVideo,
    deleteVideo
}