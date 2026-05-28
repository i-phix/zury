/* ═══════════════════════════════════════════════════════════════
   Contact Us — Lead Model
   server/src/database/models/contact-us/Lead.model.js
═══════════════════════════════════════════════════════════════ */
import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    firstName: { type: String,  required: true,  trim: true },
    lastName:  { type: String,  required: true,  trim: true },
    email:     { type: String,  required: true,  trim: true, lowercase: true },
    phone:     { type: Number,  required: true },
    company:   { type: String,  required: true,  trim: true },
    country:   { type: String,  required: true },
    portfolio: { type: String,  required: true },
    comments:  { type: String,  default: "" },
    brochure:  { type: Boolean, default: false },
    source:    { type: String,  default: "contact_form" },
    status:    {
      type:    String,
      enum:    ["new", "contacted", "qualified", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);