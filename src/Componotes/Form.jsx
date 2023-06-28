import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Styles/Button";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intrest, setIntrest] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, intrest);
    setName("");
    setEmail("");
    setIntrest("");
  };
  return (
    <Wrapper data-aos="fade-left">
      <div className="main_container">
        <div className="data_part">
          <div className="main_heading">{props.heading}</div>
          <div className="head_container">
            <div className="info">
              <div className="container">
                <div className="social_contact">
                  <ul>
                    <li className="email">
                      <i className="fa-regular fa-envelope"></i> &nbsp;
                      &nbsp;info@yourdomain.com
                    </li>
                    <li className="phone">
                      <i className="fa-solid fa-phone"></i> &nbsp; &nbsp; &nbsp;
                      &nbsp;+1 &nbsp; (378) &nbsp;400-1234
                    </li>
                    <li className="web">
                      <i className="fa-solid fa-earth-americas"></i> &nbsp; &nbsp;
                      www.yourdomain.com
                    </li>
                  </ul>
                </div>
                <div className="icons">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>

            <form id="my-form" onSubmit={handleSubmit}>
              <div className="input-container">
                <div className="inputs">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="extra">
                <div className="second">
                  <div className="inputs">
                    <input
                      type="text"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="subject"
                  placeholder="Hello Iam Intrested in.."
                  value={intrest}
                  onChange={(e) => setIntrest(e.target.value)}
                />
              </div>
              <Button type="submit" className="btn getstarted-btn">
                Send Now
                <i className="arrow fa-solid fa-arrow-right-long"></i>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main_container {
    /* background-color: pink; */
    padding: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    overflow-x: hidden;
    @media (max-width: 1000px) {
      padding: 5rem;
    }
  }

  .main_heading {
    font-size: 7rem;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    letter-spacing: 2px;
    color: #292f36;
    font-weight: 900;
    @media (max-width: 780px) {
      font-size: 4rem;
      letter-spacing: 0px;
      margin: auto;
      width: 30%;
    }
    @media (max-width: 480px) {
      font-size: 3rem;
    }
  }
  .input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 2rem;
    @media (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  input {
    margin: 2rem 4rem;
    border: hidden;
    font-size: 2.5rem;
    font-weight: 600;

    border-bottom: 2px solid #292f36;
    width: 100%;
    @media (max-width: 890px) {
    }
    @media (max-width: 800px) {
    }
    @media (max-width: 530px) {
      text-align: center;
      width: 25rem;
    }
  }
  .inputs {
    display: flex;
    width: 90rem;
    @media (max-width: 850px) {
      width: 60rem;
      margin: auto;
    }

    @media (max-width: 530px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .extra {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 120rem;
    margin-top: 1rem;
    margin-left: 30rem;
    @media (max-width: 850px) {
      width: 60rem;
      margin: auto;
    }
    @media (max-width: 530px) {
      align-items: center;
      text-align: center;
    }
  }
  .subject {
    padding-bottom: 10rem;
    margin-bottom: 5rem;
    width: 70%;
    @media (max-width: 530px) {
      width: 25rem;
      align-items: center;
      text-align: center;
    }
  }
  .btn {
    margin-top: 2rem;
    font-size: 2rem;

    @media (max-width: 980px) {
      font-size: 2rem;

      margin-top: 3rem;
    }
    @media (max-width: 480px) {
      font-size: 2rem;
    }
    @media (max-width: 380px) {
      font-size: 2rem;
    }
    @media (max-width: 350px) {
      font-size: 1.5rem;
      padding: 0.5rem;
    }
  }
`;

export default Form;
