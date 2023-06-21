import React from "react";
import facebook from "../assets/facebook.png";
// import {SearchOutlined} from '@mui/icons-material/';
import { FaSearch } from "react-icons/fa";
import './navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar border-bottom shadow-sm navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <div className="row">
            {/* logo and search bar */}
            <div className="col-6">
              <div className="row">
                {/* logo */}
                <div className="col-2 d-flex justify-content-center align-items-center">
                  <img
                    className="ms-2"
                    src={facebook}
                    alt="facebook.png"
                    style={{ width: "100%" }}
                  />
                </div>
                {/* search bar */}
                <div className="col-8 rounded-pill p-0 d-flex justify-content-start input-wrapper">
                  <FaSearch className="ms-2 me-2"/>
                  <input
                    className="input-field ps-2"
                    type="text"
                    placeholder="Search Facebook"
                  />
                </div>
              </div>
            </div>
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
