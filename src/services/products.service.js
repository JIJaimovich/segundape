import { ProductModel } from "../dao/models/products.models.js";                      

export async function getProduct(pid){
    try {
        const product = await ProductModel.findById(pid);
        return product;
      } catch (error) {
        throw new Error(error.message);
      }
}
export async function getProducts(){
    try {
        const products = await ProductModel.find();
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function createProduct(data){
    try {
        const product = await ProductModel.create(data);
        return product;
      } catch (error) {
        throw new Error(error.message);
      }
}
export async function updateProduct(pid, data){
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(pid, data, { new: true });
        return updatedProduct;
      } catch (error) {
        throw new Error(error.message);
      }
}
export async function deleteProduct(pid){
    try {
        //hard delete:
        //await ProductModel.findByIdAndDelete(pid);
        await ProductModel.delete({ _id: pid });        
      } catch (error) {
        throw new Error(error.message);
      }
}