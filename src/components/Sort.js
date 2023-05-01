import React, { useState } from "react";
import { Row, Dropdown } from "react-bootstrap";
import { FaAcquisitionsIncorporated, FaList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import {
  setSort,
  setGridView,
  setListView,
} from "../features/products/productsSlice";

const Sort = () => {
  const [sortText, setSortText] = useState("Price( Lowest )");

  const dispatch = useDispatch();
  const { gridView, items: products } = useSelector((state) => state.products);

  const handleSort = (e) => {
    setSortText(e.target.textContent);
    dispatch(setSort(e.target.dataset.value));
  };

  return (
    <Wrapper className="mb-5">
      <Row md={1} lg={3} className="f-ab gx-5 gy-3">
        <div className="left d-md-flex   f-ac ">
          <div className="btn-container mb-3 mb-md-0  d-flex me-2">
            <button
              className={`btn border-dark rounded me-2 ${
                gridView ? "active" : ""
              }`}
              onClick={() => dispatch(setGridView())}
            >
              <FaList className="icon" />
            </button>
            <button
              className={`btn border-dark rounded ${!gridView ? "active" : ""}`}
              onClick={() => dispatch(setListView())}
            >
              <FaAcquisitionsIncorporated className="icon" />
            </button>
          </div>
          <span className="text-nowrap ">{products.length} Products Found</span>
        </div>
        <hr className=" mb-0" />
        <div className="right d-flex gap-4   f-ac">
          <span className="text-nowrap">Sort By</span>
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              {sortText}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleSort} data-value="lowest-price">
                Price( Lowest )
              </Dropdown.Item>
              <Dropdown.Item onClick={handleSort} data-value="highest-price">
                Price( Highest )
              </Dropdown.Item>
              <Dropdown.Item onClick={handleSort} data-value="a-z">
                Name (a-z)
              </Dropdown.Item>
              <Dropdown.Item onClick={handleSort} data-value="z-a">
                Name (z-a)
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn-container .btn {
    padding: 0.05rem 0.4rem;
    font-size: 0.9rem;

    &.active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  hr {
    background: var(--clr-black);
  }
`;

export default Sort;
