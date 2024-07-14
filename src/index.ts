import express, { Express, Request, Response } from "express";
import sequelize from "../models";
import config from "../config";
import signupRouter from "../routers/signuprouter";
import loginRouter from "../routers/loginrouter";
import RoomSpec from "../models/roomspectable/roomSpecTable";
const cors = require("cors");

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use("/homeroom", signupRouter);
app.use("/homeroom", loginRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO FROM EXPRESS + TS!!!!");
});

app.listen(config.PORT, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await RoomSpec.sync();
    console.log(`Server is running on port ${config.PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
0