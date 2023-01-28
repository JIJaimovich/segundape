import { CartModel } from "../dao/models/carts.models.js";
import { ProductModel } from "../dao/models/products.models.js";
import fs from "fs";  

export async function getCarts() {
  try {
    const carts = await CartModel.find();
    //console.log(carts);
    //console.log(typeof(carts));
    return carts;
  } catch (error) {
    throw new Error(error.message);
  }
};
export async function createCart(data) {
  try {
    const cart = await CartModel.create(data);
    fsCartsHandler();
    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};
export async function getCart(cid) {
  try {
    const cart = await CartModel.findById(cid).populate("products");
    //console.log(cart);
    //console.log(typeof(cart));
    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function addProductToCart(cid, pid) {
  try {
    const cart = await CartModel.findById(cid);
    let productFound = false;

    cart.total.forEach((product) => {
      if (product.productID === pid) {
        product.quantity++;
        cart.save();
        fsCartsHandler();
        productFound = true;
      }
    });
    
    if (productFound === false) {
      let productCounter = { productID: pid, quantity: 1 };
      cart.total.push(productCounter);
      cart.products.push(pid);
      cart.save();
      fsCartsHandler();
    };
    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};

async function fsCartsHandler(){
  try {
    const carts = await CartModel.find();
    fs.writeFileSync("./src/dao/fs/Carts.json", JSON.stringify(carts));
} catch (error) {
    throw new Error(error.message);
}
}
