import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Roster from "./pages/Roster";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Concerts from "./pages/Concerts";
import MyPeopleFest from "./pages/MyPeopleFest";
import BandPage from "./pages/BandPage"; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Navbar always on top */}
        <Navbar />

        {/* Page content */}
        <main className="flex-grow h-[600px] overflow-y-auto">
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/roster" element={<Roster />} />
  <Route path="/roster/:bandSlug" element={<BandPage />} />
  <Route path="/concerts" element={<Concerts />} />
  <Route path="/mypoplefest" element={<MyPeopleFest />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route
    path="*"
    element={
      <div className="text-center text-black p-20 text-2xl">
        404 – Page Not Found
      </div>
    }
  />
</Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;