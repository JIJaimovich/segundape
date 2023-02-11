import { Router } from "express";
import { ProductModel } from "../dao/models/products.models.js";
import { CartModel } from "../dao/models/carts.models.js";
import * as UserController from "../controllers/users.controller.js";
const router = Router();


router.get("/products", async (req, res) => {
    
    let { page } = req.query;
    if (!page) { page = 1; };    
    let products = await ProductModel.paginate({},{limit:5, page, lean:true});

    res.render("products", {
        ...products,
    });
    //console.log(products);
});


router.get("/carts/:cid", async (req, res) => {
    const { cid } = req.params;
    const cart = await CartModel.findById(cid).populate("products").lean();
    
    res.render("cart", {
       cart
    });
    console.log(cart._id);
})

// router.get("/signup", UserController.renderSignUp);
// router.get("/signin", UserController.renderSignIn);
// router.post("signup", UserController.signUp); 
export default router;