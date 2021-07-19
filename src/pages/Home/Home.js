import React from "react";

import MediaQuery from "../../tools/MediaQuery";
import { FontFamily, ScreenSize } from "../../global/enum";
import { Container } from "../../components/container";
import { HorBox } from "../../components/sizedBox";
import { getDimension, getMargins } from "../../global/generic";
import Carousel from "../../tools/Carousel";
import { Text } from "../../components/text";
import { Button } from "../../components/Button";
import CardGender from "../../tools/CardGender";
import HorizontalScroller from "../../tools/HorScroller";
import Footer from "../../tools/Footer";

function Home() {
  let screen = MediaQuery();
  const allStyles = {
    text1: {
      size: "3rem",
      textColor: "red",
      textalign: "center",
      bold: "bold",
      family: FontFamily.cursive2,
    },

    text2: {
      size: "5rem",
      textColor: "white",
      textalign: "center",
      bold: "bold",
      family: FontFamily.cursive,
    },

    horContainer: {
      width: "80%",
    },
    /*tablet */
    text1Tablet: {
      size: "2rem",
    },

    text2Tablet: {
      size: "3rem",
    },

    /*mobile */
    text1Mobile: {
      size: "1rem",
    },

    text2Mobile: {
      size: "2rem",
    },

    horContainerMobile: {
      width: "100%",
    },
  };

  if (screen === ScreenSize.Tablet) {
    allStyles.text1 = { ...allStyles.text1, ...allStyles.text1Tablet };
    allStyles.text2 = { ...allStyles.text2, ...allStyles.text2Tablet };
  } else if (screen === ScreenSize.Mobile) {
    allStyles.text1 = { ...allStyles.text1, ...allStyles.text1Mobile };
    allStyles.text2 = { ...allStyles.text2, ...allStyles.text2Mobile };
    allStyles.horContainer = {
      ...allStyles.horContainer,
      ...allStyles.horContainerMobile,
    };
  }

  return (
    <>
      <Carousel></Carousel>
      <HorBox height="100px" />
      <Container>
        <Text {...allStyles.text1}>Fashion For Every ONE</Text>
      </Container>
      <CardGender />
      <HorBox height="100px" />
      <Container
        height="600px"
        width="100%"
        margin="0 auto"
        backgroundColor="black"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Container {...allStyles.horContainer}>
          <Text {...allStyles.text2}>Most Sold Products</Text>
          <HorBox height="50px" />
          <HorizontalScroller />
        </Container>
      </Container>
      <HorBox height="50px" />
      <Footer></Footer>
    </>
  );
}

export default Home;
