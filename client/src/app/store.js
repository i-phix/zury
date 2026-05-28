import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // Slices are added here as modules are built:
    //
    // auth:         authReducer,        ← when auth module is ready
    // dashboard:    dashboardReducer,   ← when dashboard module is ready
    // properties:   propertiesReducer,  ← when properties module is ready
    // leasing:      leasingReducer,
    // tenants:      tenantsReducer,
    // payments:     paymentsReducer,
    // maintenance:  maintenanceReducer,
    // accounting:   accountingReducer,
    // reports:      reportsReducer,
    // settings:     settingsReducer,
  },
});