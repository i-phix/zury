/* ═══════════════════════════════════════════════════════════════
   Contact Us — Custom Form Hook
   src/modules/contact-us/hooks/useContactForm.js
═══════════════════════════════════════════════════════════════ */
import { useReducer, useCallback, useMemo } from "react";
import {
  FORM_FIELDS,
  INITIAL_FORM_STATE,
  COUNTRY_OPTIONS,
} from "../data/formConfig";
import { makePhoneValidator }            from "../utils/phoneUtils";
import { validateAll, hasErrors }        from "../utils/contactValidators";
import { extractErrorMessage, touchAll } from "../utils/submitHelpers";
import { SUBMIT_STATUS }                 from "../constants/contact.constants";
import { contactService }                from "../services/contact.service";
import { analyticsService }              from "../services/analytics.service";
import { formatPayload }                 from "../utils/formatPayload";

/* ── Initial state ───────────────────────────────────────────── */
const initialState = {
  step:           "country",
  values:         { ...INITIAL_FORM_STATE, phoneCode: "" },
  errors:         {},
  touched:        {},
  brochure:       false,
  submitStatus:   SUBMIT_STATUS.IDLE,
  serverError:    null,
  successMessage: null,
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

    case "VALIDATE_ALL":
      return {
        ...state,
        errors:  action.errors,
        touched: touchAll(FORM_FIELDS),
      };

    case "SET_STATUS":
      return {
        ...state,
        submitStatus:   action.status,
        serverError:    action.serverError    ?? null,
        successMessage: action.successMessage ?? null,
      };

    default:
      return state;
  }
}

/* ── Hook ────────────────────────────────────────────────────── */
export function useContactForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const phoneValidate = useMemo(() => {
    const match = COUNTRY_OPTIONS.find((c) => c.value === state.values.country);
    return makePhoneValidator(match?.validStarts ?? [], match?.localLength);
  }, [state.values.country]);

  const handleSelectCountry = useCallback((value) => {
    dispatch({ type: "SELECT_COUNTRY", value });
    analyticsService.trackCountrySelected(value);
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
    const errors = validateAll(FORM_FIELDS, state.values, phoneValidate);
    dispatch({ type: "VALIDATE_ALL", errors });

    if (hasErrors(errors)) return;

    dispatch({ type: "SET_STATUS", status: SUBMIT_STATUS.LOADING });

    try {
      const result = await contactService.submit(
        formatPayload(state.values, state.brochure)
      );
      analyticsService.trackFormSubmitted(state.values.country, state.values.portfolio);
      dispatch({
        type:           "SET_STATUS",
        status:         SUBMIT_STATUS.SUCCESS,
        successMessage: result.message ?? null,
      });
    } catch (err) {
      const message = extractErrorMessage(err);
      analyticsService.trackSubmitError(message);
      dispatch({
        type:        "SET_STATUS",
        status:      SUBMIT_STATUS.ERROR,
        serverError: message,
      });
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
    successMessage:       state.successMessage,
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