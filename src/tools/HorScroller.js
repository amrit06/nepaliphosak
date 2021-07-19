import React from "react";
import { Button } from "../components/Button";
import { Container } from "../components/container";

import MediaQuery from "../tools/MediaQuery";

function HorizontalScroller() {
  let smallScreen = MediaQuery("(max-width: 800px)");

  const slideLeft = () => {
    let scrollerWidth = document.getElementById("horScroller").offsetWidth;
    let scrollAmount = document.getElementById("horScroller").scrollLeft;

    console.warn("right", scrollAmount);
    document.getElementById("horScroller").scrollTo({
      top: 0,
      left: scrollAmount - scrollerWidth,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    let scrollerWidth = document.getElementById("horScroller").offsetWidth;
    let scrollAmount = document.getElementById("horScroller").scrollLeft;

    console.warn("right", scrollAmount);
    document.getElementById("horScroller").scrollTo({
      top: 0,
      left: scrollAmount + scrollerWidth,
      behavior: "smooth",
    });
  };

  const allStyles = {
    scrollerContainer: {
      width: "100%",
      height: "380px",
      position: "relative",
    },

    cardContainer: {
      width: "100%",
      height: "100%",
      display: "inline-block",
      position: "absolute",
      overflow: "x:scroll;y:hidden",
      whiteSpace: "nowrap",
      webkitOverflowScrolling: "touch",
    },

    card: {
      width: "280px",
      height: "380px",
      borderRadius: "20px",
      display: "inline-block",
      backgroundColor: "red",
      margin: "left:5px;right:5px",
    },

    overlapContianer: {
      height: "",
      width: "100%",
      display: "block",
      display: "inline-block",
      position: "absolute",
      top: "50%",
      transform: "translate(0px,-30px)",
    },

    overlapButton: {
      width: "50px",
      height: "50px",
      padding: "all:10px",
      display: "inline-block",
      backgroundColor: "lightblue",
      borderradius: "all:50px",
      margin: "left:5px;right:5px",
    },

    overlapButtonHover: {
      backgroundColor: "pink",
    },
  };

  allStyles.overlapButton["hoverStyle"] = allStyles.overlapButtonHover;

  return (
    <>
      {/* make sure div's name aren't same as in other components */}
      <Container {...allStyles.scrollerContainer}>
        <Container id="horScroller" {...allStyles.cardContainer}>
          <Container {...allStyles.card}>
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/boys.png"
            />
          </Container>
          <Container {...allStyles.card}>
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/dashlane.png"
            />
          </Container>
          <Container {...allStyles.card}>
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/girls.jpeg"
            />
          </Container>
          <Container {...allStyles.card}>
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/kidstopi.jpeg"
            />
          </Container>
          <Container {...allStyles.card}>
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/men.jpg"
            />
          </Container>
          <Container {...allStyles.card}>
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/women.jpg"
            />
          </Container>
          <Container {...allStyles.card}>
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/boys.png"
            />
          </Container>
          <Container {...allStyles.card}>
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/women.jpg"
            />
          </Container>
        </Container>

        <Container {...allStyles.overlapContianer}>
          <Button
            {...allStyles.overlapButton}
            float="left"
            onClick={() => {
              slideLeft();
            }}
          >
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/back.png"
            />
          </Button>
          <Button
            {...allStyles.overlapButton}
            float="right"
            onClick={() => {
              slideRight();
            }}
          >
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/next.png"
            />
          </Button>
        </Container>
      </Container>
    </>
  );
}

export default HorizontalScroller;
