import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); //less hackers know about that

const port = 8080;

//HTTP GET request
app.get("/", (req, res) => {
  res.status(201).json("Home GET request");
});

//API routes
app.use("/api", router);

//start server only when have valid connection
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port} 😎`);
      });
    } catch (error) {
      console.log("Cannot connect to the server 😢");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection 😢");
  });
