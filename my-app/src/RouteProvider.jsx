import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";
import RegisterPage from "./pages/RegisterPage";
import AdminProfile from "./pages/AdminProfile";
import Feed from "./Components/Feed";
const RouteProvider = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<AdminPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/adminProfile" element={<AdminProfile />} />
      </Routes>
    </div>
  );
};

export default RouteProvider;
