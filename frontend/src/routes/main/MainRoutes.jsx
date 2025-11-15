import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignupPage } from "../../pages";


function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/signup" element={<LoginPage/>} />
        <Route path="/login" element={<SignupPage/>}/>
    </Routes>
  )
}

export default MainRoutes