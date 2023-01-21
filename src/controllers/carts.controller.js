import * as CartService from '../services/carts.service.js';
import { STATUS } from '../constants/constants.js';

export async function getCarts(req,res){
    try {
        const response = await CartService.getCarts();
        res.json({
            carts: response,
            status: STATUS.SUCCESS,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            status: STATUS.FAIL,
        });
    }
};
export async function createCart(req,res){
    try {
        const { body } = req;
        const response = await CartService.createCart(body);
        res.status(201).json({
            product: response,
            status: STATUS.SUCCESS,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            status: STATUS.FAIL,
        });
    }
};
export async function getCart(req, res){
    try {
        const { cid } = req.params;
        const response = await CartService.getCart(cid);
        res.json({
            cart: response,
            status: STATUS.SUCCESS,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            status: STATUS.FAIL,
        });
    }
};
export async function addProductToCart(req,res){
    try {
        const { cid } = req.params;
        const response = await CartService.addProductToCart(cid);
        res.json({
            cart: response,
            status: STATUS.SUCCESS,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            status: STATUS.FAIL,
        });
    }
};