import React from "react";
import { Container } from "../../components/container";
import { Text } from "../../components/text";
import { Button } from "../../components/Button";
import { FontFamily } from "../../global/enum";
import ProductCard from "../../tools/ProductCard";

function Men() {
  const productArray = [];
  for (let index = 0; index < 25; index++) {
    productArray.push({ name: "some", price: "$$$" });
  }

  const allStyles = {
    container: {
      width: "100%",
      display: "inline-block",
      textalign: "center",
    },
  };

  return (
    <Container {...allStyles.container}>
      {productArray.map((element) => (
        <>
          <ProductCard
            productName={element.name}
            price={element.price}
            imgPath="http://localhost:3000/img/dhakatopi.jpg"
          />
        </>
      ))}
    </Container>
  );
}

export default Men;
