import React, { useEffect, useState } from "react";
import { Container } from "../../components/container";
import ProductCard from "../../tools/ProductCard";
import axios from "axios";

const baseAPIURL = "http://localnep.com/api/";

function Men() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios
      .get(baseAPIURL + "product", {
        params: {
          gender: "male",
        },
      })
      .then((response) => {
        let result = response.data.data; // beacuse it is array else just get .data
        setProductList(result);
      });
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
      {productList.map((element) => (
        <>
          <ProductCard
            id={element.id}
            productName={element.name}
            price={element.price}
            imgPath={element.imgPath}
          />
        </>
      ))}
    </Container>
  );
}

export default Men;
