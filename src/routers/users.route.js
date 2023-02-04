import { Router } from "express";
import * as UserController from "../controllers/users.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = new Router();



router.post("/", UserController.createUser);
router.get("/:email", auth, UserController.getUser);


router.get("/test/signup", UserController.renderSignUp);
router.get("/test/signin", UserController.renderSignIn);
router.get("/test/logout", UserController.logOut);
router.post("/test/signin", UserController.signIn);
router.post("/test/signup", UserController.signUp);


export default router;