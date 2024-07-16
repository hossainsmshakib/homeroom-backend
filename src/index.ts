import express, { Express, Request, Response } from "express";
import sequelize from "../models"; 
import config from "../config"; 
import signupRouter from "../routers/signuprouter"; 
import loginRouter from "../routers/loginrouter"; 
import roomSpecRoutes from "../routers/roomSpecRouter"; 
import { createRoomSpec } from "../models/roomspectable/roomSpecTableQuery"; 
import roomSpecController from "../controllers/roomSpecController";


const router = express.Router();
const cors = require("cors");

const app: Express = express();
app.use(express.json());

// Enable CORS
app.use(cors());

// Define routes
app.use("/homeroom", signupRouter);
app.use("/homeroom", loginRouter);
app.use("/homeroom", roomSpecRoutes); // Mount roomSpecRoutes under /homeroom path

// Define POST endpoint for creating room specs
app.post("/homeroom/roomspec", async (req: Request, res: Response) => {
  try {
    const result = await createRoomSpec(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating room specification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
/*
app.get('/homeroom/roomspec', async (req: Request, res: Response) => {
  try {
    const roomSpecs = await getAllRoomSpecs();
    res.status(200).json(roomSpecs);
  } catch (error) {
    console.error('Error fetching room specs:', error);
    res.status(500).json({ error: 'Failed to fetch room specs' });
  }
}); */
// Hello world endpoint
app.get("/", (req: Request, res: Response) => {
  res.send("HELLO FROM EXPRESS + TS!!!!");
});

// Start server
const PORT = config.PORT || 4000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
function getAllRoomSpecs() {
  throw new Error("Function not implemented.");
}

