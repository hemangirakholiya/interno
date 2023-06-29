import React from "react";
import Toppage from "../Componotes/Toppage";
import styled from "styled-components";
import Projects from "../Componotes/Projects";
import Paginationbtn from "../Styles/Paginationbtn";

const Blog = () => {
  const data = {
    title: "Articles & News",
    subtitle: "Home / Blog",
  };

  const dataas = {
    heading: "Latest Post",

    projectsData: [
      {
        id: 11,
        image: "./images/single.png",
        pera: "Low Cost Latest Invented Interior Designing Ideas",
        peratwo:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.",
        perathree:
          "Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        date: "26 December,2022 ",
      },
    ],
  };

  const dataa = {
    heading: "Articles & News",

    projectsData: [
      {
        id: 5,
        image: "./images/image6.png",
        pera: "Let’s Get Solustion For Buillding Construcstion Work",
        date: "26 December,2022 ",
      },
      {
        id: 6,
        image: "./images/image7.png",
        pera: "Low Cost Latest Invented Interior Designing and Ideas.",
        date: "22 December,2022 ",
      },
      {
        id: 7,
        image: "./images/image8.png",
        pera: "Another ArticleBest For Any Office & Business Interior Solution",
        date: "25 December,2022 ",
      },
      {
        id: 8,
        image: "./images/aImage.png",
        pera: "Let’s Get Solustion For Buillding Construcstion Work",
        date: "26 December,2022 ",
      },
      {
        id: 9,
        image: "./images/aimage1.png",
        pera: "Low Cost Latest Invented Interior Designing and Ideas.",
        date: "22 December,2022 ",
      },
      {
        id: 10,
        image: "./images/aimage2.png",
        pera: "Another ArticleBest For Any Office & Business Interior Solution",
        date: "25 December,2022 ",
      },
    ],
  };
  return (
    <>
      <Wrapper>
        <Toppage {...data} />
      </Wrapper>
      <Section>
        <Projects {...dataas} />
      </Section>
      <BlogContainer>
        <Projects {...dataa} />
        <Paginationbtn/>
      </BlogContainer>
    </>
  );
};
const Wrapper = styled.div`
  .main_container {
    background-image: url(./images/imagelaceholder.png);
  }
`;
const Section = styled.div`
  .projects-container { 
    width: 100%;
    margin: auto;
    margin-top: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .projects-cards {
    width: 100%;
  }

  .projects-heading {
    font-size: 7rem;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    letter-spacing: 2px;
    color: #292f36;
    font-weight: 900;
  }
  .card {
    border: 1px solid #ccc;
    border-radius: 45px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin-top: 4rem;
    transition: all 0.3s ease-in-out;
    @media (max-width: 1180px) {
      width: 70%;
      align-items: center;
      justify-content: center;
    }
  }
  .card:hover {
    background-color: #f4f0ec;
  }
  .single_card {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 1180px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .singletext {
    width: 100%;
    margin: 0 5rem;
  }
  .singleimg {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title_pera {
    font-size: 2.5rem;
    font-weight: 900;
  }
  .perat {
    font-size: 2rem;
    margin-top: 2rem;
  }
  .perath {
    font-size: 2rem;
    margin-top: 3rem;
  }
  .date {
    font-size: 2rem;
    margin-top: 2rem;
  }
`;

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
    font-size: 7rem;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    letter-spacing: 2px;
    color: #292f36;
    font-weight: 900;
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
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
    @media (max-width: 1280px) {
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

export default Blog;
