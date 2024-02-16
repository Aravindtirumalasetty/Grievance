import React from "react";
import "./Navbar.css";
import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { Links } from "./Links";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Button,
} from "@chakra-ui/react";
export const Navbar = () => {
  const [showlinks, setshowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linkRef = useRef(null);
  useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height;
    if (showlinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showlinks]);

  const handleLogout = (e) => {};
  return (
    <>
      <nav>
        <div className="NavContainer">
          <div className="NavLogo">
            <img src={`${Logo}`} alt="Logo" className="Logo" />
            <div className="hamburg">
              <button
                className="ToggleBtn"
                onClick={() => setshowLinks(!showlinks)}
              >
                {<FaBars />}
              </button>
            </div>
          </div>
          <div className="LinksContainer" ref={linksContainerRef}>
            <ul className="Links" ref={linkRef}>
              {Links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <NavLink
                      to={url}
                      className={({ isActive }) =>
                        isActive ? "active EachLink" : "EachLink"
                      }
                    >
                      {text}
                    </NavLink>
                  </li>
                );
              })}

              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "active EachLink" : "EachLink"
                  }
                >
                  register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active EachLink" : "EachLink"
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="ThreeLinks">
            <div className="user">
              <Menu>
                <MenuButton as={Button} rightIcon={<FaUser />}>
                  User
                </MenuButton>
                <MenuList>
                  <MenuItem minH="48px">
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://placekitten.com/100/100"
                      alt="Fluffybuns the destroyer"
                      mr="12px"
                    />
                    <span>
                      {" "}
                      <NavLink
                        // onClick={handleLogout}
                        to="/profile"
                        // className={({ isActive }) =>
                        //   isActive ? " EachLink " : "EachLink logout"
                        // }
                      >
                        Profile
                      </NavLink>
                    </span>
                  </MenuItem>
                  <MenuItem minH="40px">
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://placekitten.com/120/120"
                      alt="Simon the pensive"
                      mr="12px"
                    />
                    <span>
                      <NavLink
                        onClick={handleLogout}
                        to="/login"
                        // className={({ isActive }) =>
                        //   isActive ? "active EachLink " : "EachLink logout"
                        // }
                      >
                        Logout
                      </NavLink>
                    </span>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
