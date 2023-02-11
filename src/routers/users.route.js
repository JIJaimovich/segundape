import { Router } from "express";
import * as UserController from "../controllers/users.controller.js";
import { auth } from "../middleware/auth.middleware.js";

import passport from "../utils/passport.util.js";

const router = new Router();


router.get("/signup", UserController.renderSignUp);

router.get("/signin", UserController.renderSignIn);

router.post('/signup', passport.authenticate("signup", {
    failureRedirect: '/api/passportLocal/fail'
}), UserController.signUp);

router.post('/signin', passport.authenticate('signin', {
    failureRedirect: '/api/passportLocal/fail'
}), UserController.signIn);

router.get("/:email", UserController.getUser);

router.put("/updateUser/:email", auth, UserController.updateUser);
router.put("/updatePassword/:email", auth, UserController.updatePassword);



//app.get('/logout', function(req, res, next){
//     req.logout(function(err) {
//       if (err) { return next(err); }
//       res.redirect('/');
//     });
//   });
  
//router.get("/logout", UserController.logOut);

// router.get('/logout', function(req, res, next){
//     req.logout(function(err) {
//       if (err) { return next(err); }
//       res.redirect('/signin');
//     });
// });
// router.put("/updateUser/:email", auth, UserController.updateUser);
// router.put("/updatePassword/:email", auth, UserController.updatePassword);

//router.post("/", UserController.createUser);
//router.get("/:email", auth, UserController.getUser);


export default router;