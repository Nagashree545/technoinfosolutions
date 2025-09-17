import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AboutUsPAge from "./Components/AboutUsPage";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import ContactPage from "./Components/Contactpage";
import TermsAndConditions from "./Components/TermsandCondition";
import HelpSupport from "./Components/HelpandSup[port";
import ReturnRefundPolicy from "./Components/RefundPolicy";
import PrivacyPolicy from "./Components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPAge />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/support" element={<HelpSupport />} />
        <Route path="/refudnpolicy" element={<ReturnRefundPolicy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
