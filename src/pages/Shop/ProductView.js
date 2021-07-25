import React, { useEffect, useState } from "react";
import { Container } from "../../components/container";
import { HorBox } from "../../components/sizedBox";
import axios from "axios";
import { Button } from "../../components/Button";
import { Text } from "../../components/text";
import { FontFamily } from "../../global/enum";
import Icon from "../../tools/Icon";


const baseAPIURL = "http://localnep.com/api/";

function ProductView(props) {
  const [product, setProduct] = useState();

  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    console.warn("get Product", props.match.params.id);
    axios
      .get(baseAPIURL + "product/" + props.match.params.id)
      .then((response) => {
        let data = response.data.data;
        console.warn("getPro", data);
        setProduct(data);
      });
  }

  const allStyle = {
    container: {
      width: "1000px",
      height: "700px",

      margin: "0 auto",
      display: "flex",
    },

    imgContainer: {
      width: "500px",
      height: "100%",
    },

    infoContainer: {
      flex: "1",
      height: "100%",
      padding: "all:10px",
    },

    title: {
      size: "1.8rem",
      bold: "700",
    },

    heading: {
      size: "4rem",
      bold: "bold",
      family: FontFamily.sansNarrow,
    },

    info: {
      size: "1.2rem",
      family: FontFamily.roboto,
    },

    actionContainer: {
      backgroundColor: "",
      width: "100%",
      height: "100%",
    },

    buyButton: {
      width: "250px",
      height: "60px",
      color: "white",
      display: "inline-block",
    },

    buyButtonHover: {
      backgroundColor: "darkgreen",
      color: "darkgrey",
    },
  };

  allStyle.buyButton["hoverStyle"] = allStyle.buyButtonHover;

  if (!product) {
    return (
      <>
        <h1>Loading ...</h1>
      </>
    );
  }

  return (
    <>
      <HorBox height="100px"></HorBox>
      <Container {...allStyle.container}>
        <Container {...allStyle.imgContainer}>
          <img width="100%" alt="" height="100%" src={product.imgPath} />
        </Container>

        <Container {...allStyle.infoContainer}>
          <Text {...allStyle.heading}>{product.name}</Text>
          <HorBox height="20px" />
          <Text {...allStyle.title}>Description</Text>
          <Text {...allStyle.info}>{product.description}</Text>
          <HorBox height="40px" />
          <Text {...allStyle.title}>Available Sizes</Text>
          <Button
            width="150px"
            height="60px"
            backgroundColor="lightblue"
            border="3px solid black"
          >
            <Text {...allStyle.info} textalign="center">
              {product.size}
            </Text>
          </Button>
          <HorBox height="40px" />
          <Text {...allStyle.title}>Units Available</Text>
          <Text {...allStyle.info}>{product.stocks + " Units Left"}</Text>
          <HorBox height="40px" />
          <Text {...allStyle.title}>Price</Text>
          <Text {...allStyle.info}> {"$ " + product.price.toFixed(2)}</Text>
          <HorBox height="40px" />
          <Container {...allStyle.actionContainer}>
            <Button {...allStyle.buyButton}>
              <Text
                bold="bold"
                textalign="center"
                textColor="inherit"
                size="2rem"
              >
                Buy
              </Text>
            </Button>
            <Icon
              id={ parseInt(props.match.params.id) }
              color="black"
              icon="fas fa-shopping-cart"
              size="2rem"
              session="cartSession"
              display="inline-block"
            />

            <Icon
              id={ parseInt(props.match.params.id) }
              color="black"
              icon="fas fa-heart"
              size="2rem"
              session="wishlistSession"
              display="inline-block"
            />
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default ProductView;
