import React from "react";
import styled from "styled-components";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faqss = (props) => {
  return (
    <>
      <Section>
        <div className="main_container">
          <div className="faq_heading">
            <h1>{props.heading}</h1>
          </div>
          <div className="faq_container">
            <div className="data_container">
              <Accordion className="main">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="typo">{props.qone}</Typography>
                </AccordionSummary>
                <AccordionDetails className="details">
                  <Typography className="pera">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary popular belief. There are
                    many variations of passages of Lorem Ipsum available, but
                    the majority randomised.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="main">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className="typo">{props.qtwo}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="pera">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary popular belief. There are
                    many variations of passages of Lorem Ipsum available, but
                    the majority randomised.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="main">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className="typo">{props.qthree}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="pera">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary popular belief. There are
                    many variations of passages of Lorem Ipsum available, but
                    the majority randomised.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="main">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className="typo">{props.qfour}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="pera">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary popular belief. There are
                    many variations of passages of Lorem Ipsum available, but
                    the majority randomised.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="main">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className="typo">{props.qfive}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="pera">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary popular belief. There are
                    many variations of passages of Lorem Ipsum available, but
                    the majority randomised.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="img_container">
              <picture>
                <img src={props.image} alt="" />
              </picture>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

const Section = styled.div`
  .faq_container {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6rem auto;
    margin-right: 10rem;
    margin-bottom: -1rem;
    padding: 5rem;
    overflow-x: hidden;
    @media (max-width: 1180px) {
      width: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    @media (max-width: 750px) {
     flex-direction: column;
  }
  }
  .data_container {
    margin-right: 6rem;
    width: 50%;
    @media (max-width: 750px) {
       width: 100%;
       margin-right: 0rem;
       margin-bottom: 2rem;
  }
  }
  picture img {
    width: 80%;
    @media (max-width: 750px) {
       width: 100%;
       
  }
  }
  .faq_heading {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 8rem;
    @media (max-width: 750px) {
       
       
  }
  }
  .typo {
    font-size: 2rem;
    color: #cda274;
    padding: 1rem;
    @media (max-width: 950px) {
       font-size: 1.5rem;
       padding: 0;
    }
  }
  .main {
    box-shadow: none;
  }
  .pera {
    font-size: 1.5rem;
  }
`;

export default Faqss;
