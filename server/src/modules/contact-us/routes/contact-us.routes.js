/* ═══════════════════════════════════════════════════════════════
   Contact Us — Routes
   server/src/modules/contact-us/routes/contact-us.routes.js
═══════════════════════════════════════════════════════════════ */
import express               from "express";
import { submitContactForm } from "../controllers/contact-us.controller.js";
import { validateContactForm } from "../validators/contact-us.validator.js";

const router = express.Router();

router.post("/", validateContactForm, submitContactForm);

export default router;