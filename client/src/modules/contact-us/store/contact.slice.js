/* ═══════════════════════════════════════════════════════════════
   Contact Us — Redux Slice
   src/modules/contact-us/store/contact.slice.js

   NOTE: Form state is managed locally in useContactForm (useReducer).
   This slice is reserved for cross-module state that other parts of
   the app need to react to — e.g. showing a global success banner,
   or the dashboard knowing a new lead came in via websocket.
═══════════════════════════════════════════════════════════════ */
import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    lastLeadId:    null,   // ID of the most recently submitted lead
    totalSubmitted: 0,     // running count for the session
  },
  reducers: {
    leadSubmitted(state, action) {
      state.lastLeadId     = action.payload.id;
      state.totalSubmitted += 1;
    },
    resetContact(state) {
      state.lastLeadId     = null;
      state.totalSubmitted = 0;
    },
  },
});

export const { leadSubmitted, resetContact } = contactSlice.actions;
export default contactSlice.reducer;