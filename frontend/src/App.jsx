// import React from 'react'
// import { Router, BrowserRouter, Route } from 'react-router-dom'
// import { Routes } from 'react-router'
// import DashboardLayout from './layouts/DashboardLayout'
// import Dashboard from './pages/Dashboard'
// import Profile from './pages/Profile'
// import Login from './pages/Login'
// import Signup from './pages/Signup'

// const App = () => {
//   return (
    
//     <BrowserRouter>
//         <Routes>

//           <Route path="/" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
          
//           <Route path="/dashboard" element={<DashboardLayout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="events" element={<Dashboard />} />
//             <Route path="chats" element={<div className="p-6"><h2 className="text-2xl font-semibold">Chats</h2><p className="text-muted-foreground">Chat functionality coming soon!</p></div>} />
//             <Route path="groups" element={<div className="p-6"><h2 className="text-2xl font-semibold">Groups</h2><p className="text-muted-foreground">Groups functionality coming soon!</p></div>} />
//             <Route path="notifications" element={<div className="p-6"><h2 className="text-2xl font-semibold">Notifications</h2><p className="text-muted-foreground">Notifications functionality coming soon!</p></div>} />
//             <Route path="profile" element={<Profile
//             />} />
//             <Route path="settings" element={<div className="p-6"><h2 className="text-2xl font-semibold">Settings</h2><p className="text-muted-foreground">Settings functionality coming soon!</p></div>} />
//           </Route>
          
//         </Routes>
//       </BrowserRouter>

//   )
// }

// export default App


import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/authStore"; // 👈 zustand store
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// ✅ PrivateRoute wrapper
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const { user, fetchUser, loading } = useAuthStore();

  useEffect(() => {
    fetchUser(); // ✅ check session on mount
  }, [fetchUser]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg">Checking session...</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with redirect if logged in */}
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Signup />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="events" element={<Dashboard />} />
          <Route
            path="chats"
            element={
              <div className="p-6">
                <h2 className="text-2xl font-semibold">Chats</h2>
                <p className="text-muted-foreground">
                  Chat functionality coming soon!
                </p>
              </div>
            }
          />
          <Route
            path="groups"
            element={
              <div className="p-6">
                <h2 className="text-2xl font-semibold">Groups</h2>
                <p className="text-muted-foreground">
                  Groups functionality coming soon!
                </p>
              </div>
            }
          />
          <Route
            path="notifications"
            element={
              <div className="p-6">
                <h2 className="text-2xl font-semibold">Notifications</h2>
                <p className="text-muted-foreground">
                  Notifications functionality coming soon!
                </p>
              </div>
            }
          />
          <Route path="profile" element={<Profile />} />
          <Route
            path="settings"
            element={
              <div className="p-6">
                <h2 className="text-2xl font-semibold">Settings</h2>
                <p className="text-muted-foreground">
                  Settings functionality coming soon!
                </p>
              </div>
            }
          />
        </Route>

        {/* Catch-all → redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
