import express from "express";
import * as ProductController from "../controllers/products.controller.js";

const route = express.Router();

route.get("/", ProductController.getProducts);
route.get("/:pid", ProductController.getProduct);
route.post("/", ProductController.createProduct);
route.put("/:pid", ProductController.updateProduct);
route.delete("/:pid", ProductController.deleteProduct); 

// route.get("/");
// route.get("/:pid");
// route.post("/");
// route.put("/:pid");
// route.delete("/:pid");

export default route;