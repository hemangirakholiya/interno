import React from "react";
import Toppage from "../Componotes/Toppage";
import styled from "styled-components";
import Form from "../Componotes/Form";

const Contact = () => {
  const data = {
    title: "Contact Us",
    subtitle: "Home / Contact",
  };

  const formdata = {
    heading: "We love meeting new people and helping them.",
  };
  return (
    <>
      <Wrapper>
        <Toppage {...data} />
      </Wrapper>
      <Section>
        <Form {...formdata} />
      </Section>
      <Sectiont>
        <if rame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59502.23436336731!2d72.7464156486328!3d21.236224100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f9c4eecb6b7%3A0x1e4c1e6f692dacc4!2sCroma!5e0!3m2!1sen!2sin!4v1678889164554!5m2!1sen!2sin"
          width="50%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></if>
      </Sectiont>
    </>
  );
};
const Wrapper = styled.div`
  .main_container {
    background-image: url(/images/Images.png);
  }
`;
const Section = styled.div`
  .head_container {
    width: 100%;
    display: flex;
    @media (max-width: 1180px) {
      flex-direction: column;
    }
  }
  .main_heading {
    width: 35%;
    @media (max-width: 1180px) {
      width: 50%;
    }
  }
  #my-form {
    margin-left: -30rem;
    @media (max-width: 1180px) {
      margin: 0;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f4f0ec;
    margin: 5rem;
    padding: 3rem 1rem;
    width: 85%;
    border-radius: 40px;
  }
  .info {
    margin-left: 30rem;
    @media (max-width: 1180px) {
      margin: auto;
    }
    @media (max-width: 310px) {
      margin: 0;
    }
  }
  ul {
    font-size: 2rem;
    font-weight: 500;
  }
  li {
    padding: 2rem;
  }
  .icons {
    display: flex;
    gap: 2rem;
    cursor: pointer;

    @media (max-width: 680px) {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }

  i {
    font-size: 2rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  .email i {
    color: #cda274;
    background-color: #ffffff;
    border-radius: 100%;
    height: 4rem;
    width: 4rem;
    padding-top: 1rem;
  }
  .web i {
    color: #cda274;
    background-color: #ffffff;
    border-radius: 100%;
    height: 4rem;
    width: 4rem;
    padding-top: 1rem;
  }
  .phone i {
    color: #cda274;
    background-color: #ffffff;
    border-radius: 100%;
    height: 4rem;
    width: 4rem;
    padding-top: 1rem;
  }
`;

const Sectiont = styled.div`
 iframe{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem auto;
  border-radius: 40px;
 }
`;
export default Contact;
