import Menu, { SubMenu, Item as MenuItem } from "rc-menu";
// import { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { FaTimes, FaBars } from 'react-icons/fa';
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/images/jic1.png";
import "rc-menu/assets/index.css";
import "./_Navbar.scss";

// reserved for future use
function handleSelect(info) {
  console.log("selected ", info);
}

// reserved for future use
function handleClick(info) {
  console.log("click ", info);
}

const about = <span>About</span>;

const Navbar = () => {

  // main component 
  const navMenu = (
    <div className="menu__container">
      {/* logo section */}
      <div className="logo">
        <img className="logo__img" src={logo} alt="Company logo" />
        <p className="company__name">JESCON</p>
      </div>

      {/* rc-menu component */}
      <Menu
        className="nav__menu"
        mode={"horizontal"}
        onSelect={handleSelect}
        // defaultActiveFirst
        onClick={handleClick}
      >
        {/* nav links here */}
        <MenuItem title="home" key="0-2">
          <Link className="return__home" to="/first-pro-job/">
            Home
          </Link>
        </MenuItem>
        <SubMenu title={about} key="1">
          <MenuItem key="1-1">
            <HashLink to="/first-pro-job/about/" smooth>
              Our Mission
            </HashLink>
          </MenuItem>
          <MenuItem key="1-2">
            <HashLink to="/about/#vision" smooth>
              Our Vision
            </HashLink>
          </MenuItem>
          <MenuItem key="1-3">
            <HashLink to="/first-pro-job/about/#clients" smooth>
              Our Clients
            </HashLink>
          </MenuItem>
          <MenuItem key="1-4">
            <HashLink to="/first-pro-job/about/#expertize" smooth>
              Our Expertize
            </HashLink>
          </MenuItem>
          <MenuItem key="1-5">
            <HashLink to="/first-pro-job/about/#focus" smooth>
              Our Focus
            </HashLink>
          </MenuItem>
        </SubMenu>
        <MenuItem key="2">
          <NavLink to="/first-pro-job/projects">Projects</NavLink>
        </MenuItem>
        {/* <MenuItem key="3">outer</MenuItem> */}
        <SubMenu title="Our Services" key="3">
          <MenuItem key="3-1">
            <HashLink to="/first-pro-job/services/" smooth>
              Fabrication
            </HashLink>
          </MenuItem>
          <MenuItem key="3-2">
            <HashLink to="/first-pro-job/services/#inspection" smooth>
              Inspection/NDT
            </HashLink>
          </MenuItem>
          <MenuItem key="3-3">
            <HashLink to="/first-pro-job/services/#procurement" smooth>
              Procurement
            </HashLink>
          </MenuItem>
          <MenuItem key="3-4">
            <HashLink to="/first-pro-job/services/#qms" smooth>
              QMS Process
            </HashLink>
          </MenuItem>
          <MenuItem key="3-5">
            <HashLink to="/first-pro-job/services/#consultancy" smooth>
              Consultancy
            </HashLink>
          </MenuItem>
          <MenuItem key="3-6">
            <HashLink to="/first-pro-job/services/#techmanpower" smooth>
              TechManpower
            </HashLink>
          </MenuItem>
          <MenuItem key="3-7">
            <HashLink to="/first-pro-job/services/#expertize" smooth>
              Our Expertize
            </HashLink>
          </MenuItem>
        </SubMenu>
        <MenuItem key="4">
          <NavLink to="/first-pro-job/policies">Our Policies</NavLink>
        </MenuItem>
        {/* <MenuItem key="4">
        <NavLink to="/expertize">Our Expertize</NavLink>
      </MenuItem> */}
        {/* <MenuItem disabled>disabled</MenuItem> */}
      </Menu>
    </div>
  );
  return (
    <div className="nav__container">
      <div style={{ width: 400 }}>{navMenu}</div>
    </div>
  );
};
export default Navbar;
