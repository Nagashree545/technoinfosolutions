import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AboutUsPAge from "./Components/AboutUsPage";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPAge />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
