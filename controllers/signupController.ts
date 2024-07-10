import { Request, Response } from "express";
import {
  findAllSignupUser,
  postSignupUser,
} from "../models/usertable/usertableQuery";

export async function getAllSignupInfo(req: Request, res: Response) {
  try {
    const users = await findAllSignupUser();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving users." });
  }
}
export async function postNewSignupUser(req: Request, res: Response) {
  try {
    const { name, permanentAddress, email, password } = req.body;
    if (!name || !permanentAddress || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const user = await postSignupUser({
      name,
      permanentAddress,
      email,
      password,
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding user." });
  }
}
