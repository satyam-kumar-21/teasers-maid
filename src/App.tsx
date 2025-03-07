import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import ListingPage from "@/pages/listing";
import ServiceDetailsPage from "@/pages/ServiceDetailsPage";

function App() {
  return (
    <div>
      {/* Ensure the ScrollToTop component is inside the Router to reset scroll position on route change */}
      <ScrollToTop />

      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ListingPage />} path="/listing" />
        <Route element={<ServiceDetailsPage />} path="/listing/:id" />
      </Routes>
    </div>
  );
}

export default App;
