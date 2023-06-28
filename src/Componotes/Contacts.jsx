import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Button } from "../Styles/Button";

const Contacts = () => {
  return (
    <Wrapper data-aos="fade-left">
      <div className="contacts-container" >
        <div className="text-part">
          <h1 className="contacts-heading">Wanna join the interno?</h1>
          <p className="contacts-pera">
            It is a long established fact will be distracted.
          </p>
          <Button className="btn contact-btn">
            <NavLink to="/contact">
              {" "}
              Contact With Us{" "}
              <i className="arrow fa-solid fa-arrow-right-long"></i>
            </NavLink>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  background-color: #292f36;
  width: 60%;
  color: #ffffff;
  border-radius: 70px;
  margin: auto;
  height: 40vh;
  overflow-x: hidden;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 80%;
    height: 70vh;
    padding: 2rem;
  }

  .contacts-heading {
    color: #ffffff;
    letter-spacing: 4px;
  }
  .contacts-pera {
    font-weight: 400;
    color: #ffffff;
    letter-spacing: 2px;
  }
  .btn {
    background-color: #cda274;
    color: #ffffff;
    letter-spacing: 2px;
    font-weight: 600;
    @media (max-width: 480px) {
   padding: 1rem;
    
  }
  }
  .arrow {
    color: #292f36;
  }
`;

export default Contacts;
