import React from 'react';
import './App.css';
import{ BrowserRouter as  Router , Routes , Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Private from './Components/Private';
import Login from './Components/Login';
import BookData from "./Data.json";
import Home from './Components/Home';
import Self from './Components/Self';
import Finance from './Components/Finance';
import Science from './Components/Science';
import Love from './Components/Love';
import Cosmos from './Components/Cosmos';
import Footer from "./Components/Footer";
import SignUp from './Components/SignUp';


function App() {
  
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route element={<Private/>}>
            <Route path="/" element={<Home data={BookData} />} />
            <Route path="/self" element={<Self />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/cosmos" element={<Cosmos />} />
            <Route path="/love" element={<Love />} />
            <Route path="/science" element={<Science />} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
          </Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
