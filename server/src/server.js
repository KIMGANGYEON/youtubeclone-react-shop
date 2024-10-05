import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth/auth-routes";
const adminProductsRouter = require("./routes/admin/products-routes");
const shopProductRouter = require("./routes/shop/product-routes");
const shopCarttRouter = require("./routes/shop/cart-routes");

mongoose
  .connect("mongodb+srv://rkddus3177:qwer1234@youtube.gobbp.mongodb.net/")
  .then(() => console.log("✅Connect mongoose"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: " http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/shop/products", shopProductRouter);
app.use("/api/shop/cart", shopCarttRouter);

app.listen(PORT, () => console.log(`🔥Server app listen on ${PORT}`));
