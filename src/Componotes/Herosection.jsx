import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";

const Herosection = () => {
  return (
    <Wrapper data-aos="zoom-in-down">
      <div className="containerr" >
        <div className="section-hero-data">
          <h1 className="hero-heading">Let Your Home Be Unique</h1>
          <p className="hero-pera">
            There are many variations of the passages of lorem Ipsum
            fromavailable,variations of the passages.
          </p>
          <Button className="btn getstarted-btn">
            <NavLink to="/login">
              
              Get Started <i className="arrow fa-solid fa-arrow-right-long"></i>
            </NavLink>
          </Button>

          
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .containerr {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 800px;
    display: flex;
    flex-direction: column;
    margin-bottom: 8rem;
    padding: 0;
    overflow-x: hidden;
    /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2); */
    background-image: url(./images/photo.jpg);
    border-radius: 0px 0px 0px 291px;
  }

  .section-hero-data {
    padding: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    width: 70%;
    @media (max-width: 1080px) {
      padding:5rem;
      margin-top: 15rem;
      width: 100%;
    }
    @media (max-width: 480px) {
      padding: 0;
      width: 100%;
      text-align: center;
    }
  }

  .btn {
    max-width: 16rem;
    @media (max-width: 480px) {
      margin: auto;
    }
  }
  .hero-heading {
    width: 70%;
    font-size: 8.4rem;
    letter-spacing: 3px;
    @media (max-width: 480px) {
      padding: 3rem;
      font-size: 6rem;
      width: 100%;
      text-align: center;
    }
  }
  .hero-pera {
    font-size: 3rem;
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
`;

export default Herosection;
