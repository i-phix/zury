import { configureStore }  from "@reduxjs/toolkit";
import contactReducer       from "@modules/contact-us/store/contact.slice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,

    // Slices are added here as modules are built:
    //
    // auth:         authReducer,
    // dashboard:    dashboardReducer,
    // properties:   propertiesReducer,
    // leasing:      leasingReducer,
    // tenants:      tenantsReducer,
    // payments:     paymentsReducer,
    // maintenance:  maintenanceReducer,
    // accounting:   accountingReducer,
    // reports:      reportsReducer,
    // settings:     settingsReducer,
  },
});