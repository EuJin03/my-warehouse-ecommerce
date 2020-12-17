import { config } from "dotenv";
import express from "express";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";

config();
connectDB();
const app = express();

// app.use((req, res, next) => {
//   // middleware // custom error handler -> able to access everything in req, res
//   console.log(req.originalUrl);
//   next();
// });

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);
