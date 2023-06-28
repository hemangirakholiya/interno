import React from "react";
import Aboutus from "../Componotes/Aboutus";
import Client from "../Componotes/Client";
import Counter from "../Componotes/Counter";
import Herosection from "../Componotes/Herosection";
import Projects from "../Componotes/Projects";
import Testimonials from "../Componotes/Testimonials";
import Work from "../Componotes/Work";
import Blogs from "../Componotes/Blogs";
import Contacts from "../Componotes/Contacts";



const Home = () => {
  const data = {
    heading: "Follow Our Projects",
    pera: "It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.",
    
    projectsData: [
      {
        id: 1,
        image: "./images/Image (2).png",
        title: "Modern Kitchan",
        type: "Decor / Artchitecture",
      },
      {
        id: 2,
        image: "./images/Image (3).png",
        title: "Modern Kitchan",
        type: "Decor / Artchitecture",
      },
      {
        id: 3,
        image: "./images/Image (4).png",
        title: "Modern Kitchan",
        type: "Decor / Artchitecture",
      },
      {
        id: 4,
        image: "./images/Image (5).png",
        title: "Modern Kitchan",
        type: "Decor / Artchitecture",
      },
    ],
  };

  

  const carddata = {
    image: "./images/Image (1).png",
    heading: "We Create The Art Of Stylish Living Stylishly",
    pera: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
    btn: "Get Free Estimate",
  };

  const cdata = {
    heading: "Follow Our Projects",
    pera: "It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.",
    cardsData: [
      {
        id: 1,
        title: "Project Plan",
        content:
          "There are many variations of the passages of lorem Ipsum from available majority",
        link: "/",
      },
      {
        id: 2,
        title: "Interior Work",
        content:
          "There are many variations of the passages of lorem Ipsum from available majority",
        link: "/",
      },
      {
        id: 3,
        title: "Realization",
        content:
          "There are many variations of the passages of lorem Ipsum from available majority",
        link: "/",
      },
    ],
  };

  const formdata = {
    headingheading: "Creative project? Let's have a productive talk.",
  };

  

  return (
    <>
      <Herosection />
      <Work {...cdata} />
      <Aboutus {...carddata} />
      <Testimonials />
      <Client />
      <Projects {...data} />
      <Counter />
      <Blogs />
      <Contacts {...formdata} />
      
    </>

  );
};




export default Home;
