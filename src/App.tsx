import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BlogsPage from "./pages/Blogs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/contact";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}
