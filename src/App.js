import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Componotes/Navbar";
import Home from "./Pages/Home";
import Navpages from "./Pages/Navpages";
import Services from "./Pages/Services";
import Project from "./Pages/Project";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Search from "./Pages/Search";
import Error from "./Pages/Error";
import Footer from "./Componotes/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Login from "./Pages/Login";
import Faq from "./Pages/Faq";
import Team from "./Pages/Team";
import GoToTop from "./Componotes/GoToTop";
import ServiceSingle from "./Pages/ServiceSingle";
import TeamSingle from "./Pages/TeamSingle";

function App() {
  const theme = {
    colors: {
      primary1: " #CDA274",
      primary2: " #292F36",
      primary3: " #F4F0EC",
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      bg: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <BrowserRouter basename="/interno">
          <Navbar />
          <Routes>
            <Route path="/interno" element={<Home />} />
            <Route path="/pages" element={<Navpages />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/team" element={<Team />} />
            <Route path="/login" element={<Login />} />
            <Route path="/service-single" element={<ServiceSingle />} />
            <Route path="/team-single" element={<TeamSingle />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <GoToTop />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
