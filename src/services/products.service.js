import { ProductModel } from "../dao/models/products.models.js";
import fs from "fs";                      

export async function getProduct(pid){
    try {
        const product = await ProductModel.findById(pid);
        return product;
      } catch (error) {
        throw new Error(error.message);
      }
}

export async function getProducts({page, limit, category, status, price}){
  try {
      let query = {};
      let options = {};

      if (!page) { options.page = 1; };
      if (!limit) { options.limit = 10; };
      if(price && price == "asc"){  
        options.sort = {price: 'asc'}
      } else if ( price && price =="desc" ){
        options.sort = {price: 'desc'}
      }
      if(category) {query.category = category};
      if(status) {query.status = status};
      
      const getProducts = await ProductModel.paginate(query, options); 
      
      return getProducts;
  } catch (error) {
      throw new Error(error.message);
  }
}
export async function createProduct(data){
    try {
        const product = await ProductModel.create(data);
        fsProductsHandler();
        return product;
      } catch (error) {
        throw new Error(error.message);
      }
}
export async function updateProduct(pid, data){
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(pid, data, { new: true });
        fsProductsHandler();
        return updatedProduct;
      } catch (error) {
        throw new Error(error.message);
      }
}
export async function deleteProduct(pid){
    try {
        await ProductModel.delete({ _id: pid });
        fsProductsHandler();        
      } catch (error) {
        throw new Error(error.message);
      }
}


async function fsProductsHandler(){
  try {
    const products = await ProductModel.find();
    fs.writeFileSync("./src/dao/fs/Products.json", JSON.stringify(products));
} catch (error) {
    throw new Error(error.message);
}
}

