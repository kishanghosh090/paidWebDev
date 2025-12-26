import express from "express";
import * as controller from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;
