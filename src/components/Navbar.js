import React, { useRef, useState } from "react";

import styled from "styled-components";
import logo from "../assets/logo.svg";
import {
  Container,
  Nav,
  Button,
  Navbar,
  Offcanvas,
  Badge,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { FaBox, FaSearch, FaShoppingBag, FaUserPlus } from "react-icons/fa";

import { links } from "../utils/constants";
import { useSelector } from "react-redux";

const Navi = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const { totalQty: cartTotalQty } = useSelector((state) => state.cart);

  return (
    <Wrapper className="nav">
      <div className="section-center nav-center">
        <NavLink to="/">
          <img src={logo} alt="" className="logo" />
        </NavLink>
        <div className="search">
          <input
            type="text "
            className="rounded  w-100"
            placeholder="Search for Products"
          />
          <FaSearch className="search-icon" />
        </div>

        <NavLink to="/orders/user" className="orders">
          <FaBox className="icon" />
          <span className="text-black">My orders</span>
        </NavLink>

        <NavLink to="/cart" className="bag">
          <FaShoppingBag className="icon" />
          <span className="text-black">My Bag</span>
          <Badge className="cart-count" pill>
            1
          </Badge>
        </NavLink>

        <NavLink to="/login">
          <Button variant="primary" className="auth-btn">
            Login
          </Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--white);
  border-bottom: 1px solid var(--grey-100);
  position: sticky;
  top: 0;
  z-index: 1000;
  

  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr auto auto auto;
    padding: 1rem 0;
    padding-bottom: .7rem;

    align-items: start;
    gap: 1.4rem;
    row-gap: 1rem;
  }

  .logo {
    height: 2.5rem;
  }

  .search {
    width: 100%;
    position: relative;

    .search-icon {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
    }
  }
  input {
    font-size: 0.95rem;
    padding: 0.4rem 1rem;

    border: 1px solid var(--primary-700);

    &::placeholder {
      color: var(--grey-500);
    }

    &:focus {
      outline: none;
    }
  }

  .bag,
  .orders {
    cursor: pointer;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      color: var(--black);
      font-size: 1.2rem;
    }

    span {
      text-decoration: none;
    }
  }

  .bag {
    position: relative;
    .cart-count {
      position: absolute;
      top: -0.5rem;
      right: 0.3rem;
      font-size: 0.7rem;
    }
  }

  .auth-btn {
    padding: 0.5rem 1rem;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    .nav-center {
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
    }

    .orders {
      justify-self: end;
    }

    .bag .cart-count {
      top: -0.7rem;
      right: -0.5rem;
    }

    .search {
      grid-column: 1/-1;
      grid-row: 2;
      width: auto;
    }

    .icon {
      font-size: 1.2rem;
    }

    .auth-btn {
      padding: 0.2rem 0.4rem;
    }

    .bag,
    .orders {
      span {
        display: none;
      }

      .cart-count {
        display: block;
      }
    }
  }
`;

export default Navi;
