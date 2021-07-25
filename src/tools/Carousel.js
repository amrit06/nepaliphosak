import React, { useEffect } from "react";
import { Container } from "../components/container";

function Carousel() {
  useEffect(() => {
    const interval = setInterval(() => {
      slideRight(4);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const slideRight = (noOfSlides) => {
    /*  let windowWidth = window.innerWidth;  */ // this doesn't take scroll bar of browser into account
    let windowWidth = document.getElementById("scroller").offsetWidth;
    let scrollAmount = document.getElementById("scroller").scrollLeft;
    if (scrollAmount >= windowWidth * (noOfSlides - 1)) {
      document.getElementById("scroller").scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      document.getElementById("scroller").scrollTo({
        top: 0,
        left: scrollAmount + windowWidth,
        behavior: "smooth",
      });
    }
  };

  const allStyles = {
    carousel: {
      width: "100%",
      height: "600px",
      overflowX: "scroll",
      overflowY: "hidden",
      whiteSpace: "nowrap",
      id: "scroller",
    },
    slides: {
      width: "100%",
      height: "100%",
      display: "inline-block",
    },
  };

  return (
    <>
      <Container id="scroller" {...allStyles.carousel}>
        <Container {...allStyles.slides}>
          <img
            width="100%"
            height="100%"
            alt=""
            src="http://localhost:3000/img/hairjewellery.jpeg"
          ></img>
        </Container>
        <Container {...allStyles.slides}>
          <img
            width="100%"
            height="100%"
            alt=""
            src="http://localhost:3000/img/kangaroo.jpeg"
          ></img>
        </Container>
        <Container {...allStyles.slides}>
          <img
            width="100%"
            height="100%"
            alt=""
            src="http://localhost:3000/img/dashlane.png"
          ></img>
        </Container>
        <Container {...allStyles.slides}>
          <img
            width="100%"
            height="100%"
            alt=""
            src="http://localhost:3000/img/kidstopi.jpeg"
          ></img>
        </Container>
      </Container>
    </>
  );
}

export default Carousel;
