/* ═══════════════════════════════════════════════════════════════
   Contact Us — Custom Form Hook
   src/modules/contact-us/hooks/useContactForm.js
═══════════════════════════════════════════════════════════════ */
import { useReducer, useCallback, useMemo } from "react";
import {
  FORM_FIELDS,
  INITIAL_FORM_STATE,
  COUNTRY_OPTIONS,
  makePhoneValidator,
} from "../data/formConfig";
import { contactService }  from "../services/contact.service";
import { formatPayload }   from "../utils/formatPayload";

/* ── Initial state ───────────────────────────────────────────── */
const initialState = {
  step:         "country",   // "country" | "form"
  values:       { ...INITIAL_FORM_STATE, phoneCode: "" },
  errors:       {},
  touched:      {},
  brochure:     false,
  submitStatus: "idle",      // "idle" | "loading" | "success" | "error"
  serverError:  null,
};

/* ── Reducer ─────────────────────────────────────────────────── */
function formReducer(state, action) {
  switch (action.type) {

    case "SELECT_COUNTRY": {
      const match = COUNTRY_OPTIONS.find((c) => c.value === action.value);
      return {
        ...state,
        step: "form",
        values: {
          ...state.values,
          country:   action.value,
          phoneCode: match ? match.dialCode : "",
          phone:     "",
        },
        errors:  { ...state.errors,  country: "", phone: "" },
        touched: { ...state.touched, country: false, phone: false },
      };
    }

    case "BACK_TO_COUNTRY":
      return { ...state, step: "country" };

    case "CHANGE":
      return {
        ...state,
        values: { ...state.values, [action.name]: action.value },
        errors: { ...state.errors,  [action.name]: "" },
      };

    case "BLUR": {
      const field = FORM_FIELDS.find((f) => f.name === action.name);
      const error = field ? field.validate(state.values[action.name]) : "";
      return {
        ...state,
        touched: { ...state.touched, [action.name]: true },
        errors:  { ...state.errors,  [action.name]: error },
      };
    }

    case "BLUR_PHONE": {
      const error = action.validate(state.values.phone);
      return {
        ...state,
        touched: { ...state.touched, phone: true },
        errors:  { ...state.errors,  phone: error },
      };
    }

    case "TOGGLE_BROCHURE":
      return { ...state, brochure: !state.brochure };

    case "VALIDATE_ALL": {
      const errors  = Object.fromEntries(
        FORM_FIELDS.map((f) => [f.name, f.validate(state.values[f.name])])
      );
      errors.phone = action.phoneValidate(state.values.phone);
      const touched = Object.fromEntries(
        FORM_FIELDS.map((f) => [f.name, true])
      );
      return { ...state, errors, touched };
    }

    case "SET_STATUS":
      return {
        ...state,
        submitStatus: action.status,
        serverError:  action.serverError ?? null,
      };

    default:
      return state;
  }
}

/* ── Hook ────────────────────────────────────────────────────── */
export function useContactForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  /* Dynamic phone validator — rebuilds when country changes */
  const phoneValidate = useMemo(() => {
    const match = COUNTRY_OPTIONS.find((c) => c.value === state.values.country);
    return makePhoneValidator(match?.validStarts ?? []);
  }, [state.values.country]);

  const handleSelectCountry = useCallback((value) => {
    dispatch({ type: "SELECT_COUNTRY", value });
  }, []);

  const handleBackToCountry = useCallback(() => {
    dispatch({ type: "BACK_TO_COUNTRY" });
  }, []);

  const handleChange = useCallback((name, value) => {
    dispatch({ type: "CHANGE", name, value });
  }, []);

  const handleBlur = useCallback((name) => {
    if (name === "phone") {
      dispatch({ type: "BLUR_PHONE", validate: phoneValidate });
    } else {
      dispatch({ type: "BLUR", name });
    }
  }, [phoneValidate]);

  const handleToggleBrochure = useCallback(() => {
    dispatch({ type: "TOGGLE_BROCHURE" });
  }, []);

  /* ── Submit ── */
  const handleSubmit = useCallback(async () => {
    /* 1. Run all validators and mark all fields touched */
    const errors = Object.fromEntries(
      FORM_FIELDS.map((f) => [f.name, f.validate(state.values[f.name])])
    );
    errors.phone = phoneValidate(state.values.phone);

    dispatch({ type: "VALIDATE_ALL", phoneValidate, errors });

    /* 2. Abort if any field has an error */
    const hasErrors = Object.values(errors).some((e) => e !== "");
    if (hasErrors) return;

    /* 3. Fire the API call */
    dispatch({ type: "SET_STATUS", status: "loading" });

    try {
      await contactService.submit(
        formatPayload(state.values, state.brochure)
      );
      dispatch({ type: "SET_STATUS", status: "success" });
    } catch (err) {
      const message =
        err?.response?.data?.message ?? "Something went wrong. Please try again.";
      dispatch({ type: "SET_STATUS", status: "error", serverError: message });
    }
  }, [state.values, state.brochure, phoneValidate]);

  const isValid = FORM_FIELDS
    .filter((f) => f.required)
    .every((f) => String(state.values[f.name]).trim() !== "");

  return {
    step:                 state.step,
    values:               state.values,
    errors:               state.errors,
    touched:              state.touched,
    brochure:             state.brochure,
    submitStatus:         state.submitStatus,
    serverError:          state.serverError,
    isValid,
    phoneValidate,
    handleSelectCountry,
    handleBackToCountry,
    handleChange,
    handleBlur,
    handleToggleBrochure,
    handleSubmit,
  };
}