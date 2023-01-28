import * as ProductService from '../services/products.service.js';
import { STATUS } from '../constants/constants.js';

export async function getProduct(req, res) {
    try {
        const { pid } = req.params;
        const response = await ProductService.getProduct(pid);
        res.json({
            product: response,
            status: STATUS.SUCCESS,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            status: STATUS.FAIL,
        });
    }
}
// export async function getProducts(req, res) {
//     try {
//         const response = await ProductService.getProducts();
//         res.json({
//             products: response,
//             status: STATUS.SUCCESS,
//         });
//     } catch (error) {
//         res.status(400).json({
//             error: error.message,
//             status: STATUS.FAIL,
//         });
//     }
// }
export async function getProducts(req, res) {
    try {
        const { page, limit, category, status, price} = req.query;
        
        
        const response = await ProductService.getProducts({ page, limit, category, status, price});
        
        res.json({
            products: response,
            status: STATUS.SUCCESS,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            status: STATUS.FAIL,
        });
    }
}
export async function createProduct(req, res) {
    try {
        const { body } = req;
        const response = await ProductService.createProduct(body);
        res.status(201).json({
            cart: response,
            status: STATUS.SUCCESS,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            status: STATUS.FAIL,
        });
    }
}
export async function updateProduct(req, res) {
    try {
        const { pid } = req.params;
        const { body } = req;
        const response = await ProductService.updateProduct(pid, body);
        res.status(201).json({
            cart: response,
            status: STATUS.SUCCESS,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            status: STATUS.FAIL,
        });
    }
}
export async function deleteProduct(req, res) {
    try {
        const { pid } = req.params;
        await ProductService.deleteProduct(pid);
        res.status(201).json({
            message: "Product deleted",
            status: STATUS.SUCCESS,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            status: STATUS.FAIL,
        });
    }
}


export async function showProducts(req, res) {
    try {
        res.render({});
    } catch (error) {
        res.status(400).json({
            error: error.message,
            status: STATUS.FAIL,
        });
    }
}