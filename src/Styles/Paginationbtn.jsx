import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Paginationbtn = () => {
  return (
    <Wrapper>
      <div className="numbtn">
        <NavLink to="/login" className="ssarrow one">01</NavLink>
        <NavLink to="/login" className="ssarrow two">02</NavLink>
        <NavLink to="/login" className="ssarrow three">03</NavLink>
        
        <div className="aarrow_part">
          <i className="ssarrow fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
cursor: pointer;
  .ssarrow {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
    color: #292f36;
    border: 1px solid #cda274;
    background-color: #ffffff;
    transition: all 0.3s ease-in-out;
    border-radius: 100%;
    height: 50px;
    width: 50px;
    :hover {
      background-color: #f4f0ec;
    }
    @media (max-width: 480px) {
      margin-left: 0.5rem;
    }
  }
  .numbtn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .three {
    font-weight: 900;
  }
  .two {
    font-weight: 900;
  }
  .one {
    font-weight: 900;
  }

`;

export default Paginationbtn;
