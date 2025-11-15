import { Routes, Route } from "react-router-dom";
import Pages from "../../pages"; 

const {LoginPage, SignupPage, HomePage} = Pages; 

function MainRoutes() {
  return (
    <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/signup" element={<SignupPage />} /> 
    </Routes>
  )
}

export default MainRoutes