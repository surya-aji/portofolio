// import logo from './logo.svg';
// import './App.css';
import {useState, createContext} from "react";
import {
  BrowserRouter as Router,
  Routes, 
  Route

} from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/login";
import Register from "./pages/register";
import About from "./pages/About";
import Resume from "./pages/resume";
import Portfolio from "./pages/portofolio";
import Contact from "./pages/Contact";
import Kategori from "./pages/Kategori";

export const appContext = createContext(null);

function App() {
  const [pengguna, setPengguna] = useState();
  return (
    <appContext.Provider value={{pengguna, setPengguna}}>
      <Router>
        <Routes>
            <Route exact path="/" element = {<Index/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/signup" element = {<Register/>}/>
            <Route path="/menu/about" element = {<About/>}/>
            <Route path="/menu/resume" element = {<Resume/>}/>
            <Route path="/menu/portofolio" element = {<Portfolio/>}/>
            <Route path="/menu/contact" element = {<Contact/>}/>
            <Route path="/menu/portofolio/kategori/:slug" element = {<Kategori/>}/>          
        </Routes>
      </Router>
    </appContext.Provider>
  );
}

export default App;
