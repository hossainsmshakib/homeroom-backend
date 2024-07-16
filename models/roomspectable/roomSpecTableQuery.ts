// models/roomspectable/roomSpecTableQuery.ts

import RoomSpec from "./roomSpecTable";
import { RoomSpecAttributes } from "../../controllers/roomSpecController";

export async function createRoomSpec(roomSpecData: RoomSpecAttributes) {
  try {
    const roomSpec = await RoomSpec.create(roomSpecData);
    return roomSpec;
  } catch (error) {
    console.error("Error creating roomSpec:", error);
    throw new Error("Error creating roomSpec.");
  }
}

export async function findAllRoomSpecs() {
  try {
    const roomSpecs = await RoomSpec.findAll(); // Use findAll without any conditions
    return roomSpecs;
  } catch (error) {
    console.error("Error finding roomSpecs:", error);
    throw new Error("Error finding roomSpecs.");
  }
}

export async function findRoomSpecById(roomId: number) {
  try {
    const roomSpec = await RoomSpec.findByPk(roomId);
    return roomSpec;
  } catch (error) {
    console.error("Error finding roomSpec by ID:", error);
    throw new Error("Error finding roomSpec by ID.");
  }
}

export async function updateRoomSpec(
  roomId: number,
  roomSpecData: Partial<RoomSpecAttributes>
) {
  try {
    const [updated] = await RoomSpec.update(roomSpecData, {
      where: { roomId },
      returning: true,
    });
    if (updated) {
      const updatedRoomSpec = await RoomSpec.findByPk(roomId);
      return updatedRoomSpec;
    }
    throw new Error("RoomSpec not found.");
  } catch (error) {
    console.error("Error updating roomSpec:", error);
    throw new Error("Error updating roomSpec.");
  }
}

export async function deleteRoomSpec(roomId: number) {
  try {
    const deleted = await RoomSpec.destroy({ where: { roomId } });
    return deleted;
  } catch (error) {
    console.error("Error deleting roomSpec:", error);
    throw new Error("Error deleting roomSpec.");
  }
}
