import { Router } from "express";
import passport from "../utils/passport.util.js";

const router = Router();

router.get("/fail", (req, res)=>{
  console.log('Fail');
  res.send('Fail');
})

router.post('/signup', passport.authenticate("signup", {
  failureRedirect:'/api/passportLocal/fail'
}), (req, res) => { //pasar a un controlador
  res.status(201).json({user:req.user});
});

router.post('/signin', passport.authenticate('signin', {
  failureRedirect:'/api/passportLocal/fail'
}), (req, res) => {  //pasar a un controlador
  req.session.logged = true;
  req.session.user = req.user;
  res.send('User signed in using passport local');
});


export default router;