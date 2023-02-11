import express from "express";
import dotenv from "dotenv";
dotenv.config();
if (process.env.MONGO_URI) import ("./config/db.js");

import ProductsRouter from "./routers/products.route.js";
import CartsRouter from "./routers/carts.route.js";
import ViewsRouter from "./routers/views.route.js";
import UsersRouter from "./routers/users.route.js";
import AuthRouter from "./routers/auth.route.js";
import PassportLocalRouter from "./routers/passportLocal.route.js";
import GithubRouter from "./routers/github.route.js";

import { engine } from "express-handlebars";
import cookie from "cookie-parser";
import session from "express-session";
import mongoStore from "connect-mongo";
import passport from "passport";


//import { auth } from "./middleware/auth.middleware.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "views");

app.use(express.static('src'));

app.use(
  session({
    store: new mongoStore({
      mongoUrl: process.env.MONGO_URI,
      options: {
        userNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 100000 },
  }),
);

app.use(passport.initialize())
app.use(passport.session())

app.use("/", ViewsRouter);
app.use("/api/products", ProductsRouter); 
app.use("/api/carts", CartsRouter);
app.use("/api/users", UsersRouter);
app.use("/api/auth", AuthRouter);       
app.use("/api/passportLocal", PassportLocalRouter); 
app.use("/api/github", GithubRouter);                                

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🎈 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));