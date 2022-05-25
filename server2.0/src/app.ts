import express from "express";
import { SERVER_PORT } from "./config";
import { UserRoute } from "./routes/user";

const app = express();

app.listen(SERVER_PORT, () => {
  console.log(`SERVER IS RUNNING AT http://localhost:${SERVER_PORT}`);

  app.use("/api/user", UserRoute);
});
