import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import MainLayout from "./MainLayout";

/**
 * MainLayout tests
 * Run: vitest  (or: jest)
 */

function renderLayout() {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/dashboard"]}>
        <MainLayout />
      </MemoryRouter>
    </Provider>
  );
}

describe("MainLayout", () => {
  it("renders the sidebar logo", () => {
    renderLayout();
    expect(screen.getByText("PropManager")).toBeInTheDocument();
  });

  it("renders all nav sections", () => {
    renderLayout();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Properties")).toBeInTheDocument();
    expect(screen.getByText("Tenants")).toBeInTheDocument();
    expect(screen.getByText("Payments")).toBeInTheDocument();
    expect(screen.getByText("Maintenance")).toBeInTheDocument();
  });

  it("renders the Navbar", () => {
    renderLayout();
    // Navbar always renders a toggle button
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });
});