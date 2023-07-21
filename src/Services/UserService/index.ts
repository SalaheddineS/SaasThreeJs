import { Request, Response } from "express";
import GenerateUUID from "../../Utilities/GenerateUUID";
import UserModel from "../../Models/User";
import ProjectModel from "../../Models/Project";
import hashPassword from "../../Utilities/HashPassword";

export const getUser = async (req: Request, res: Response) => {
  const { uuid } = req.params;
  if(!uuid) throw new Error("UUID is required");
  const user = await UserModel.findOne({ uuid })
  if(!user) throw new Error("User not found");
  res.json({
    user
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await UserModel.find().populate({
    path: "projects",
    populate: {
      path: "scenes",
      populate: {
        path: "images",
      },
    },
  });
  res.json({
    users,
  });
};

const addUser = async (req: Request, res: Response) => {
  const uuid = GenerateUUID();
  const creationDate = new Date();
  const { name, email, password, mobileNumber } = req.body;
  const hashedPassword = await hashPassword(password);
  const user = new UserModel({
    name: name,
    email: email,
    password: hashedPassword,
    uuid: uuid,
    creationDate: creationDate,
    isActive: true,
    isAdmin: false,
    mobileNumber: mobileNumber,
  });
  await user.save();
  res.json({
    message: "User saved successfully",
    user,
  });
};

const deleteUser = async (req: Request, res: Response) => {
  const { uuid } = req.params;
  await UserModel.findOneAndDelete({ uuid });
  res.json({
    message: "User deleted successfully",
  });
};

const addProjectToUser = async (req: Request, res: Response) => {
  const { uuidProject, uuidUser } = req.params;
  const project = await ProjectModel.findOne({ uuid: uuidProject });
  const user = await UserModel.findOne({ uuid: uuidUser });
  if (!project || !user) throw new Error("Project or User not found");
  user.projects.push(project);
  await user.save();
  res.json({
    message: "Project added to user successfully",
  });
};

const deleteProjectFromUser = async (req: Request, res: Response) => {
    const { uuidProject, uuidUser } = req.params;
    const user = await UserModel.findOne({ uuid: uuidUser }).populate("projects");
    if (!user) throw new Error("Project or User not found");
    user.projects = user.projects.filter((project) => project.uuid !== uuidProject);
    await user.save();
    res.json({
        message: "Project deleted from user successfully",
    });
};

export default {
  getUsers,
  addUser,
  deleteUser,
  addProjectToUser,
  deleteProjectFromUser
};
