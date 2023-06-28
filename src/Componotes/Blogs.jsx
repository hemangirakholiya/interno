import React from "react";
import Projects from "./Projects";
import styled from "styled-components";

const Blogs = () => {
  const data = {
    heading: "Articles & News",
    pera: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.",
    projectsData: [
      {
        id: 5,
        image: "./images/Image (6).png",
        pera: "Let’s Get Solustion For Buillding Construcstion Work",
        date: "26 December,2022 ",
      },
      {
        id: 6,
        image: "./images/Image (7).png",
        pera: "Low Cost Latest Invented Interior Designing and Ideas.",
        date: "22 December,2022 ",
      },
      {
        id: 7,
        image: "./images/Image (8).png",
        pera: "Another ArticleBest For Any Office & Business Interior Solution",
        date: "25 December,2022 ",
      },
    ],
  };

  return (
    <BlogContainer>
      <Projects {...data} />
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  text-align: center;
  width: 100%;
  padding: 5rem;
  /* background-color: #292f36; */

  overflow-x: hidden;
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    padding-left: -10px;
  }

  .projects-cards {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    @media (max-width: 480px) {
    }
  }

  .projects-heading {
    font-size: 8rem;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    letter-spacing: 2px;
    color: #292f36;
    font-weight: 900;
  }

  .projects-pera {
    font-size: 2.5rem;
    letter-spacing: 1.7px;
    margin: 1rem auto;
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .card {
    border: 1px solid #ccc;
    border-radius: 45px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    width: 20%;
    text-align: left;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin: 3.5rem;
    transition: all 0.3s ease-in-out;
    @media (max-width: 1200px) {
      width: 40%;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 768px) {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 480px) {
      width: 100%;
    }
  }

  .card:hover {
    background-color: #f4f0ec;
  }

  .card img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .date {
    font-size: 1.5rem;
    color: #4d5053;
    font-weight: 600;
    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  .title_pera {
    color: #292f36;
    font-size: 2.6rem;
    font-weight: 600;
    margin-bottom: 15px;
    letter-spacing: 2px;
    @media (max-width: 300px) {
      letter-spacing: 0;
      font-size: 1.5rem;
    }
  }

  .arrow_part {
    margin-top: -15px;
    @media (max-width: 480px) {
      margin-top: -6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default Blogs;
