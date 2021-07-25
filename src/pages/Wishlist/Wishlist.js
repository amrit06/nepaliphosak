import React, { useEffect, useState } from "react";
import { Container } from "../../components/container";
import { getProduct } from "../../global/api";
import { HorBox } from "../../components/sizedBox";
import { api } from "../../global/api";
import { Table } from "react-bootstrap";
import { Button } from "../../components/Button";
import { Text } from "../../components/text";
import { ScreenSize } from "../../global/enum";
import MediaQuery from "../../tools/MediaQuery";

function Wishlist() {
  const screen = MediaQuery();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getWishlist();
    return () => {
      setProductList([]); // clear state with empty
    };
  }, []);

  function getWishlist() {
    let items = JSON.parse(sessionStorage.getItem("wishlistSession"));
    items.forEach((element) => {
      api({ url: "product/" + element, method: "GET" }).then((elemenent) => {
        setProductList((productList) => [...productList, elemenent.data]);
      });
    });
  }

  if (!sessionStorage.getItem("wishlistSession")) {
    return (
      <>
        <h1>No Data!!!</h1>
      </>
    );
  }

  const allStyles = {
    container: {},

    button: {
      margin: "all:5px",
      borderradius: "all:5px",
      width: "120px",
      color: "white",
    },

    heading: {
      textAlign: "center",
      height: "50px",
      lineHeight: "50px",
      fontSize: "1rem",
      bold: "bold",
      color: "purple",
    },

    text: {
      textAlign: "center",
      height: "150px",
      lineHeight: "150px",
      fontSize: "1.2rem",
    },

    //table
    containerTablet: {
      display: "none",
    },
  };

  if (screen === ScreenSize.Tablet) {
    allStyles.container = {
      ...allStyles.container,
      ...allStyles.containerTablet,
    };
  }

  return (
    <>
      <Container {...allStyles.container}>
        <div className=" col-sm-10 offset-sm-1">
          <div className="row justify-content-center">
            <Table striped hover variant>
              <thead>
                <tr>
                  <th></th>
                  <th style={allStyles.heading}>Name</th>
                  <th style={allStyles.heading}>Price</th>
                  <th style={allStyles.heading}>Stock Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {productList.map((e) => (
                  <tr>
                    <td>
                      <img width="100" alt="" height="150" src={e.imgPath} />
                    </td>
                    <td style={allStyles.text}>{e.name}</td>
                    <td style={allStyles.text}> $ {e.price.toFixed(2)}</td>
                    <td style={allStyles.text}>
                      <Text
                        size="inherit"
                        textColor={e.stocks >= 1 ? "green" : "red"}
                      >
                        {e.stocks >= 1 ? "*In Stocks" : "*Out of Stocks"}
                      </Text>
                    </td>
                    <td>
                      <Button {...allStyles.button} backgroundColor="red">
                        Remove
                      </Button>
                      <Button {...allStyles.button} backgroundColor="green">
                        Add To Cart
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
      <Container>
        <Container>img</Container>
        <Container>price & other info</Container>
      </Container>
    </>
  );
}

export default Wishlist;
