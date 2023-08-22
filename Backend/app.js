
import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/user-routes.js';
import { routerPost } from './routes/post-routes.js';
import { routerFollow } from './routes/follow-routes.js';
import {routerLike} from './routes/like-routes.js';
import session from 'express-session';
const app = express();
app.use(express.json());
app.use(session({
    secret: 'asdfghjhgfsssdsdsdssdds',
    resave: false,
    saveUninitialized: false,
  }));
app.use("/user",router)
app.use("/follow",routerFollow)
app.use("/post",routerPost)
app.use("/like",routerLike)
mongoose.connect('mongodb://127.0.0.1:27017/SocialMedia')
    .then(() => {
        app.listen(80, () => {
            console.log("Service is running");
        });
        console.log("Connected to database");
    })
    .catch((err) => {
        console.error("Error:", err);
    });

console.log("Hello world");
