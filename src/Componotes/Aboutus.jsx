import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Button } from "../Styles/Button";

const Aboutus = (props) => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column" data-aos="fade-left">
        <div className="section-hero-data">
          <div className="texts_part">
            <div className="icons_part">
              <div className="numbers">{props.number}</div>
              <img className="icons" src={props.icon} alt="" />
            </div>
            <h1 className="hero-heading">{props.heading}</h1>
            <p className="hero-pera">{props.pera}</p>
          </div>
          <div className="contact ">
            <NavLink to="/contact">
              <i className="call fa-solid fa-phone"></i>
            </NavLink>
            <div className="number">
              <h3 className="phone-num">012345678</h3>
              <p className="callus">Call Us Anytime</p>
            </div>
          </div>
          <Button className="btn getfree-btn">
            <NavLink to="/contact">
              {props.btn}
              <i className="arrow fa-solid fa-arrow-right-long"></i>
            </NavLink>
          </Button>
          <Button className="btnn getfree-btn">
            <NavLink to="/">
              {props.btn}
              <i className="arrow fa-solid fa-arrow-right-long"></i>
            </NavLink>
          </Button>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src={props.image} alt="images" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    margin: 10rem 19rem;
    @media (max-width: 980px) {
      display: flex;
      flex-direction: column-reverse;
      margin: 1rem auto;
    }
  }

  .section-hero-data {
    width: 30%;
    display: flex;
    flex-direction: column;
    @media (max-width: 980px) {
      width: 100%;
      margin-bottom: 8rem;
      margin-top: -5rem;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
  .btn {
    max-width: 18rem;
  }

  .btnn {
    max-width: 18rem;
    display: none;
  }
  .hero-heading {
    font-size: 7.1rem;
  }

  .contact {
    display: flex;
    margin: 20px 0;
  }
  .hero-pera {
    font-size: 2.5rem;
    letter-spacing: 1px;
  }
  h3 {
    color: #000;
    font-weight: 900;
    font-size: 20px;
    margin-bottom: -8px;
  }
  .call {
    font-size: 25px;
    margin-right: 15px;
    margin-top: -8px;
    padding: 2.14rem 2.14rem;
    color: #cda274;
    background-color: #f4f0ec;
    border-radius: 100%;
    height: 70px;
    width: 70px;
    transition: all 0.3s ease-in-out;
  }
  .fa-solid:hover {
    transform: translatex(-10px);
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    transition: all 0.3s ease-in-out;
    @media (max-width: 980px) {
      text-align: center;
    }
  }
  .section-hero-image:hover {
    transform: translateY(-10px);
  }
  /* .section-hero-image img {
    border-radius: 326.5px 0px 123px;
  } */
  .picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default Aboutus;
