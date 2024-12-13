import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/ui/navbar";
import { Toaster } from "./components/ui/toaster";
import Academy from "./pages/Conference/Academy";
import Conference from "./pages/Conference/Conference";
import AboutUs from "./pages/Conference/AboutUs";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <div className="relative">
          <Navbar />
          <div className="relative lg:mt-0">
            <Routes>
              <Route path="/academy" element={<Academy />} />
              <Route path="/" element={<Conference />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </div>
          {/* <footer className="py-4 flex flex-col lg:flex-row justify-evenly gap-5">
            <div className="grid"></div>
          </footer> */}
        </div>
      </Router>
    </>
  );
}

export default App;
