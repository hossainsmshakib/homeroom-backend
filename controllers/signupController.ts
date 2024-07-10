import { Request, Response } from "express";
import {
  findAllSignupUser,
  postSignupUser,
} from "../models/usertable/usertableQuery";

export async function getAllSignupInfo(req: Request, res: Response) {
  try {
    const user = await findAllSignupUser();
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function postNewSignupUser(req: Request, res: Response) {
  try {
    const { name, permanentAddress, email, password } = req.body;
    if (!name || !permanentAddress || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const user = await postSignupUser({ name, permanentAddress, email, password });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
/* 
export async function postFoodToRestaurant (req: Request, res: Response) {
  try {
    let id = req.params.id;
    const restaurantId = Number(id);
    if (id && restaurantId) {
      const { name, price } = req.body;
      if (typeof name === 'string' && typeof price === 'number') {
        const food = await addFoodToRestaurant(restaurantId, {name, price});
        res.status(201).json(food);
      } else res.status(400).json({ message: "Invalid food information." });
    } else res.status(400).json({ message: "Invalid restaurant ID." });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function searchFood (req: Request, res: Response) {
  try {
    const search = req.query.q;
    const searchTerm = search?.toString();

    if (searchTerm) {
      const food = await findFoodBySearchTerm(searchTerm);
      res.json({ data: food });
    } else res.json({ data: [] });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
} */
