import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

export default function AppProviders({ children }) {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </ReduxProvider>
  );
}