import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/Authcontext';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import NotFoundPage from './Pages/NotFoundPage';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />

          {/* Rutas Protegidas */}
          <Route element={<ProtectedRoute allowedRoles={['admin', 'user']} />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* Agrega más rutas protegidas aquí */}
          </Route>

          <Route path="/unauthorized" element={<div className="text-center p-8 text-dark-brown">Acceso denegado.</div>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
