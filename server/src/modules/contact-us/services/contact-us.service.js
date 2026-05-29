/* ═══════════════════════════════════════════════════════════════
   Contact Us — Service
   server/src/modules/contact-us/services/contact-us.service.js
═══════════════════════════════════════════════════════════════ */
import Lead from "../../../database/models/contact-us/Lead.model.js";

const DEDUPE_WINDOW_MS = 60 * 1000; // 1 minute

export const contactUsService = {
  async createLead(data) {
    const recent = await Lead.findOne({
      email:     data.email.toLowerCase().trim(),
      createdAt: { $gte: new Date(Date.now() - DEDUPE_WINDOW_MS) },
    }).lean();

    if (recent) {
      return { _id: recent._id, duplicate: true };
    }

    const lead = await Lead.create({
      firstName: data.firstName,
      lastName:  data.lastName,
      email:     data.email,
      phone:     data.phone,
      company:   data.company,
      country:   data.country,
      portfolio: data.portfolio,
      comments:  data.comments ?? "",
      brochure:  data.brochure ?? false,
      source:    data.source   ?? "contact_form",
      status:    "new",
    });

    return lead;
  },
};