import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, LoginPage, SignupPage } from "../../pages";
import { Suspense } from "react";
import { PageLoader } from "../../components";
import { useAuthContext } from "../../hooks";

function MainRoutes() {
  const { authUser } = useAuthContext();
  console.log(authUser);
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
      </Routes>
    </Suspense>
  );
}

export default MainRoutes;
