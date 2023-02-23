import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/auth";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

import PrivateRoute from "./confing/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="/sign_in" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
