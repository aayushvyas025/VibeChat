import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignupPage } from "../../pages";
import { Suspense } from "react";
import { PageLoader } from "../../components";

function MainRoutes() {
  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
}

export default MainRoutes;
