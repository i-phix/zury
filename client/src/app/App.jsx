import AppRouter from "./AppRouter";


/**
 * App
 *
 * Root component — intentionally minimal.
 * - Navbar lives inside MainLayout (already wired up)
 * - ProgressBar is used inside individual pages (e.g. NewLease)
 * - No global UI imports belong here
 */
export default function App() {
  return <AppRouter />;
}