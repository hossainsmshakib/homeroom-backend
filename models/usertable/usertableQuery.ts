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

export async function postSignupUser(userData: { name: string; permanentAddress: string; email: string; password: string }) {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      console.log(error);
      throw new Error('Error adding user.');
    }
  }
/* 

export async function addFoodToRestaurant (restaurantId: number, data: { name: string, price: number }) {
  try {
    const newFood = await Food.create({ ...data, restaurantId });
    return newFood;
  } catch (error) {
    throw new Error('Error adding food to restaurant.');
  }
}


export async function findFoodBySearchTerm (searchTerm: string) {
  try {
    const food = await Food.findAll({
      where: {
        name: {[Op.iLike]: `%${searchTerm}%`}
      },
      include: [Restaurant]
    });
    return food;
  } catch (error) {
    throw new Error('Error searching for food.');
  }
} */
