import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controllers.js";

// router instance --------
const router = Router();

router.route("/").get(healthCheck);

export default router;
