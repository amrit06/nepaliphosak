import axios from "axios";
import { Button } from "../../components/Button";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Container } from "../../components/container";
import { Text } from "../../components/text";
import { FontFamily } from "../../global/enum";
import { Input } from "../../components/dropdown";
import MediaQuery from "../../tools/MediaQuery";
import { ScreenSize } from "../../global/enum";
import { HorBox } from "../../components/sizedBox";

const baseURL = "http://localnep.com/";
const baseAPIURL = "http://localnep.com/api/";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  let screen = MediaQuery();

  function login() {
    let data = { email, password };
    //didn't need default.credential and /sanctum why??
    axios.post(baseAPIURL + "login", data).then((response) => {
      let result = response.data;
      console.warn("login", result);

      if (result.success) {
        sessionStorage.setItem("userSession", JSON.stringify(response));
        history.push("/");
        window.location.reload();
      }
    });
  }

  const allStyle = {
    /*default css it is set based on mobile screen*/
    container: {
      height: "400px",
      width: "280px",
      margin: "0 auto",
      backgroundColor: "whitesmoke",
      webkitboxshadow: "7px 7px 10px -5px #000000",
      boxshadow: "7px 7px 10px -5px #000000",
    },

    top: {
      backgroundColor:
        "linear-gradient(2150deg, rgba(255,255,255,1) 23%, rgba(91,87,87,1) 100%)",
      height: "0px",
      overflow: "all:hidden",
    },

    topText: {
      textColor: "black",
      bold: "bold",
      size: "3rem",
      textalign: "center",
      family: FontFamily.roboto,
    },

    topText2: {
      textColor: "black",
      bold: "bold",
      size: "3rem",
      textalign: "center",
      family: FontFamily.roboto,
      display: "none",
    },

    imgContainer: {
      width: "100%",
      height: "100%",
      padding: "left:40px;right:40px",
      margin: "left: 20px",
      display: "none",
    },

    bottom: {
      height: "100%",
      width: "100%",
      padding: "all:10px",
    },

    /*css for tablets */
    containerTablet: {
      width: "380px",
    },

    bottomTablet: {
      width: "80%",
      margin: "0 auto",
    },

    /*css for large screen */

    topTextLarge: {
      display: "block",
    },

    topText2Large: {
      display: "block",
    },

    containerLarge: {
      width: "700px",
      display: "flex",
    },

    topLarge: {
      backgroundColor:
        "linear-gradient(50deg, rgba(255,255,255,1) 23%, rgba(91,87,87,1) 100%)",
      flex: "5",
      height: "100%",
    },

    bottomLarge: {
      flex: "4",
      padding: "top:10px;right:20px;left:20px:bottom:20x",
    },

    imgContainerLarge: {
      display: "block",
    },
  };

  if (screen !== ScreenSize.Mobile && screen !== ScreenSize.Tablet) {
    allStyle.container = { ...allStyle.container, ...allStyle.containerLarge };
    allStyle.top = { ...allStyle.top, ...allStyle.topLarge };
    allStyle.bottom = { ...allStyle.bottom, ...allStyle.bottomLarge };
    allStyle.topText = { ...allStyle.topText, ...allStyle.topTextLarge };
    allStyle.topText2 = { ...allStyle.topText2, ...allStyle.topText2Large };
    allStyle.imgContainer = {
      ...allStyle.imgContainer,
      ...allStyle.imgContainerLarge,
    };
  } else if (screen === ScreenSize.Tablet) {
    allStyle.container = { ...allStyle.container, ...allStyle.containerTablet };
    allStyle.bottom = { ...allStyle.bottom, ...allStyle.bottomTablet };
  }

  return (
    <>
      <HorBox height="80px" />
      <Container {...allStyle.container}>
        <Container {...allStyle.top}>
          <Text {...allStyle.topText2}>Namaste</Text>
          <Container {...allStyle.imgContainer}>
            <img
              width="100%"
              height="100%"
              src="http://localhost:3000/img/dressnobackground.png"
            />
          </Container>
        </Container>

        <Container {...allStyle.bottom}>
          <Text {...allStyle.topText}>Login</Text>
          <HorBox height="20px"></HorBox>
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
            onClick={login}
          >
            <Text
              textColor="white"
              bold="bold"
              size="1.5rem"
              textalign="center"
            >
              Login
            </Text>
          </Button>
        </Container>
      </Container>
    </>
  );
}

export default Login;
