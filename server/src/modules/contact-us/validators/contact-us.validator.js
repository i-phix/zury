/* ═══════════════════════════════════════════════════════════════
   Contact Us — Validator
   server/src/modules/contact-us/validators/contact-us.validator.js
═══════════════════════════════════════════════════════════════ */
import { body, validationResult } from "express-validator";

export const validateContactForm = [
  body("firstName").trim().notEmpty().withMessage("First name is required"),
  body("lastName").trim().notEmpty().withMessage("Last name is required"),
  body("email").trim().isEmail().withMessage("Valid email is required"),
  body("phone").notEmpty().withMessage("Phone is required")
    .isNumeric().withMessage("Phone must be a number"),
  body("company").trim().notEmpty().withMessage("Company is required"),
  body("country").trim().notEmpty().withMessage("Country is required"),
  body("portfolio").trim().notEmpty().withMessage("Portfolio is required"),
  body("brochure").optional().isBoolean(),
  body("comments").optional().trim(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: errors.array()[0].msg,
        errors:  errors.array(),
      });
    }
    next();
  },
];