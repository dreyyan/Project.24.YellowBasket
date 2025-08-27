import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home";
import ShopAndProducts from "./pages/ShopAndProducts";
import Collections from "./pages/Collections";
import AboutUs from "./pages/AboutUs";
import ContactAndSupport from "./pages/ContactAndSupport";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/ShopAndProducts" element={<ShopAndProducts/>}/>
        <Route path="/Collections" element={<Collections/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ContactAndSupport" element={<ContactAndSupport/>}/>
    </Routes>
  );
}

export default App;