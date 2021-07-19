import React, { useEffect } from "react";
import { Container } from "../components/container";
import { Button } from "../components/Button";
import MediaQuery from "./MediaQuery";
import { FontFamily, ScreenSize } from "../global/enum";
import { Text } from "../components/text";
import { useHistory } from "react-router-dom";

function CardGender() {
  let screen = MediaQuery();
  let history = useHistory();

  const allStyles = {
    text1: {
      size: "4rem",
      textColor: "red",
      textalign: "center",
      bold: "bold",
      family: FontFamily.cursive,
    },
    cardHolder: {
      overflows: "all:hidden",
      display: "inline-block",
      margin: "0 auto",
      textalign: "center",
    },
    card: {
      height: "500px",
      width: "400px",
      background: "red",
      borderradius: "all:0px",
      margin: "all:20px",
      display: "inline-block",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
    },

    overlap: {
      width: "150px",
      height: "50px",
      position: "absolute",
      display: "block",
      left: "50%",
      bottom: "75px",
      margin: "0 auto",
      transform: "translate(-75px)",
    },

    overlapButton: {
      width: "100%",
      height: "100%",
      backgroundColor: "lightgrey",
      color: "black",
    },

    overlapText: {
      bold: "bold",
      textalign: "center",
      size: "1.5rem",
      textColor: "inherit",
    },

    overlapButtonHover: {
      backgroundColor: "black",
      color: "white",
    },

    /*tablet */
    cardTablet: {
      height: "400px",
      width: "300px",
      margin: "all:20px",
    },

    text1Tablet: {
      size: "3rem",
      bold: "bold",
    },

    /*mobile */
    text1Mobile: {
      size: "2rem",
      bold: "bold",
    },

    cardMobile: {
      height: "350px",
      width: "280px",
      margin: "top:20px",
    },
  };

  allStyles.overlapButton["hoverStyle"] = allStyles.overlapButtonHover;
  if (screen === ScreenSize.Tablet) {
    allStyles.card = { ...allStyles.card, ...allStyles.cardTablet };
    allStyles.text1 = { ...allStyles.text1, ...allStyles.text1Tablet };
  } else if (screen === ScreenSize.Mobile) {
    allStyles.text1 = { ...allStyles.text1, ...allStyles.text1Mobile };
    allStyles.card = { ...allStyles.card, ...allStyles.cardMobile };
  }

  return (
    <>
      <Container display="flex">
        <Container {...allStyles.cardHolder}>
          <Container {...allStyles.card}>
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/men.jpg"
            />
            <Container {...allStyles.overlap}>
              <Button
                {...allStyles.overlapButton}
                onClick={() => {
                  history.push("/men");
                }}
              >
                <Text {...allStyles.overlapText}>Men</Text>
              </Button>
            </Container>
          </Container>
          <Container {...allStyles.card}>
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/women.jpg"
            />
            <Container {...allStyles.overlap}>
              <Button
                {...allStyles.overlapButton}
                onClick={() => {
                  history.push("/women");
                }}
              >
                <Text {...allStyles.overlapText}>Women</Text>
              </Button>
            </Container>
          </Container>
          <Container {...allStyles.card}>
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/boys.png"
            />
            <Container {...allStyles.overlap}>
              <Button
                {...allStyles.overlapButton}
                onClick={() => {
                  history.push("/boys");
                }}
              >
                <Text {...allStyles.overlapText}>Boys</Text>
              </Button>
            </Container>
          </Container>
          <Container {...allStyles.card}>
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/girls.jpeg"
            />
            <Container {...allStyles.overlap}>
              <Button
                {...allStyles.overlapButton}
                onClick={() => {
                  history.push("product/girls");
                }}
              >
                <Text {...allStyles.overlapText}>Girls</Text>
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default CardGender;
