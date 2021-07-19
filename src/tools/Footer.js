import React from "react";
import { Link } from "../components/link";
import { Button } from "../components/Button";
import { Container } from "../components/container";
import { HorBox } from "../components/sizedBox";
import { Text } from "../components/text";
import { FontFamily } from "../global/enum";
import MediaQuery from "../tools/MediaQuery";

function Footer() {
  let smallScreen = MediaQuery("(max-width: 800px)");

  const allStyles = {
    container: {
      width: "100%",
      height: "300px",
      backgroundColor: "black",
    },

    footerRow: {
      width: "280px",
      margin: "0 auto",
      textalign: "center",
    },

    links: {
      textColor: "white",
      textalign: "center",
      size: "1rem",
      bold: "bold",
      family: FontFamily.sansNarrow,
    },

    icon: {
      width: "40px",
      height: "40px",
      backgroundColor: "white",
      padding: "all:5px",
      borderradius: "all:20px",
      margin: "all:10px",
      display: "inline-block",
    },
  };

  return (
    <>
      <Container {...allStyles.container}>
        <HorBox height="20px" />
        <Container {...allStyles.footerRow}>
          <Text {...allStyles.links}>
            <a href="/about">About us</a>
          </Text>
          <HorBox height="5px" />
          <Text {...allStyles.links}>
            <a href="/contact">Contact us</a>
          </Text>
          <HorBox height="5px" />
          <Text {...allStyles.links}>Connect with us</Text>
          <HorBox height="10px" />
          <Container>
            <Button {...allStyles.icon}>
              <img
                width="100%"
                height="100%"
                src="http://localhost:3000/img/facebook.png"
              />
            </Button>
            <Button {...allStyles.icon}>
              <img
                width="100%"
                height="100%"
                src="http://localhost:3000/img/instagram.png"
              />
            </Button>
            <Button {...allStyles.icon}>
              <img
                width="100%"
                height="100%"
                src="http://localhost:3000/img/tiktok.png"
              />
            </Button>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Footer;
