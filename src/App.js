import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CONVITEON from "./pages/CONVITEON";
import CONVITEOFF from "./pages/CONVITEOFF";
import CONVITEINFO from "./pages/CONVITEINFO";
import CONVITELOC from "./pages/CONVITELOC";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/convite-off":
        title = "";
        metaDescription = "";
        break;
      case "/convite-info":
        title = "";
        metaDescription = "";
        break;
      case "/convite-loc":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CONVITEON />} />
      <Route path="/convite-off" element={<CONVITEOFF />} />
      <Route path="/convite-info" element={<CONVITEINFO />} />
      <Route path="/convite-loc" element={<CONVITELOC />} />
    </Routes>
  );
}
export default App;
