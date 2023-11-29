import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Blogs />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
