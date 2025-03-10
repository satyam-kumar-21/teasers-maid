import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import ListingPage from "@/pages/listing";
import ServiceDetailsPage from "@/pages/ServiceDetailsPage";
import NewUpdate from "./pages/NewUpdate";
import BlogPage from "./pages/blogPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <div>
      {/* Ensure the ScrollToTop component is inside the Router to reset scroll position on route change */}
      <ScrollToTop />

      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ListingPage />} path="/listing" />
        <Route element={<ServiceDetailsPage />} path="/services/:id" />
        {/* <Route element={<ServiceDetailsPage />} path="/services/:parties" /> */}
        <Route element={<NewUpdate />} path="/new-updates" />
        <Route element={<BlogPage />} path="/blogs" />
        <Route element={<GalleryPage />} path="/gallery" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<ServiceDetailsPage />} path="/service/:serviceId" />
      </Routes>
    </div>
  );
}

export default App;
