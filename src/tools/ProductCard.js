import React from "react";
import { Container } from "../components/container";
import { Text } from "../components/text";
import { Button } from "../components/Button";
import { FontFamily, ScreenSize } from "../global/enum";
import MediaQuery from "./MediaQuery";

function ProductCard({
  productName = "default",
  price = "default",
  imgPath = "",
}) {
  let screen = MediaQuery();

  const allStyles = {
    card: {
      width: "240px",
      backgroundColor: "whitesmoke",
      webkitboxshadow: "7px 7px 10px -5px #000000",
      boxshadow: "7px 7px 10px -5px #000000",
      margin: "all:20px",
      display: "inline-block",
    },

    imgContainer: {
      width: "100%",
      height: "300px",
    },

    headerContainer: {
      width: "100%",
      height: "30px",
    },

    headerText: {
      size: "1.2rem",
      textalign: "center",
      family: FontFamily.roboto,
    },

    iconContainer: {
      display: "flex",
      width: "100%",
      height: "30px",
    },

    icon: {
      width: "30px",
      height: "100%",
      backgroundColor: "transparent",
      margin: "left:3px;right:3px",
      padding: "all:3px",
    },

    priceContainer: {
      flex: "1",
      height: "100%",
    },

    price: {
      size: "1rem",
      textalign: "center",
      family: FontFamily.roboto,
    },

    /*mobile screen */
    cardMobile: {
      width: "120px",
      margin: "all:5px",
    },

    imgContainerMobile: {
      height: "150px",
    },

    headerTextMobile: {
      size: "1rem",
    },

    iconContainerMobile: {
      height: "25px",
    },

    iconMobile: {
      width: "25px",
      height: "100%",
    },

    priceMobile: {
      size: "0.8rem",
    },
  };

  if (screen === ScreenSize.Mobile) {
    allStyles.card = { ...allStyles.card, ...allStyles.cardMobile };
    allStyles.imgContainer = {
      ...allStyles.imgContainer,
      ...allStyles.imgContainerMobile,
    };
    allStyles.headerText = {
      ...allStyles.headerText,
      ...allStyles.headerTextMobile,
    };
    allStyles.iconContainer = {
      ...allStyles.iconContainer,
      ...allStyles.iconContainerMobile,
    };
    allStyles.icon = { ...allStyles.icon, ...allStyles.iconMobile };
    allStyles.price = { ...allStyles.price, ...allStyles.priceMobile };
  }

  return (
    <>
      <a href="#">
        <Container {...allStyles.card}>
          <Container {...allStyles.imgContainer}>
            <img width="100%" height="100%" src={imgPath}></img>
          </Container>
          <Container {...allStyles.headerContainer}>
            <Text {...allStyles.headerText}>{productName}</Text>
          </Container>
          <Container {...allStyles.iconContainer}>
            <Button {...allStyles.icon}>
              <img
                width="100%"
                height="100%"
                src="http://localhost:3000/img/cart.png"
              ></img>
            </Button>
            <Container {...allStyles.priceContainer}>
              <Text {...allStyles.price}>{price}</Text>
            </Container>
            <Button {...allStyles.icon}>
              <img
                width="100%"
                height="100%"
                src="http://localhost:3000/img/heart.png"
              ></img>
            </Button>
          </Container>
        </Container>
      </a>
    </>
  );
}

export default ProductCard;
