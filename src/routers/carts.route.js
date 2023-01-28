import express from "express";
import * as CartController from "../controllers/carts.controller.js";

const route = express.Router();

route.get("/", CartController.getCarts);
route.get("/:cid", CartController.getCart);
route.post("/", CartController.createCart);
route.post("/:cid/product/:pid", CartController.addProductToCart);
route.delete("/:cid");
//borrar
route.get("/test/:cid", CartController.addProductToCart);

export default route;