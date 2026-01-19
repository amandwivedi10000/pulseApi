import { Router } from "express";
import { pulse } from "../controllers/pulse.controllers";

const router = Router();

router.route("/").post(pulse);

export default router;
