import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Teams from "./components/Teams";
import Training from "./components/Training";
import CourseDetails from "./components/CourseDetails";
import Photos from "./components/Photos";

function App() {
    return (
        <>
        <Navbar/>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Partners" element={<Partners />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/ContactUs" element={<Contact />} />
                <Route path="/Teams" element={<Teams />} />
                <Route path="/Training" element={<Training />} />
                <Route path="/Photos" element={<Photos />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
            </Routes>
        </Router>
        <Footer />
        </>
    );
}

export default App;
