import { CartModel } from "../dao/models/carts.models.js";

export async function getCarts(){
    try {
        const carts = await CartModel.find();
        return carts;
    } catch (error) {
        throw new Error(error.message);
    }
};
export async function createCart(data){
    try {
        const cart = await CartModel.create(data);
        return cart;
      } catch (error) {
        throw new Error(error.message);
      }
};
export async function getCart(cid){
    try {
        const cart = await CartModel.findById(cid);
        return cart;
      } catch (error) {
        throw new Error(error.message);
      }
}
export async function addProductToCart(cid){
    const cart = CartModel.findById(cid);
    cart.products.push('prueba')
    cart.save()
};