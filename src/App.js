import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CTAConsultation from "./components/CTAsolution";
import AlumniCarousel from "./components/AlumniCarousal";
import CareerUI from "./components/CareerUI";
import StatsSection from "./components/statsSection";





//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Internship from "./pages/Internship";
import Career from "./pages/Career"
import Blog from "./pages/Blog";;
import Contact from "./pages/Contact";





function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
           <Route path="/internship" element={<Internship />}></Route>
             <Route path="/blog" element={<Blog />}></Route>
              <Route path="/career" element={<Career />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
           
           
        </Routes>
        <CTAConsultation />
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App;
