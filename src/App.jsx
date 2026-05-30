import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Values from "./components/Values";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import Blog from "./pages/Blog";
import Admin from "./pages/Admin";



// Home page layout
function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <About />
      <Services />
      <Contact />
      <Values />
      <Testimonials />
      <Admin/>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Contact" element={<Contact />} />


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
