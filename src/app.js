import express from "express";
import dotenv from "dotenv";
import "./config/db.js";
import ProductsRouter from "./routers/products.route.js";
import CartsRouter from "./routers/carts.route.js";
import ViewsRouter from "./routers/views.route.js";
import UsersRouter from "./routers/users.route.js";
import AuthRouter from "./routers/auth.route.js";
import { engine } from "express-handlebars";
import cookie from "cookie-parser";
import session from "express-session";
import mongoStore from "connect-mongo";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "views");

app.use(express.static('src'));

app.use(
  session({
    store: new mongoStore({
      mongoUrl: process.env.MONGO_URI_SESSION,
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


app.use("/", ViewsRouter);
app.use("/api/products", ProductsRouter); 
app.use("/api/carts", CartsRouter);
app.use("/api/users", UsersRouter);
app.use("/api/auth", AuthRouter);                                        

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🎈 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));