import { Request,Response } from "express";
import GenerateUUID from "../../Utilities/GenerateUUID";
import SceneModel from "../../Models/Scenes";
import _3D_ModelModel from "../../Models/_3D_Model";
import TextModel from "../../Models/Text";
import ImageModel from "../../Models/Image";
import SongModel from "../../Models/Song";
import VideoModel from "../../Models/Video";

export const getScenes = async (req:Request,res:Response) => {
    const scenes = await SceneModel.find();
    res.json({
        scenes
    });
}

const addScene = async (req:Request,res:Response) => {
    const uuid = GenerateUUID();
    const creationDate = new Date();
    const { name, description } = req.body;
    const scene = new SceneModel({
        name: name,
        description: description,
        uuid: uuid,
        creationDate: creationDate
    });
    await scene.save();
    res.json({
        message: "Scene saved successfully",
        scene
    });
}

const deleteScene = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    SceneModel.deleteOne({uuid});
    res.json({
        message: "Scene deleted successfully"
    });
}

const addImageToScene = async (req:Request,res:Response) => {
    const { uuidScene,uuidImage } = req.params;
    const scene = await SceneModel.findOne({uuid: uuidScene});
    const image = await ImageModel.findOne({uuid: uuidImage});
    if(!scene || !image) throw new Error("Scene or image not found"); 
    scene.images.push(image);
    await scene.save();
    res.json({
        message: "Image added to scene successfully"
    });
}

const addVideoToScene = async (req:Request,res:Response) => {
    const { uuidScene,uuidVideo } = req.params;
    const scene = await SceneModel.findOne({uuid: uuidScene});
    const video = await VideoModel.findOne({uuid: uuidVideo});
    if(!scene || !video) throw new Error("Scene or video not found");
    scene.videos.push(video);
    await scene.save();
    res.json({
        message: "Video added to scene successfully"
    });
}

const addSongToScene = async (req:Request,res:Response) => {
    const { uuidScene,uuidSong } = req.params;
    const scene = await SceneModel.findOne({uuid: uuidScene});
    const song = await SongModel.findOne({uuid: uuidSong});
    if(!scene || !song) throw new Error("Scene or song not found");
    scene.songs.push(song);
    await scene.save();
    res.json({
        message: "Song added to scene successfully"
    });
}

const addTextToScene = async (req:Request,res:Response) => {
    const { uuidScene,uuidText } = req.params;
    const scene = await SceneModel.findOne({uuid: uuidScene});
    const text = await TextModel.findOne({uuid: uuidText});
    if(!scene || !text) throw new Error("Scene or text not found");
    scene.texts.push(text);
    await scene.save();
    res.json({
        message: "Text added to scene successfully"
    });
}

const add3DModelToScene = async (req:Request,res:Response) => {
    const { uuidScene,uuid3DModel } = req.params;
    const scene = await SceneModel.findOne({uuid: uuidScene});
    const _3DModel = await _3D_ModelModel.findOne({uuid: uuid3DModel});
    if(!scene || !_3DModel) throw new Error("Scene or 3DModel not found");
    scene._3DModels.push(_3DModel);
    await scene.save();
    res.json({
        message: "3DModel added to scene successfully"
    });
}

const deleteImageFromScene = async (req: Request, res: Response) => {
    const { uuidScene, uuidImage } = req.params;
    const scene = await SceneModel.findOne({ uuid: uuidScene }).populate("images").exec();
    if (!scene ) throw new Error("Scene or image not found");
    scene.images = scene.images.filter((img) => img.uuid !== uuidImage);
    await scene.save(); 
    res.json({
      message: "Image deleted from scene successfully",
    });
  };
  

const deleteVideoFromScene = async (req:Request,res:Response) => {
    const { uuidScene,uuidVideo } = req.params;
    const scene = await SceneModel.findOne({uuid: uuidScene}).populate("videos").exec();
    if(!scene ) throw new Error("Scene or video not found");
    scene.videos = scene.videos.filter((video) => video.uuid !== uuidVideo);
    await scene.save();
    res.json({
        message: "Video deleted from scene successfully"
    });
}

const deleteSongFromScene = async (req:Request,res:Response) => {
    const { uuidScene,uuidSong } = req.params;
    const scene = await SceneModel.findOne({uuid: uuidScene}).populate("songs").exec();
    if(!scene) throw new Error("Scene or song not found");
    scene.songs = scene.songs.filter((song) => song.uuid !== uuidSong);
    await scene.save();
    res.json({
        message: "Song deleted from scene successfully"
    });
}

const deleteTextFromScene = async (req:Request,res:Response) => {
    const { uuidScene,uuidText } = req.params;
    const scene = await SceneModel.findOne({uuid: uuidScene}).populate("texts").exec();
    if(!scene) throw new Error("Scene or text not found");
    scene.texts = scene.texts.filter((text) => text.uuid !== uuidText);
    await scene.save();
    res.json({
        message: "Text deleted from scene successfully"
    });
}

const delete3DModelFromScene = async (req:Request,res:Response) => {
    const { uuidScene,uuid3DModel } = req.params;
    const scene = await SceneModel.findOne({uuid: uuidScene}).populate("_3DModels").exec();
    if(!scene) throw new Error("Scene or 3DModel not found");
    scene._3DModels = scene._3DModels.filter((_3DModel) => _3DModel.uuid !== uuid3DModel);
    await scene.save();
    res.json({
        message: "3DModel deleted from scene successfully"
    });
}




export default {
    getScenes,
    addScene,
    deleteScene,
    addImageToScene,
    addVideoToScene,
    addSongToScene,
    addTextToScene,
    add3DModelToScene,
    deleteImageFromScene,
    deleteVideoFromScene,
    deleteSongFromScene,
    deleteTextFromScene,
    delete3DModelFromScene
}