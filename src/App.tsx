import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Blogs from "./pages/Blogs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/contact";
import EndpointProtection from "./pages/EndpointProtection";
import EndpointSecurity from "./pages/EndpointSecurity";
import DisasterRecovery from "./pages/DisasterRecovery";
import SaasBackup from "./pages/SaasBackup";
import BlogDetailsRoute from "./pages/blogs/[slug]";
import ScrollToTop from "./components/scrollToTop";
import Terms from "./pages/legal/Terms";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/services/endpoint-protection"
          element={<EndpointProtection />}
        />
        <Route
          path="/services/endpoint-security"
          element={<EndpointSecurity />}
        />
        <Route
          path="/services/disaster-recovery"
          element={<DisasterRecovery />}
        />
        <Route path="/services/saas-backup" element={<SaasBackup />} />
        <Route path="/blogs/:slug" element={<BlogDetailsRoute />} />
      </Routes>
      <Footer />
    </>
  );
}
