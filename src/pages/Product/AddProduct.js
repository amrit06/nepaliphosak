import axios from "axios";
import React, { useState } from "react";
import { Container } from "../../components/container";

import { DropDown } from "../../components/dropdown";
import { getUser } from "../../global/api";
import { getCategory, getGenders, getSizes } from "../../global/generic";
import { HorBox } from "../../components/sizedBox";

const baseAPIURL = "http://localnep.com/api/";

function AddProduct() {
  let clothSize = getSizes();
  let genderCat = getGenders();
  let clothCategory = getCategory();
  const user = getUser();
  const [img, setImg] = useState("");
  const initialState = {
    name: "",
    description: "",
    price: "",
    stocks: "",
    size: clothSize[0].value,
    gender: genderCat[0].value,
    category: clothCategory[0].value,
  };
  const [
    { name, description, price, stocks, size, gender, category },
    setState,
  ] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  async function addProduct() {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stocks", stocks);
    formData.append("size", size);
    formData.append("gender", gender);
    formData.append("category", category);
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
    <>
      <HorBox height="50px" />
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
          <HorBox height="40px" />
          <input
            onChange={onChange}
            type="text"
            name="description"
            value={description}
            className="form-control"
            placeholder="E.g. detail about product"
          />
          <HorBox height="40px" />
          <input
            onChange={onChange}
            type="text"
            name="price"
            value={price}
            className="form-control"
            placeholder="E.g. 45.50"
          />
          <HorBox height="40px" />
          <input
            onChange={onChange}
            type="text"
            name="stocks"
            value={stocks}
            className="form-control"
            placeholder="E.g. 45 units"
          />
          <HorBox height="40px" />
          <Container width="100%" display="flex" justifyContent="center">
            <DropDown
              title="Select Size: "
              type="size"
              options={clothSize}
              optionsvaluepair={true} // if options is aray of obj
              onChange={onChange}
              selectedValue={size}
            />
          </Container>
          <HorBox height="40px" />
          <Container width="100%" display="flex" justifyContent="center">
            <DropDown
              title="Select Gender: "
              type="gender"
              options={genderCat}
              optionsvaluepair={true} // if options is aray of obj
              onChange={onChange}
              selectedValue={gender}
            />
          </Container>
          <HorBox height="40px" />
          <Container width="100%" display="flex" justifyContent="center">
            <DropDown
              title="Select Category: "
              type="category"
              options={clothCategory}
              optionsvaluepair={true} // if options is aray of obj
              onChange={onChange}
              selectedValue={category}
            />
          </Container>

          <HorBox height="40px" />
          <input
            onChange={(e) => setImg(e.target.files[0])}
            key={"apple"}
            type="file"
            name="img"
            className="form-control-file"
          />
          <HorBox height="40px" />
          <button
            type="submit"
            onClick={addProduct}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
