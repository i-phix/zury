/* ═══════════════════════════════════════════════════════════════
   Contact Us — Controller
   server/src/modules/contact-us/controllers/contact-us.controller.js
═══════════════════════════════════════════════════════════════ */
import { contactUsService } from "../services/contact-us.service.js";

export async function submitContactForm(req, res, next) {
  try {
    const lead = await contactUsService.createLead(req.body);
    return res.status(200).json({
      success: true,
      id:      lead._id,
      message: lead.duplicate
        ? "We already have your request. Our team will be in touch shortly."
        : "Thank you! We'll be in touch soon.",
    });
  } catch (err) {
    next(err);
  }
}