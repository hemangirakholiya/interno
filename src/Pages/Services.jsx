import React from "react";
import Toppage from "../Componotes/Toppage";
import styled from "styled-components";
import Work from "../Componotes/Work";
import Aboutus from "../Componotes/Aboutus";
import Contacts from "../Componotes/Contacts";

const Services = () => {
  const data = {
    image: "./images/tphoto.jpg",
    title: "Services",
    subtitle: "Home / Services",
  };

  const cdata = {
    cardsData: [
      {
        id: 4,
        title: "Project Plan",
        content:
          "There are many variations of the passages of lorem Ipsum from available majority",
        link: "/interno",
      },
      {
        id: 5,
        title: "Interior Work",
        content:
          "There are many variations of the passages of lorem Ipsum from available majority",
        link: "/interno",
      },
      {
        id: 6,
        title: "Realization",
        content:
          "There are many variations of the passages of lorem Ipsum from available majority",
        link: "/interno",
      },
      {
        id: 7,
        title: "2d/3d ArtWork",
        content:
          "There are many variations of the passages of lorem Ipsum from available majority",
        link: "/interno",
      },
      {
        id: 8,
        title: "Realization",
        content:
          "There are many variations of the passages of lorem Ipsum from available majority",
        link: "/interno",
      },
      {
        id: 9,
        title: "DecortionWork",
        content:
          "There are many variations of the passages of lorem Ipsum from available majority",
        link: "/interno",
      },
    ],
  };

  const carddata = {
    image: "./images/simage (2).png",
    heading: "Concept & Details",
    pera: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
    number: "01",
    icon: "./images/icon.png",
  };

  const cardodata = {
    image: "./images/simage (1).png",
    heading: "Idea for Work",
    pera: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
    number: "02",
    icon: "./images/icon1.png",
  };

  const cardtdata = {
    image: "./images/simage (4).png",
    heading: "Design",
    pera: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
    number: "03",
    icon: "./images/icon2.png",
  };

  const cardthdata = {
    image: "./images/simage (3).png",
    heading: "Perfection",
    pera: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
    number: "04",
    icon: "./images/icon3.png",
  };

  return (
    <>
      <Wrapper>
        <Toppage {...data} />
      </Wrapper>
      <Section>
        <Work {...cdata} />
      </Section>

      <Sectiont>
        <div className="main_container">
          <div className="sub_container">
            <div className="header">
              <div className="main_heading">How We Work</div>
              <p className="service_pera">
                It is a long established fact will be distracted.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div className="card_container">
              <div className="all_card">
                <div className="card_one">
                  <Aboutus {...carddata} />
                </div>
                <div className="card_two">
                  <Aboutus {...cardodata} />
                </div>
                <div className="card_three">
                  <Aboutus {...cardtdata} />
                </div>
                <div className="card_four">
                  <Aboutus {...cardthdata} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top_footer">
          <Contacts />
        </div>
      </Sectiont>
    </>
  );
};

const Wrapper = styled.div`
  .main_container {
    background-image: url(./images/tphoto.jpg);
  }
`;

const Section = styled.div`
  margin-top: 12rem;
`;

const Sectiont = styled.div`
  .main_container {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1280px) {
      background-color: #f4f0ec;
    }
  }
  .sub_container {
    width: 70%;
    margin: 10rem;
    padding: 0 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f4f0ec;
    border-radius: 10%;
    @media (max-width: 1280px) {
      width: 100%;
      padding: 0 2rem;
      margin-top: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: auto;
      border-radius: 0%;
      text-align: center;
    }
    @media (max-width: 1080px) {
         margin-left: auto;
        }
  }
  .main_heading {
    font-size: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    margin-top: 6rem;
    letter-spacing: 2px;
    color: #292f36;
    font-weight: 900;
    @media (max-width: 780px) {
      font-size: 5rem;
    }
    @media (max-width: 480px) {
      font-size: 5rem;
    }
  }
  .service_pera {
    font-size: 2.5rem;
    letter-spacing: 1px;
    text-align: center;
    margin: 0 11rem;
    @media (max-width: 780px) {
      font-size: 1.5rem;
      letter-spacing: 0;
      margin: 0;
    }
  }

  .section-hero-data {
    .hero-heading {
      font-size: 5rem;
    }
    .hero-pera {
      font-size: 2rem;
      @media (max-width: 1080px) {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: auto;
      }
    }
  }
  .texts_part {
    margin: -5rem;
  }
  .contact {
    display: none;
  }
  .btn {
    display: none;
  }
  .card_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: -20rem;
    @media (max-width: 1080px) {
      margin-left: -9rem;
    }
    @media (max-width: 980px) {
      margin: 0;
    }
  }

  .card_one {
    .container {
      flex-direction: row-reverse;
      margin-left: 10rem;

      @media (max-width: 980px) {
        display: flex;
        flex-direction: column-reverse;
        margin: 1rem auto;
      }
    }
  }
  .card_three {
    .container {
      flex-direction: row-reverse;
      margin-left: 10rem;
      @media (max-width: 980px) {
        display: flex;
        flex-direction: column-reverse;
        margin: 1rem auto;
      }
    }
  }
  .top_footer {
    margin-top: 6rem;
    margin-bottom: 4rem;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
  }
  .icons_part {
    display: flex;
    
    @media (max-width: 1280px) {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-left: 5rem;
    }
    .icons {
      width: 20%;
      height: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      transition: all 0.3s ease-in-out;
      :hover {
        transform: translateY(-10px);
      }
      @media (max-width: 1080px) {
         width: 10%;
         height: 10%;
         margin: 5rem;
        }
    }
    .numbers {
      font-family: "DM Serif Display";
      font-size: 10rem;
      font-weight: 600;
      color: #ffffff;
      transition: all 0.3s ease-in-out;
      :hover {
        transform: translateY(-10px);
      }
      @media (max-width: 1080px) {
         font-size: 6rem;
        }
    }
  }
`;

export default Services;
