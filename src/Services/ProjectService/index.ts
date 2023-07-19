import { Request,Response } from "express";
import GenerateUUID from "../../Utilities/GenerateUUID";
import ProjectModel from "../../Models/Project";
import SceneModel from "../../Models/Scenes";
export const getProjects = async (req:Request,res:Response) => {
    const projects = await ProjectModel.find();
    res.json({
        projects
    });
}

const addProject = async (req:Request,res:Response) => {
    const uuid = GenerateUUID();
    const creationDate = new Date();
    const { name, description } = req.body;
    const project = new ProjectModel({
        name: name,
        description: description,
        uuid: uuid,
        creationDate: creationDate
    });
    await project.save();
    res.json({
        message: "Project saved successfully",
        project
    });
}

const deleteProject = async (req:Request,res:Response) => {
    const { uuid } = req.params;
    await ProjectModel.deleteOne({uuid});
    res.json({
        message: "Project deleted successfully"
    });
}

const addSceneToProject = async (req:Request,res:Response) => {
    const { uuidScene,uuidProject } = req.params;
    const scene = await SceneModel.findOne({uuid:uuidScene});
    const project = await ProjectModel.findOne({uuid:uuidProject});
    if(!scene || !project) throw new Error("Scene or Project not found");
    project.scenes.push(scene);
    await project.save();
    res.json({
        message: "Scene added to project successfully"
    });
}

export default {
    getProjects,
    addProject,
    deleteProject,
    addSceneToProject
}