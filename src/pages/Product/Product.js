import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUser } from "../../global/api";

const baseURL = "http://localnep.com/";
const baseAPIURL = "http://localnep.com/api/";

function Product() {
  let user = getUser();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    console.warn("getp", user);
    axios
      .get(baseAPIURL + "product", {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
      .then((response) => {
        let result = response.data.data; // beacuse it is array else just get .data
        setProductList(result);
      });
  }

  function deleteProduct(id) {
    axios
      .delete(baseAPIURL + "product/" + id, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
      .then((response) => {
        let result = response.data;
        console.warn("logout", result);
        getProducts();
      });
  }

  return (
    <div>
      <div className=" col-sm-6 offset-sm-3">
        <div className="row justify-content-center">
          <h1>Product Page</h1>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stocks</th>
                <th>Size</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((e) => (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.description}</td>
                  <td>{e.price}</td>
                  <td>{e.stocks}</td>
                  <td>{e.size}</td>
                  <td>
                    <img
                      width="100"
                      alt=""
                      height="150"
                      src={baseURL + e.imgPath}
                    />
                  </td>
                  <td>
                    <Link to={"/admin/product/edit/" + e.id}>
                      <Button>Edit</Button>
                    </Link>
                    <br />
                    <br />
                    <Button
                      onClick={() => {
                        deleteProduct(e.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Product;
