import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper data-aos="fade-right">
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <picture>
              <NavLink to="/">
                <img src="./images/Logo.svg" alt="logo" />
              </NavLink>
            </picture>
            <p>
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <div className="icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="footer-pages">
            <NavLink to="/pages" className="titles">
              Pages
            </NavLink>

            <ul>
              <li>
                <Link to="/pages">About Us</Link>
              </li>
              <li>
                <Link to="/project">Our Projects</Link>
              </li>
              <li>
                <Link to="/team">Our Team</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-services">
            <NavLink to="/services" className="titles">
              Services
            </NavLink>

            <ul>
              <li>
                <Link to="/">Kitchan</Link>
              </li>
              <li>
                <Link to="/">Living Area</Link>
              </li>
              <li>
                <Link to="/">Bathroom</Link>
              </li>
              <li>
                <Link to="/">Dinning Hall</Link>
              </li>
              <li>
                <Link to="/">Bedroom</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <NavLink to="/contact" className="titles">
              Contact
            </NavLink>
            <p className="add">
              <p>
                55 East Birchwood Ave. <br /> Brooklyn, New York 11201
              </p>
              <li>contact@interno.com</li>
              <li>(123) 456 - 7890</li>
            </p>
          </div>
        </div>
        <p className="copyrights">
          Copyright © Interno | Designed by Victorflow Templates - Powered by
          Webflow
        </p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  footer {
    padding: 10rem;

    @media (max-width: 480px) {
      padding: 3rem;
    }

    .grid-four-column > div {
      @media (max-width: 768px) {
      }
    }
  }
  .container {
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    @media (max-width: 490px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }

  .footer-about {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    width: 20%;
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    picture {
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: translatey(-10px);
      }

      @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
    }

    p {
      color: #4d5053;
      font-size: 2rem;
      letter-spacing: 0.5px;
      margin-bottom: 2rem;
      @media (max-width: 480px) {
        width: 80%;
      }
    }

    .icons {
      display: flex;
      gap: 2rem;
      @media (max-width: 680px) {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }

    i {
      font-size: 2rem;
      color: #292f36;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        transform: translatey(-5px);
      }
    }
  }

  .footer-pages,
  .footer-services,
  .footer-contact {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      margin-top: -50px;
      margin-bottom: -10px;
    }

    .titles {
      font-size: 2.8rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
      color: #292f36;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      transition: color 0.2s ease-in-out;
      cursor: pointer;

      &:hover {
        color: #666;
      }
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-bottom: 1rem;

        a {
          font-size: 2.4rem;
          font-weight: 900;
          color: #4d5053;
          transition: color 0.2s ease-in-out;
          cursor: pointer;

          &:hover {
            color: #000;
          }
        }
      }
    }

    .add {
      font-size: 2rem;
      line-height: 1.8;
      margin-top: 1rem;

      li {
        color: #4d5053;
        margin-bottom: 0.5rem;
      }
    }
  }
  /* .footer-services{
    margin-left: -100px;
  } */

  .copyrights {
    font-size: 2.2rem;
    letter-spacing: 1px;
    text-align: center;
    color: #4d5053;
    font-weight: 900;
    margin-top: 5rem;
  }
`;

export default Footer;
