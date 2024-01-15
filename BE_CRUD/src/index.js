import { app } from "./app.js";
import { connectDb } from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDb().then(() => {
  app.on("error", (error) => {
    console.log(`Error in express app ${error}`);
  });
  app.listen(process.env.PORT, () => {
    console.log(`App listen on Port ${process.env.PORT}`);
  });
});
