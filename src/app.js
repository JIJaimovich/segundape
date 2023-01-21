import express from "express";
import dotenv from "dotenv";
import "./config/db.js";
import ProductsRouter from "./routers/products.route.js";
import CartsRouter from "./routers/carts.route.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", ProductsRouter); 
app.use("/api/carts", CartsRouter);                                        

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🎈 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));