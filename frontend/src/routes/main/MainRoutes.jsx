import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, LoginPage, SignupPage, NotFoundPage  } from "../../pages";
import { Suspense } from "react";
import { PageLoader } from "../../components";
import { useAuthContext } from "../../hooks";

function MainRoutes() {
  const { authUser } = useAuthContext();

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignupPage />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default MainRoutes;
