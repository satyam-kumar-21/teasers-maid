import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [location]); // Only run the effect when the location changes

  return null; // This component doesn't render anything, it's just used for the side effect
};

export default ScrollToTop;
