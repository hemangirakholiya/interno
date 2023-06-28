import React from "react";
import styled from "styled-components";
import Client from "../Componotes/Client";
import Toppage from "../Componotes/Toppage";
import Aboutus from "../Componotes/Aboutus";
import Counter from "../Componotes/Counter";

const ServiceSingle = () => {
  const data = {
    title: "Service Single",
    subtitle: "Home / Services Single",
  };

  const carddata = {
    image: "./images/sersing.png",
    heading: "We love design.That's how we got here.",
    pera: "It is a long established fact that a reader will be distracted by the of readable content.",
    btn: "Our Portfolio",
  };

  return (
    <>
      <Wrapper>
        <Toppage {...data} />
      </Wrapper>
      <Section>
        <div className="main_container" data-aos="fade-right">
          <div className="data_part">
            <div className="left_part">
              <h1 className="left-heading">
                We set the trends of modern living
                <br />
                Services.
              </h1>
            </div>
            <div className="right_part">
              <div className="right-top">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page
              </div>
              <div className="right-bottom">
                when lookings at its layouts the points spriof using that it has
                a more less normal.A wonderful serenity has taken pgossession of
                my entire soul, like thesce sweet morndsings of sphring which I
                enjoy with my forwhole heart. I am alone, and feel the charm of
                excgistence in this spot, which was created for the bliss of
                souls like mine.
              </div>
              <div className="right-last">
                when lookings at its layouts the points spriof using that it has
                a more less normal.A wonderful serenity has taken pgossession of
                my entire soul, like thesce sweet morndsings of sphring which I
                enjoy with my forwhole heart. I am alone, and feel the charm of
                excgistence in this spot, which was created for the bliss of
                souls like mine.
              </div>
            </div>
          </div>
        </div>

        <Client />
        <div className="vediopart" data-aos="fade-right">
          <video className="vedio" width="60%" controls loop>
            <source src="./images/production ID_3770033.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="list_container" data-aos="fade-left">
          <div className="data_part">
            <div className="left-data">
              <h1 className="left-heading">Use of Interior </h1>
              <ol>
                <li>1. We provide high quality design services.</li>
                <li>2. Project on time and Latest Design.</li>
                <li>3. Scientific Skills For getting a better result.</li>
                <li>4. Renovations Benefit of Service.</li>
                <li>5. We are confident about our projects.</li>
              </ol>
            </div>
            <hr />
            <div className="right-data">
              <h1 className="left-heading">Make An Art</h1>
              <ol>
                <li>1. We provide high quality design services.</li>
                <li>2. Project on time and Latest Design.</li>
                <li>3. Scientific Skills For getting a better result.</li>
                <li>4. Renovations Benefit of Service.</li>
                <li>5. We are confident about our projects.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="about_cards">
          <Aboutus {...carddata} />
        </div>
        <Counter />
      </Section>
    </>
  );
};

const Wrapper = styled.div`
  .main_container {
    background-image: url(/images/Service-Single.png);
  }
`;
const Section = styled.div`
  .main_container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 12rem;
    width: 70%;

    @media (max-width: 1080px) {
      width: 90%;
    }
  }
  .data_part {
    display: flex;
    @media (max-width: 880px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
  .left-heading {
    color: #292f36;
    font-size: 7rem;
  }
  .right_part {
    font-size: 2.5rem;
    width: 50%;
    @media (max-width: 880px) {
      width: 100%;
    }
  }
  .left_part {
    width: 50%;
    @media (max-width: 880px) {
      width: 100%;
    }
  }
  .right-top {
    color: #cda274;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  .right-bottom {
    color: #292f36;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }
  .right-last {
    color: #292f36;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }
  .vediopart {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 8rem;
    width: 90%;
    @media (max-width: 1080px) {
      width: 100%;
    }
  }
  .vedio {
    border-radius: 75px;
  }

  .list_container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 12rem;
    width: 70%;

    @media (max-width: 1080px) {
      width: 90%;
      text-align: center;
    }
  }
  .left-data {
    padding: 0rem 5rem;
    margin: 0rem 8rem;
  }
  .right-data {
    padding: 0rem 5rem;
    margin: 0rem 8rem;
  }
  li {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 1rem;
  }
  hr {
    border: 1.5px solid #cecece;
  }
  li::first-letter {
    color: #cda274;
  }
  .about_cards {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-left: -8rem;
    @media (max-width: 1080px) {
      margin-right: 30rem;
    }
    @media (max-width: 980px) {
      margin: auto;
    }

    .contact {
      display: none;
    }
    .container {
      flex-direction: row-reverse;
      @media (max-width: 1080px) {
        flex-direction: column-reverse;
        text-align: center;
      }
    }
    .hero-heading {
      font-size: 6rem;
    }
  }
`;

export default ServiceSingle;
