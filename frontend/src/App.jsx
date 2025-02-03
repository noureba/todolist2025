import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import User from "./pages/User";
import Admin from "./pages/Admin";


function App() {
  return (
    <>
    <div className="container mx-auto">
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </div>
   
    </>
  );
}

export default App;
