import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./features/protectionRoutes/ProtectedRoute.jsx";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminProfile from "./pages/AdminProfile";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Feed from "./Components/Feed";
const RouteProvider = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/adminProfile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RouteProvider;
