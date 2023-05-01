import React, { useRef, useState } from "react";

import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Container, Nav, Navbar, Offcanvas, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { FaShoppingBag, FaUserPlus } from "react-icons/fa";

import { links } from "../utils/constants";
import { useSelector } from "react-redux";

const Navi = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const {totalQty:cartTotalQty}= useSelector(state=>state.cart);

  return (
    <Wrapper className="bg-light">
      <div className="section-center">
        <Navbar expand="lg" className="f-ac">
          <NavLink className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="comfy store" />
          </NavLink>

          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand`}
            onClick={() => setShowNavbar(!showNavbar)}
          />

          <div className={`navbar-collapse ${!showNavbar ? "collapse" : ""}`}>
            <Nav className="nav-links justify-content-end flex-grow-1 pe-3 gap-4">
              {links.map((link) => {
                const { text, url, id, icon } = link;
                return (
                  <NavLink
                    to={url}
                    className={({ isActive }) => {
                      return isActive ? "nav-link active" : "nav-link";
                    }}
                    key={id}
                    onClick={() => setShowNavbar(false)}
                    end
                  >
                    <span className="icon">{icon}</span>
                    {text}
                  </NavLink>
                );
              })}
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3 btn-container d-flex gap-4 align-items-center">
              <NavLink to="/cart">
              <div
                className="cart-btn relative text-dark"
                onClick={() => setShowNavbar(false)}
              >
                  <h4 className="fw-semibold">Cart</h4>
                  <FaShoppingBag className="icon" />
                  <Badge pill className="cart-value">
                    {cartTotalQty}
                  </Badge>
              </div>
                </NavLink>

              <div className="auth-btn" onClick={() => setShowNavbar(false)}>
                <h4 className="fw-semibold">Logout</h4>
                <FaUserPlus className="icon" />
              </div>
            </Nav>
          </div>
        </Navbar>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo,
  .sidebar-logo {
    height: 3rem;
    margin-left:-.5rem;
  }

  .nav-link {
    text-transform: capitalize;
    font-size: 1.1rem;
  }

  .btn-container div {
    display: flex;
    align-items: baseline;
    gap: 0.8rem;
  }

  .cart-btn {
    position: relative;
    .badge {
      position: absolute;
      top: -0.3rem;
      right: -0.5rem;

      font-weight: 400;
    }
  }

  .icon {
    font-size: 1.7rem;
  }
`;

export default Navi;
