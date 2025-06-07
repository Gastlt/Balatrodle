import { Router } from "express";
import { getJoker, testGet, testPost } from "../controllers/users.controllers.js";

const router = Router();

router.post("/api/posts", testPost);
router.get("/api/posts/:post", testGet);
router.get("/api/jokers/:id", getJoker);

export default router;