import React from "react";
import Toppage from "../Componotes/Toppage";
import styled from "styled-components";
import Faqss from "../Componotes/Faqss";

const Faq = () => {
  const data = {
    title: "Faq’s",
    subtitle: "Home / About Us",
  };

  const faqsdata = {
    image: "./images/secfaq.png",
    heading: "Project related questions",
    qone: "How long does it take?",
    qtwo: "Can I use my existing furnishings?",
    qthree: "I put into redesigning my interior?",
    qfour: "What do your services cost?",
    qfive: "Do you offer free consultations?  ",
  };

  const faqssdata = {
    image: "./images/faqimg.png",
    heading: "Every Question Answered",
    qone: "What is the Hipcouch Interior Design Service?",
    qtwo: "So, how exactly does this work?",
    qthree: " What cities do you currently operate in?",
    qfour: "Hipcouch Interior Design Service?",
    qfive: "What kind of interior designers do you have?",
  };

  return (
    <>
      <Wrapper>
        <Toppage {...data} />
      </Wrapper>

      <Faqss {...faqssdata} />
      <Section>
        <Faqss {...faqsdata}/>
      </Section>
    </>
  );
};

const Wrapper = styled.div`
  .main_container {
    background-image: url(/images/faqimages.png);
  }
`;
const Section = styled.div`
  .faq_container{
    display: flex;
    flex-direction: row-reverse;
  }

`;

export default Faq;
