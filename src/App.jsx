import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx"; // Import the ScrollToTop component

import IndexPage from "./pages/index.tsx";
import AboutPage from "./pages/about";
import ListingPage from "./pages/listing";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import NewUpdate from "./pages/NewUpdate";
import BlogPage from "./pages/blogPage";
import ContactPage from "./pages/ContactPage.jsx";
import GalleryPage from "./pages/GalleryPage";
import Admin from "./components/Admin/Admin.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import AdminLogin from "./components/Admin/AdminLogin.jsx";
import About from "./components/Admin/About.jsx";
import NewUpdates from "./components/Admin/NewUpdates.jsx";
import Gallery from "./components/Admin/Gallery.jsx";
import Review from "./components/Admin/Review.jsx";
import Services from "./components/Admin/Services.jsx";
import Branches from "./components/Admin/Branches.jsx";
import Contact from "./components/Admin/Contact.jsx";
import PrivateRoute from "./components/Admin/PrivateRoute.jsx";
import Privacy from "./components/Privacy.jsx"
import Terms from "./components/Terms.jsx"

import DefaultLayout from "./layouts/default.tsx"


import { useDispatch, useSelector } from 'react-redux';
import { getAboutAction } from './store/Action/actionAbout.jsx';
import { getAllBranchesAction } from './store/Action/actionBranch.jsx';
import { getAllGalleriesAction } from './store/Action/galleryAction.jsx';
import { getAllNewUpdatesAction } from './store/Action/newUpdateAction.jsx';
import { getAllRatingsAction } from './store/Action/ratingActions.jsx';
import { getAllServicesAction } from './store/Action/serviceActions.jsx';
import { useEffect } from "react";
import TopTeasers from "./components/Admin/TopTeasers.jsx";
import Blogs from "./components/Admin/Blogs.jsx";
import { getAllTopTeasersAction } from "./store/Action/actionTopTeasers.jsx";
import { getAllBlogsAction } from "./store/Action/blogAction.jsx";

function App() {



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAboutAction());
    dispatch(getAllBranchesAction());
    dispatch(getAllGalleriesAction());
    dispatch(getAllNewUpdatesAction());
    dispatch(getAllRatingsAction());
    dispatch(getAllServicesAction());
    dispatch(getAllTopTeasersAction());
    dispatch(getAllBlogsAction());
  }, [dispatch]);


  return (
    <div>
      {/* Ensure the ScrollToTop component is inside the Router to reset scroll position on route change */}
      <ScrollToTop />

      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ListingPage />} path="/services" />
        <Route element={<ServiceDetailsPage />} path="/services/:id" />
        {/* <Route element={<ServiceDetailsPage />} path="/services/:parties" /> */}
        <Route element={<NewUpdate />} path="/new-updates" />
        <Route element={<BlogPage />} path="/blogs" />
        <Route element={<GalleryPage />} path="/gallery" />
        <Route element={<DefaultLayout><ContactPage /></DefaultLayout>} path="/contact" />
        <Route element={<DefaultLayout><ServiceDetailsPage /></DefaultLayout>} path="/service/:serviceId" />
        <Route element={<DefaultLayout><Privacy /></DefaultLayout>} path="/privacy-policy" />
        <Route element={<DefaultLayout><Terms /></DefaultLayout>} path="/terms-conditions" />


        {/* <Route element={<Adminsidenav />} path="/admin" />
        <Route element={<AdminAbout />} path="/admin/about" /> */}
        <Route path="/admin33/" element={<Admin />} />
        <Route path="/admin33/login" element={<AdminLogin />} />
        <Route path="/admin33/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
        <Route path="/admin33/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/admin33/new-updates" element={<PrivateRoute><NewUpdates /></PrivateRoute>} />
        <Route path="/admin33/gallery" element={<PrivateRoute><Gallery /></PrivateRoute>} />
        <Route path="/admin33/review" element={<PrivateRoute><Review /></PrivateRoute>} />
        <Route path="/admin33/services" element={<PrivateRoute><Services /></PrivateRoute>} />
        <Route path="/admin33/branches" element={<PrivateRoute><Branches /></PrivateRoute>} />
        <Route path="/admin33/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
        <Route path="/admin33/top-teasers" element={<PrivateRoute><TopTeasers /></PrivateRoute>} />
        <Route path="/admin33/blog" element={<PrivateRoute><Blogs /></PrivateRoute>} />




        
      </Routes>
    </div>
  );
}

export default App;
