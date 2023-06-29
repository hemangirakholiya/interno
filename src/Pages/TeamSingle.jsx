import React from "react";
import Toppage from "../Componotes/Toppage";
import styled from "styled-components";
import Flipcard from "../Componotes/Flipcard";
// import Slider from "@mui/material/Slider";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
// import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Form from "../Componotes/Form";

const TeamSingle = () => {
  const data = {
    title: "Professional Single",
    subtitle: "Home / Team Single",
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';


  const PrettoSlider = styled(Slider)({
    color: "#CDA274",
    

    height: 8,
    "& .MuiSlider-track": {
      border: "none",
      color: "#CDA274",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid #CDA274",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#CDA274 ",

      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
    
  });

  const flipCardsData = {
    heading: "Our Team Members",
    flipsData: [
      {
        id: 1,
        image: "./images/fimage1.png",
        name: "Charlotte Levi",
        work: "Design, Australia",
        number: "+1 (378) 400-1234",
        email: "julie@email.com",
      },
      {
        id: 2,
        image: "./images/fimage2.png",
        name: "Nattasha Julie",
        work: "Design, Australia",
        number: "+1 (378) 400-1234",
        email: "julie@email.com",
      },
      {
        id: 3,
        image: "./images/fimage3.png",
        name: "Nora Owen",
        work: "Design, Australia",
        number: "+1 (378) 400-1234",
        email: "julie@email.com",
      },
      {
        id: 4,
        image: "./images/fimage4.png",
        name: "John Smith",
        work: "Design, Australia",
        number: "+1 (378) 400-1234",
        email: "julie@email.com",
      },
    ],
  };
  const formdata = {
    heading: "Contact Me",
  };
  return (
    <>
      <Wrapper>
        <Toppage {...data} />
      </Wrapper>
      <Section>
        <div className="single-head">
          <div className="data-part">
            <div className="img-part">
              <picture>
                <img src="./images/maintimg.png" alt="" />
              </picture>
            </div>
            <div className="text-part">
              <div className="info">
                <h1>John Smith</h1>
                <p>Designer</p>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                  turpmaximus.posuere in.Contrpobelie frandomised words which
                  don't look even slightly believable.
                </p>

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
            </div>
          </div>
          <div className="biography">
            <div className="data-partt">
              <div className="top">
                <h1>Short Biography​</h1>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                  turpmaximus.posuere in.Contrary to popular belief.There are
                  many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, njecthumour
                  randomised words which don't look even slightly believable.
                </p>
                <p>
                  Embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined but the
                  majority have suffered alteration in some form chunks as
                  necessary.
                </p>
              </div>
              <div className="bottom">
                <div className="left-part">
                  <h4>Simplicity and Functionality</h4>
                  <p>
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in belief.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum from
                    available, but the majority have suffered alteration in some
                    form, njecthumour
                  </p>
                  <Typography gutterBottom className="type">
                    Project Design
                  </Typography>
                  <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={65}
                    color="success"
                  />
                  <Typography gutterBottom className="type">
                    Team Management
                  </Typography>
                  <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={95}
                    color="success"
                  />
                  <Typography gutterBottom className="type">
                    Client Satisfaction
                  </Typography>
                  <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={75}
                    color="success"
                  />
                </div>
                <div className="right-part">
                  <h4>Qustion And Answer</h4>
                  <p>
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.
                  </p>
                  <div>
                    <Accordion
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography
                          className="type"
                          sx={{ width: "100%", flexShrink: 0 }}
                        >
                          Website & Mobile App Design?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className="type">
                          Lorem ipsum dolor sit amet, adipiscing fromAliquam eu
                          sem turpmaximus.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded === "panel2"}
                      onChange={handleChange("panel2")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <Typography
                          className="type"
                          sx={{ width: "100%", flexShrink: 0 }}
                        >
                          How to Easy Successful Projects?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className="type">
                          Lorem ipsum dolor sit amet, adipiscing fromAliquam eu
                          sem turpmaximus.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded === "panel3"}
                      onChange={handleChange("panel3")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                      >
                        <Typography
                          className="type"
                          sx={{ width: "100%", flexShrink: 0 }}
                        >
                          International Trade Experience?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className="type">
                          Lorem ipsum dolor sit amet, adipiscing fromAliquam eu
                          sem turpmaximus.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Sectiont>
        <Flipcard {...flipCardsData} />
      </Sectiont>
      <Sectiont>
        <div className="this-form">
          <Form {...formdata} />
        </div>
      </Sectiont>
    </>
  );
};

const Wrapper = styled.div`
  .main_container {
    background-image: url(./images/teamsingle.jpg);
  }
`;
const Sectiont = styled.div`
.this-form{
  margin-top: -12rem;
}
  margin-top: 10rem;
  .info {
    display: none;
  }
  .second {
    display: none;
  }
`;

const Section = styled.div`
  .data-part {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 10rem;
    width: 70%;
  }
  p {
    font-size: 2.5rem;
    word-spacing: 2px;
  }
  img {
    width: 85%;
  }
  .text-part {
    width: 50%;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -18rem;
  }

  ul {
    font-size: 2rem;
    font-weight: 500;
  }
  li {
    padding: 1rem;
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
    background-color: #f4f0ec;
    border-radius: 100%;
    padding: 1.2rem;
  }
  .web i {
    color: #cda274;
    background-color: #f4f0ec;
    border-radius: 100%;
    padding: 1.2rem;
  }
  .phone i {
    color: #cda274;
    background-color: #f4f0ec;
    border-radius: 100%;
    padding: 1.2rem;
  }
  .data-partt {
    width: 70%;
    margin: auto;
    margin-top: 10rem;
  }
  .bottom {
    display: flex;
    margin: auto;
    margin-top: 5rem;
  }
  .right-part {
    width: 80%;
    margin-left: 8rem;
  }
  .left-part {
    width: 70%;
  }
  h4 {
    font-size: 3.5rem;
    font-weight: 600;
  }
  .type {
    font-size: 2rem;
  }
  .main {
    background-color: #f4f0ec;
  }
`;

export default TeamSingle;
