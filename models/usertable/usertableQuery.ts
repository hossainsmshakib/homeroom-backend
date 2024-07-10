import { Op } from "sequelize";
import User from "./userTable";

export async function findAllSignupUser() {
  try {
    const user = await User.findAll();
    return user;
  } catch (error) {
    throw new Error("Error finding user.");
  }
}

export async function postSignupUser(userData: {
  name: string;
  permanentAddress: string;
  email: string;
  password: string;
}) {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Error adding user.');
  }
}