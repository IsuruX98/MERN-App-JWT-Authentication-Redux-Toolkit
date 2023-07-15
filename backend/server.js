import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use(notFound);
app.use(errorHandler);

// - **POST /api/users** - Register a user
// - **POST /api/users/auth** - authenticate a user and get token
// - **POST /api/users/logout** - logout user and clear cookie
// - **GET /api/users/profile** - get user profile
// - **PUT /api/users/profile** - update profile

app.listen(port, () => {
  console.log(`Server stared on port ${port} 🚀`);
});
