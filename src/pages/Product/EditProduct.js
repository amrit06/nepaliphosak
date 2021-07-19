import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DropDown } from "../../components/dropdown";
import { getUser } from "../../global/api";
import { getSizes } from "../../global/generic";

const baseURL = "http://localnep.com/";
const baseAPIURL = "http://localnep.com/api/";

function EditProduct(props) {
  const user = getUser();
  const history = useHistory();
  const [product, setProduct] = useState({});
  const [img, setImg] = useState("");

  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    console.warn("get Product", props.match.params.id);
    axios
      .get(baseAPIURL + "product/" + props.match.params.id, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
      .then((response) => {
        let data = response.data.data;
        console.warn("getPro", data);
        setProduct(data);
      });
  }

  async function updateProduct() {
    let data = sessionStorage.getItem("userSession");

    if (data) {
      data = JSON.parse(data).data;
      console.warn("change", data.token);
    }

    let formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("stocks", product.stocks);
    formData.append("size", product.size);
    formData.append("img", img);

    console.warn("form data", JSON.stringify(Object.fromEntries(formData)));

    await axios
      .post(baseAPIURL + "product/" + product.id, formData, {
        headers: {
          Authorization: "Bearer " + data.token,
        },
      })
      .then((response) => {
        let result = response.data;
        console.warn("update product", result);
        if (result.success) {
          history.push("/product");
        }
      });
  }

  return (
    <div>
      <div className=" col-sm-6 offset-sm-3">
        <div className="row justify-content-center">
          <h1>Edit Product Page</h1>

          <input
            onChange={(e) => {
              product.name = e.target.value;
            }}
            type="text"
            defaultValue={product.name}
            name="name"
            className="form-control"
            placeholder="E.g. Gucci Jacket"
          />
          <br />
          <br />
          <br />
          <input
            onChange={(e) => {
              product.description = e.target.value;
            }}
            type="text"
            name="description"
            defaultValue={product.description}
            className="form-control"
            placeholder="E.g. detail about product"
          />
          <br />
          <br />
          <br />
          <input
            onChange={(e) => {
              product.price = e.target.value;
            }}
            type="text"
            name="price"
            defaultValue={product.price}
            className="form-control"
            placeholder="E.g. 45.50"
          />
          <br />
          <br />
          <br />
          <input
            onChange={(e) => {
              product.stocks = e.target.value;
            }}
            type="text"
            name="stocks"
            defaultValue={product.stocks}
            className="form-control"
            placeholder="E.g. 45 units"
          />
          <br />
          <br />
          <br />
          <DropDown
            title="Choose size"
            type="size"
            options={getSizes()}
            optionsvaluepair={true}
            selectedValue={product.size}
            onChange={(e) => {
              product.size = e.target.value;
            }}
          />
          <br />
          <br />
          <br />
          <img width="100" height="150" src={baseURL + product.imgPath} />
          <br />
          <br />
          <input
            onChange={(e) => setImg(e.target.files[0])}
            type="file"
            name="img"
            className="form-control-file"
          />
          <br />
          <br />
          <br />

          <button
            type="submit"
            onClick={updateProduct}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
