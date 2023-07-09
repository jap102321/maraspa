import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Promotion from "./components/Promotion";
import Footer from "./components/Footer";
import BonoRegalo from "./pages/BonoRegalo";
import Services from "./pages/Services";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact";
import Instalations from "./pages/Instalations";

const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
}
a{
  text-decoration:none;
}



`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/giftbono" element={<BonoRegalo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/facial-clean" element={<Service />} />
          <Route path="/services/packages" element={<Service />} />
          <Route path="/services/massages" element={<Service />} />
          <Route path="/instalations" element={<Instalations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" />
        </Routes>
        {/* <Promotion /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
