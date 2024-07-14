import { Request, Response } from "express";
import { findUserByEmail } from "../models/usertable/loginQuery";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config"; // Adjusted to match the correct path

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.userId }, config.JWT_SECRET, {
      expiresIn: "1h",
    });
    
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred during login" });
  }
}
