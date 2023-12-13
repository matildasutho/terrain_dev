import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import EmailForm from "./components/EmailForm/EmailForm.js";
import GradientTrail from "./components/GradientTrail/GradientTrail.js";

import AboutPage from "./pages/AboutPage/AboutPage.js";
import ArchivePage from "./pages/ArchivePage/ArchivePage.js";
import BookshopPage from "./pages/BookshopPage/BookshopPage.js";
import CalendarPage from "./pages/CalendarPage/CalendarPage.js";
import ContactPage from "./pages/ContactPage/ContactPage.js";
import EventPage from "./pages/EventPage/EventPage.js";
import GalleryPage from "./pages/GalleryPage/GalleryPage.js";
import GardenPage from "./pages/GardenPage/GardenPage.js";
import HomePage from "./pages/HomePage/HomePage.js";
import ManifestoPage from "./pages/ManifestoPage/ManifestoPage.js";
import ServicesPage from "./pages/ServicesPage/ServicesPage.js";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <BrowserRouter>
      <Header currentPage={currentPage} />

      <div className="container">
        <GradientTrail />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/bookshop" element={<BookshopPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/event/:slug" element={<EventPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/garden" element={<GardenPage />} />
          <Route path="/manifesto" element={<ManifestoPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <EmailForm />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
