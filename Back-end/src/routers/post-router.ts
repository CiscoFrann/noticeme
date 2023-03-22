import { postPost } from "../controllers/post-controllers";
import { Router } from "express";
import { validatePostBody } from "../middlewares/post-middlewares";
import { authenticateToken } from "../middlewares/validateToken-middleware";
import validateModel from "../middlewares/validateModels-middleware";
import PostModels from "../models/post-models";

const postsRouters = Router()

postsRouters.
    post('/', authenticateToken,validateModel(PostModels.PostBodyModel), validatePostBody, postPost)

export { postsRouters }