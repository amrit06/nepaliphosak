import React from "react";
import { Container } from "../components/container";
import { Text } from "../components/text";
import { FontFamily, ScreenSize } from "../global/enum";
import MediaQuery from "./MediaQuery";
import "react-toastify/dist/ReactToastify.css";
import Icon from "./Icon";

function ProductCard({
  id = "",
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
      height: "30px",
      size: "1.5rem",
      color: "black",
      selectedColor: "red",
      margin: "left:5px;right:5px",
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
      size: "0.8rem",
    },

    iconContainerMobile: {
      height: "25px",
    },

    priceMobile: {
      size: "0.8rem",
    },

    iconMobile: {
      margin: "all:0px",
      size: "1rem",
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
      <Container {...allStyles.card}>
        <Container {...allStyles.imgContainer}>
          <a href={"/product/" + id}>
            <img width="100%" alt="" height="100%" src={imgPath}></img>
          </a>
        </Container>
        <Container {...allStyles.headerContainer}>
          <Text {...allStyles.headerText}>{productName}</Text>
        </Container>
        <Container {...allStyles.iconContainer}>
          <Icon
            {...allStyles.icon}
            id={id}
            icon="fas fa-shopping-cart"
            session="cartSession"
          />

          <Container {...allStyles.priceContainer}>
            <Text {...allStyles.price}>{price}</Text>
          </Container>

          <Icon
            id={id}
            icon="fas fa-heart"
            session="wishlistSession"
            {...allStyles.icon}
          />
        </Container>
      </Container>
    </>
  );
}

export default ProductCard;
