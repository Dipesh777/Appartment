import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/user/Dashboard';
import ProtectedRoute from './components/ProtectedRoutes';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registration' element={<Register />} />

        {/* Protected Routes */}
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
