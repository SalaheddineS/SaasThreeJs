import { Request,Response } from "express";
import GenerateUUID from "../../Utilities/GenerateUUID";
import SongModel from "../../Models/Song";
import {uploadAudio} from "../../Configuration/MulterUpload";
import { deleteAudios,retrieveAudios } from "../../Utilities/HandleFsElements";

export const getSong = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    const song = await SongModel.findOne({uuid: uuid});
    if(!song) throw new Error("Song not found");
    const path = song.url;
    const binary = retrieveAudios(path);
    res.send({song: binary, details : song});
}

export const getSongs = async (req:Request,res:Response) => {
    const songs = await SongModel.find();
    res.json({
        songs
    });
}

const addSong = async (req:Request,res:Response) => {
    uploadAudio.single("song")(req,res,async (err:any) => {
        if(err) {
            res.json({
                message: "Error uploading song"
            });
        }
        else {
            const uuid = GenerateUUID();
            const creationDate = new Date();
            const { name } = req.body;
            const song = new SongModel({
                name: name,
                url: req.file?.filename,
                uuid: uuid,
                creationDate: creationDate
            });
            if(!req.file?.filename) throw new Error("Error uploading song");
            await song.save();
            res.json({
                message: "Song saved successfully",
                song
            });
        } 
    }
    );
}

const deleteSong = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    if(!uuid) throw new Error("wrong uuid");
    const song = await SongModel.findOne({uuid: uuid});
    if(!song) throw new Error("Song not found");
    deleteAudios(song.url);
    await song.deleteOne();
    res.json({
        message: "Song deleted successfully"
    });
}

export default {
    getSongs,
    addSong,
    deleteSong,
    getSong
}