import { lazy } from "react";

const HomePage = lazy(() => import("./home/HomePage"));
const LoginPage = lazy(() => import("./login/LoginPage")); 
const SignupPage = lazy(() => import("./signup/SignupPage")); 

const Pages = {
    HomePage,
    LoginPage,
    SignupPage
}; 

export default Pages; 