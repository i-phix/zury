/* ═══════════════════════════════════════════════════════════════
   Contact Us — Controller
   server/src/modules/contact-us/controllers/contact-us.controller.js
═══════════════════════════════════════════════════════════════ */
import { contactUsService } from "../services/contact-us.service.js";

export async function submitContactForm(req, res, next) {
  try {
    const lead = await contactUsService.createLead(req.body);
    return res.status(201).json({ success: true, id: lead._id });
  } catch (err) {
    next(err);
  }
}