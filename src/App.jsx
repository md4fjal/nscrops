import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrolltop";
import Loader from "./components/loader";

const Home = lazy(() => import("./pages/home"));
const PrivacyPolicy = lazy(() => import("./pages/privacy"));
const TermsAndConditions = lazy(() => import("./pages/terms"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
