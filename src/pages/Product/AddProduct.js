import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DropDown } from "../../components/dropdown";
import { getUser } from "../../global/api";
import { getSizes } from "../../global/generic";

const baseURL = "http://localnep.com/";
const baseAPIURL = "http://localnep.com/api/";

function AddProduct() {
  let clothSize = getSizes();
  const user = getUser();
  const [img, setImg] = useState("");
  const initialState = {
    name: "",
    description: "",
    price: "",
    stocks: "",
    size: clothSize[0].value,
  };
  const [{ name, description, price, stocks, size }, setState] =
    useState(initialState);
  const history = useHistory();

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setImg("");
    setState({ ...initialState });
  };

  async function addProduct() {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stocks", stocks);
    formData.append("size", size);
    formData.append("img", img);

    console.warn("form data", JSON.stringify(Object.fromEntries(formData)));

    await axios
      .post(baseAPIURL + "product/add", formData, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
      .then((response) => {
        let result = response.data;
        console.warn("add product", result);
        if (result.success) {
          /* clearState(); */ // doens't empty img input file
          window.location.reload();
        }
      });
  }

  return (
    <div>
      <div className=" col-sm-6 offset-sm-3">
        <div className="row justify-content-center">
          <h1>Add Product Page</h1>

          <input
            onChange={onChange}
            type="text"
            value={name}
            name="name"
            className="form-control"
            placeholder="E.g. Gucci Jacket"
          />
          <br />
          <br />
          <br />
          <input
            onChange={onChange}
            type="text"
            name="description"
            value={description}
            className="form-control"
            placeholder="E.g. detail about product"
          />
          <br />
          <br />
          <br />
          <input
            onChange={onChange}
            type="text"
            name="price"
            value={price}
            className="form-control"
            placeholder="E.g. 45.50"
          />
          <br />
          <br />
          <br />
          <input
            onChange={onChange}
            type="text"
            name="stocks"
            value={stocks}
            className="form-control"
            placeholder="E.g. 45 units"
          />
          <br />
          <br />
          <br />

          <DropDown
            title="Select Size:"
            type="size"
            options={clothSize}
            optionsvaluepair={true} // if options is aray of obj
            onChange={onChange}
            selectedValue={size}
          />
          <br />
          <br />
          <br />
          <input
            onChange={(e) => setImg(e.target.files[0])}
            key={"apple"}
            type="file"
            name="img"
            className="form-control-file"
          />
          <br />
          <br />
          <br />

          <button
            type="submit"
            onClick={addProduct}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
