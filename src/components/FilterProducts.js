import React, { useState } from "react";
import { Badge, Button, Row, CloseButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { formatPrice, getUniqueValues } from "../utils/helpers";
import { setFilter, clearFilters } from "../features/products/productsSlice";
import { FaCheck } from "react-icons/fa";
import { toggleFilterSidebar } from "../features/user/userSlice";

const FilterProduct = () => {
  // applied in tab screen
  const { isFilterSidebarOpen } = useSelector((state) => state.user);

  const {
    items: products,
    filters: { search, category, company, color, price, maxPrice, shipping },
  } = useSelector((state) => state.products);

  // filters
  const categories = getUniqueValues(products, "category");
  const companies = getUniqueValues(products, "company");
  const colors = [...new Set(products.map((el) => el.colors).flat())];

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(
      setFilter({
        name: e.target.name,
        value: e.target.type === "checkbox" ? e.target.checked : e.target.value,
      })
    );
  };

  return (
    <Wrapper className={isFilterSidebarOpen ? "show-filters" : ""}>
      <div className={`mb-5`}>
        <CloseButton
          className="d-block d-md-none"
          onClick={() => dispatch(toggleFilterSidebar())}
        />

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group mb-3">
            <input
              className="form-control bg-light border-0"
              name="search"
              value={search}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3 categories">
            <label htmlFor="password" className="h6 d-block mb-2">
              Category
            </label>
            <div>
              <Button
                variant="link"
                className={`h6 d-block mb-2 text-capitalize ${
                  category === "all" && "active"
                }`}
                name="category"
                value="all"
                onClick={handleChange}
                key="all"
              >
                All
              </Button>

              {categories.map((el) => (
                <Button
                  variant="link"
                  className={`h6 d-block mb-2 text-capitalize ${
                    category === el && "active"
                  }`}
                  name="category"
                  value={el}
                  onClick={handleChange}
                  key={el}
                >
                  {el}
                </Button>
              ))}
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="h6 d-block mb-2">
              Company
            </label>
            <select name="company" value={company} onChange={handleChange}>
              {companies.map((el) => (
                <option
                  name="company"
                  value={el}
                  className="text-capitalize"
                  key={el}
                >
                  {el}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-3 colors d-flex f-ab gap-3">
            <label className="h6 mb-2">Colors</label>
            <div className="d-inline-flex gap-1 f-ac">
              <Button
                variant="link"
                className="d-block p-0 me-1 color-all-btn"
                name="color"
                value="all"
                onClick={handleChange}
              >
                All
              </Button>

              {colors.map((el) => (
                <button
                  name="color"
                  value={el}
                  style={{ backgroundColor: el }}
                  onClick={handleChange}
                  key={el}
                  className="position-relative"
                >
                  {color === el && (
                    <FaCheck className="icon position-absolute top-50 start-50 translate-middle text-white" />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="h6 d-block mb-1">Price</label>
            <div className="d-flex gap-3 f-ac">
              <input
                className="w-50"
                type="range"
                min="0"
                name="price"
                value={price}
                max={maxPrice}
                onChange={handleChange}
              />

              <span className="" style={{ width: "3rem" }}>
                {formatPrice(price)}
              </span>
            </div>
          </div>

          <div className=" mb-3 d-flex f-jsb">
            <label className="h6 form-check-label" htmlFor="remember">
              Free Shipping
            </label>
            <input
              type="checkbox"
              name="shipping"
              value={shipping}
              className="form-check-input"
              id="remember"
              onClick={handleChange}
            />
          </div>

          <button
            className="btn btn-danger remove-btn"
            onClick={() => dispatch(clearFilters())}
          >
            Clear Filters
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn-close {
    position: absolute;
    top: 3rem;
    right: 3rem;
  }

  .btn[name="category"] {
    padding: 0;
  }

  form {
    display: grid;
    justify-content: start;
  }

  label {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .categories button {
    &:not(.active) {
      color: var(--clr-grey-5);
      text-decoration: transparent;
    }
  }

  .colors button:not(.color-all-btn) {
    display: block;
    height: 0.9rem;
    width: 0.9rem;
    border-radius: 50%;
    background: transparent;
    border: none;

    .icon {
      font-size: 0.7rem;
    }
  }

  .color-all-btn {
    color: var(--clr-grey-5);

    .active {
      color: var(--clr-primary);
    }
  }

  .remove-btn {
    background: red;
    color: var(--white);
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: var(--white);
    z-index: 100;

    display: none;
    place-items: center;

    &.show-filters {
      display: grid;
    }
  }
`;

export default FilterProduct;
