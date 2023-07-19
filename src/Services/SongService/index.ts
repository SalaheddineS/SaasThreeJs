import { Request,Response } from "express";
import GenerateUUID from "../../Utilities/GenerateUUID";
import SongModel from "../../Models/Song";

export const getSongs = async (req:Request,res:Response) => {
    const songs = await SongModel.find();
    res.json({
        songs
    });
}

const addSong = async (req:Request,res:Response) => {
    const uuid = GenerateUUID();
    const creationDate = new Date();
    const { name, url } = req.body;
    const song = new SongModel({
        name: name,
        url: url,
        uuid: uuid,
        creationDate: creationDate
    });
    await song.save();
    res.json({
        message: "Song saved successfully",
        song
    });
}

const deleteSong = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    await SongModel.deleteOne({uuid});
    res.json({
        message: "Song deleted successfully"
    });
}

export default {
    getSongs,
    addSong,
    deleteSong
}