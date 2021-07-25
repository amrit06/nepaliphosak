import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Container } from "../../components/container";
import MediaQuery from "../../tools/MediaQuery";
import { FontFamily, ScreenSize } from "../../global/enum";
import { HorBox } from "../../components/sizedBox";
import { Input } from "../../components/dropdown";
import { Text } from "../../components/text";
import { Button } from "../../components/Button";

const baseAPIURL = "http://localnep.com/api/";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  let screen = MediaQuery();

  function singup() {
    let user = { name, email, password };

    axios.post(baseAPIURL + "register", user).then((response) => {
      let result = response.data;
      console.warn("signup", result);
      if (result.success) {
        history.push("/login");
      }
    });
  }

  const allStyle = {
    /*default css.it is based for mobile */
    container: {
      height: "450px",
      width: "280px",
      margin: "0 auto",
      backgroundColor: "whitesmoke",
      webkitboxshadow: "7px 7px 10px -5px #000000",
      boxshadow: "7px 7px 10px -5px #000000",
    },

    top: {
      height: "0px",
    },

    topText: {
      textColor: "darkblue",
      bold: "bold",
      size: "3rem",
      textalign: "center",
      family: FontFamily.roboto,
    },

    imgContainer: {
      width: "100%",
      height: "100%",
      display: "none",
    },

    bottom: {
      height: "100%",
      width: "100%",
      padding: "all:10px",
    },

    /*css focused for tablets */
    containerTablet: {
      width: "380px",
      padding: "left: 20px;right:20px",
    },

    /*css focused for large screens */
    containerLarge: {
      width: "700px",
      display: "flex",
    },

    topLarge: {
      flex: "5",
      height: "100%",
    },

    bottomLarge: {
      flex: "4",
      padding: "top:20px;right:20px;left:20px:bottom:20x",
    },

    imgContainerLarge: {
      display: "block",
    },
  };

  if (screen !== ScreenSize.Mobile && screen !== ScreenSize.Tablet) {
    allStyle.container = { ...allStyle.container, ...allStyle.containerLarge };
    allStyle.top = { ...allStyle.top, ...allStyle.topLarge };
    allStyle.bottom = { ...allStyle.bottom, ...allStyle.bottomLarge };
    allStyle.imgContainer = {
      ...allStyle.imgContainer,
      ...allStyle.imgContainerLarge,
    };
  } else if (screen === ScreenSize.Tablet) {
    allStyle.container = { ...allStyle.container, ...allStyle.containerTablet };
  }

  return (
    <>
      <HorBox height="80px" />
      <Container {...allStyle.container}>
        <Container {...allStyle.top}>
          <Container {...allStyle.imgContainer}>
            <img
              alt=""
              width="100%"
              height="100%"
              src="http://localhost:3000/img/dhakatopi.jpg"
            />
          </Container>
        </Container>

        <Container {...allStyle.bottom}>
          <Text {...allStyle.topText}>Sign up</Text>
          <HorBox height="10px"></HorBox>
          <Text textColor="grey" size="0.9rem">
            Name
          </Text>
          <Input
            padding="left:20px"
            borderradius="all:5px"
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            defaultValue={name}
            placeholder="E.g. John"
          />
          <HorBox height="10px"></HorBox>
          <Text textColor="grey" size="0.9rem">
            Email
          </Text>
          <Input
            padding="left:20px"
            borderradius="all:5px"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            defaultValue={email}
            placeholder="E.g. John@example.com"
          />
          <HorBox height="10px"></HorBox>
          <Text textColor="grey" size="0.9rem">
            Password
          </Text>
          <Input
            padding="left:20px"
            borderradius="all:5px"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            defaultValue={password}
            placeholder="E.g. Password"
          />

          <Button
            margin="top: 50px"
            borderradius="all:5px;"
            width="100%"
            onClick={() => {
              singup();
            }}
          >
            <Text
              textColor="white"
              bold="bold"
              size="1.5rem"
              textalign="center"
            >
              Register
            </Text>
          </Button>
        </Container>
      </Container>
    </>
  );
}

export default Signup;
