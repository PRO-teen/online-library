import React,{useState}  from "react";
import {Link , useNavigate}from 'react-router-dom';
// import { GiHamburgerMenu} from "react-icons/gi"
import Hamburger from 'hamburger-react'



const Navbar = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }

  // const [showNavbar , setShowNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false);

  
  
  return (
    <>
      <nav className="head">
        <img className="logo" src="/library.png" alt="" />
        <div className="hamburg">
          <a href="#w" onClick={() => setOpen(!isOpen)}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </a>
        </div>

        <div className="">
          {auth ? (
            <div
              className={isOpen ? "menu-link mobile-menu-link" : "menu-link"}
            >
              <ul className="">
                <li className="nav-item active">
                  <Link className="nav-link home" aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/self">
                    Self
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/finance">
                    Finance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/love">
                    Love
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cosmos">
                    Cosmos
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" onClick={logout} to="/signup">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="nav-right">
              <ul>
                <li>
                  <Link className="nav-link" to="/signup">
                    {" "}
                    SignUp
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;