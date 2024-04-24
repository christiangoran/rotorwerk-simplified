import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Konstruktion from "./pages/Konstruktion";
import Footer from "./components/Footer";
import Fem from "./pages/Fem";
import Wea from "./pages/Wea";
import Documentation from "./pages/Documentation";
import Zulieferauswahl from "./pages/Zulieferauswahl";
import Betriebsfestigkeit from "./pages/Betriebsfastigkeit";
import Impressum from "./pages/Impressum";

function App() {
  return (
    <BrowserRouter basename="/rotorwerk-simplified">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} exact />
        <Route path="/konstruktion" element={<Konstruktion />} />
        <Route path="/fem" element={<Fem />} />
        <Route path="/wea-entwicklung" element={<Wea />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/zulieferauswahl" element={<Zulieferauswahl />} />
        <Route path="/betriebsfestigkeit" element={<Betriebsfestigkeit />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
