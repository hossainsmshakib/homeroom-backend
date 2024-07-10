import express, { Express, Request, Response } from "express";
import sequelize from "../models/usertable/userTable";
import config from "../config";
import router from "../routers/router";

const app: Express = express();
app.use(express.json());
app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO FROM EXPRESS + TS!!!!");
});

app.listen(config.PORT, async () => {
  try {
    //await sequelize.authenticate();
    await sequelize.sync();
    console.log(`now listening on port ${config.PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
