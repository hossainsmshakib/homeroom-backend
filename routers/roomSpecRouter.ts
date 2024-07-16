// routers/roomSpecRouter.ts

import { Router } from "express";
import RoomSpecController from "../controllers/roomSpecController";

const router = Router();

router.post("/", RoomSpecController.createRoomSpec);
router.get("/", RoomSpecController.getAllRoomSpecs);
/* router.get("/:roomId", RoomSpecController.getRoomSpec);
router.put("/:roomId", RoomSpecController.updateRoomSpec);
router.delete("/:roomId", RoomSpecController.deleteRoomSpec); */

export default router;
