
import generateToken from "../../Utilities/GenerateToken";
import { VerifyPassword } from "../../Utilities/VerifyPassword";
import { Request, Response } from "express";
import UserModel from "../../Models/User";
import GeneratePassword from "../../Utilities/GeneratePassword";
import GenerateUUID from "../../Utilities/GenerateUUID";
import hashPassword from "../../Utilities/HashPassword";
const login = async (req: Request, res: Response) => 
{
  const { email, password } = req.body;
  if (!email || !password) throw new Error("Email and password are required");
  const user = await UserModel.findOne({ email: email });
  if (!user) throw new Error("User not found");
  if (!(await VerifyPassword(password, user.password))) throw new Error("Password is incorrect");
  const token = generateToken(user.uuid);
  res.status(200).json({ token });

};

const googleLogin = async (req: Request, res: Response) => {
  const user = req.user as { id: string, _json: { email: string,name:string } };
  if(!user) throw new Error("User not found");
  if(!user._json.email) throw new Error("Email not found");
  const userInDb = await UserModel.findOne({ email: user._json.email });
  if(!userInDb)
  {
    const email = user._json.email;
    const uuid = GenerateUUID();
    const name = user._json.name;
    const hashedPassword = await hashPassword(GeneratePassword(20).toString());
    const creationDate = new Date();
    const isActive = true;
    const mobileNumber = "";
    const isAdmin = false;
    const newUser = new UserModel({
      email: email,
      uuid: uuid,
      name: name,
      password: hashedPassword,
      creationDate: creationDate,
      isActive: isActive,
      mobileNumber: mobileNumber,
      isAdmin: isAdmin,
    });
    await newUser.save();
  }
  const token = generateToken(user.id);
  res.status(200).json({ token });
}


export default {
    login,
    googleLogin
}


