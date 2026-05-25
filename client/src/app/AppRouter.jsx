import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Layouts — uncomment as modules are built
// import MainLayout from '../layouts/main/MainLayout'
// import AuthLayout from '../layouts/auth/AuthLayout'

// Pages — uncomment as modules are built
// import Login from '../modules/auth/pages/Login/Login'
// import Dashboard from '../modules/dashboard/pages/Dashboard/Dashboard'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>PropManager</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
