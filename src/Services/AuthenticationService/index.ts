import passport from "../../Configuration/JwtPassportJs";
import verifyToken from "../../Utilities/VerifyToken";

import generateToken from "../../Utilities/GenerateToken";
import { VerifyPassword } from "../../Utilities/VerifyPassword";
import { Request, Response } from "express";
import UserModel from "../../Models/User";

const login = async (req: Request, res: Response) => 
{
  const { email, password } = req.body;
  if (!email || !password) throw new Error("Email and password are required");
  const user = await UserModel.findOne({ email: email });
  if (!user) throw new Error("User not found");
  if (!(await VerifyPassword(password, user.password)))
    throw new Error("Password is incorrect");
  const token = generateToken(user.uuid);
  res.status(200).json({ token });

};

export default {
    login,
}


