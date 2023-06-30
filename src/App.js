import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Promotion from "./components/Promotion";
import Footer from "./components/Footer";
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
          <Route path="/giftbono" />
          <Route path="/services" />
          <Route path="/instalations" />
          <Route path="/contact" />
          <Route path="*" />
        </Routes>
        <Promotion />
        <Footer />
      </Router>
    </>
  );
}

export default App;
