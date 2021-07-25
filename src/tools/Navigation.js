import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { HorBox } from "../components/sizedBox";
import { Link } from "../components/link";
import { Button } from "../components/Button";
import { Container } from "../components/container";
import MediaQuery from "../tools/MediaQuery";
import { Text } from "../components/text";
import { FontFamily, ScreenSize } from "../global/enum";
import { Input } from "../components/dropdown";

import axios from "axios";
import { getUser } from "../global/api";

const baseAPIURL = "http://localnep.com/api/";

function Navigation() {
  let history = useHistory();
  let user = getUser();
  let screen = MediaQuery();
  const [toggle, setToggle] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  async function logout() {
    await axios
      .post(baseAPIURL + "logout", null, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
      .then((response) => {
        console.warn("logout", response);
        sessionStorage.clear();
        history.push("/login");

        window.location.reload();
      });
  }

  const allStyle = {
    /*default style which are based mostly for large screen */
    navbar: {
      width: "100%",
      height: "60px",
      backgroundColor: "grey",
      zindex: "1",
      position: "fixed",
      display: "flex",
    },

    hamBurger: {
      width: "50px",
      height: "100%",
      backgroundColor: "transparent",
      padding: "all:5px",
      float: "left",
      margin: "right:5px",
      onClick: () => {
        !toggle ? setToggle(true) : setToggle(false);
      },
    },

    logo: {
      width: "100%",
      height: "100%",
      route: "/",
      transition: "width: 1s",
    },

    logoText: {
      family: FontFamily.cursive,
      size: "1.2rem",
      textColor: "green",
      bold: "bold",
    },

    searchButton: {
      width: "40px",
      height: "40px",
      backgroundColor: "darkgrey",
      borderradius: "all:5px",
      margin: "top:10px;right:5px",
    },

    input: {
      width: "0px",
      height: "40px",
      borderradius: "top:5px;left:5px",
      placeholder: "e.g. Dhaka",
      margin: "top:10px:bottom:10px;",
      transition: "width 0.3s",
    },

    navbarLink: {
      height: "100%",
      padding: "all:5px",
      margin: "right:5px",
    },

    menuLink: {
      display: "block",
      width: "100%",
      height: "55px",
      backgroundColor: "grey",
      margin: "top:2px",
    },

    searchButtonOn: {
      width: "30px",
      borderradius: "bottom:5px;right:5px",
    },

    /*mobile screens */
    hamBurgerMobileOn: {
      width: "45px",
      margin: "all:0px",
    },

    inputMobileOn: {
      width: "90px",
      padding: "left:10px",
    },

    logoMobilOn: {
      display: "none",
      padding: "all:0px",
    },

    navbarLinkMobileOn: {
      padding: "all:2px",
      margin: "right:3px",
    },

    searchButtonMobileOn: {
      margin: "top:10px;right:5px",
    },

    /*tablet screens*/
    inputTabletOn: {
      width: "120px",
      padding: "left: 10px",
    },

    logoTextTablet: {
      size: "1.5rem",
    },

    hamBurgerTabletOn: {
      width: "45px",
      margin: "all:0px",
    },

    /*larger screens */
    inputLargeOn: {
      width: "250px",
      padding: "left: 10px",
    },

    logoTextLarge: {
      size: "2rem",
    },

    /*button hover states */
    iconButtonHover: {
      backgroundColor: "lightgrey",
    },

    linkButtonHover: {
      backgroundColor: "lightgrey",
      color: "green",
      transition: "backgroundColor: 1s",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      height: "55px",
      marginTop: "2px",
    },
  };

  allStyle.menuLink["hoverStyle"] = allStyle.linkButtonHover;
  allStyle.searchButton["hoverStyle"] = allStyle.iconButtonHover;
  allStyle.hamBurger["hoverStyle"] = allStyle.iconButtonHover;
  allStyle.navbarLink["hoverStyle"] = allStyle.linkButtonHover;

  if (toggleSearch) {
    allStyle.searchButton = {
      ...allStyle.searchButton,
      ...allStyle.searchButtonOn,
    };
  }

  if (screen === ScreenSize.Mobile) {
    if (toggleSearch) {
      allStyle.hamBurger = {
        ...allStyle.hamBurger,
        ...allStyle.hamBurgerMobileOn,
      };
      allStyle.input = { ...allStyle.input, ...allStyle.inputMobileOn };
      allStyle.logo = { ...allStyle.logo, ...allStyle.logoMobilOn };
      allStyle.navbarLink = {
        ...allStyle.navbarLink,
        ...allStyle.navbarLinkMobileOn,
      };
      allStyle.searchButton = {
        ...allStyle.searchButton,
        ...allStyle.searchButtonMobileOn,
      };
    }
  } else if (screen === ScreenSize.Tablet) {
    //css for tablet size
    if (toggleSearch) {
      allStyle.input = { ...allStyle.input, ...allStyle.inputTabletOn };
      allStyle.hamBurger = {
        ...allStyle.hamBurger,
        ...allStyle.hamBurgerTabletOn,
      };
    } else {
      allStyle.logoText = { ...allStyle.logoText, ...allStyle.logoTextTablet };
    }
  } else {
    //rest of the sceen size css
    if (toggleSearch) {
      allStyle.input = { ...allStyle.input, ...allStyle.inputLargeOn };
    }
    allStyle.logoText = { ...allStyle.logoText, ...allStyle.logoTextLarge };
  }

  return (
    <div>
      {/* navbar */}
      <Container {...allStyle.navbar}>
        <Button {...allStyle.hamBurger}>
          <img
            alt=""
            width="20px"
            height="20px"
            src={
              toggle
                ? "http://localhost:3000/img/close.png"
                : "http://localhost:3000/img/menu.png"
            }
          ></img>
        </Button>

        <Container flex="1" display="flex" justifyContent="center">
          <Link {...allStyle.logo}>
            <Text {...allStyle.logoText}>Nepali Phosak</Text>
          </Link>
        </Container>

        <Input {...allStyle.input}></Input>
        <Button
          {...allStyle.searchButton}
          onClick={() => {
            !toggleSearch ? setToggleSearch(true) : setToggleSearch(false);
          }}
        >
          <img
            alt=""
            width="20px"
            height="20px"
            src="http://localhost:3000/img/search.png"
          ></img>
        </Button>

        {!sessionStorage.getItem("userSession") ? (
          <>
            <Link {...allStyle.navbarLink} route="/signup">
              Sign up
            </Link>

            <Link {...allStyle.navbarLink} route="/login">
              Login
            </Link>
          </>
        ) : (
          <>
            <Link
              height="100%"
              padding="all:10px"
              onClick={() => {
                logout();
              }}
              margin="right:2px"
              hoverStyle={allStyle.linkButtonHover}
            >
              Logout
            </Link>
          </>
        )}
      </Container>

      {/* sidebar */}
      <Container
        position="fixed"
        width={toggle ? "300px" : "0px"}
        backgroundColor="grey"
        transition="width 0.4s"
        height="100%"
        zindex="1"
        margin="top:60px"
      >
        <Container height="150px"></Container>
        {sessionStorage.getItem("userSession") &&
        JSON.parse(sessionStorage.getItem("userSession")).data.role ===
          "admin" ? (
          <>
            <Link {...allStyle.menuLink} route="/admin/product">
              Product
            </Link>
            <Link {...allStyle.menuLink} route="/admin/product/add">
              Add Product
            </Link>
          </>
        ) : (
          <></>
        )}
        <Link {...allStyle.menuLink} route="/wishlist">
          Wishlist
        </Link>
        <Link {...allStyle.menuLink} route="/cart">
          Cart
        </Link>
        <Link {...allStyle.menuLink} route="/about">
          About Us
        </Link>
        <Link {...allStyle.menuLink} route="/contact">
          Contact Us
        </Link>
      </Container>

      <HorBox height="60px"></HorBox>
    </div>
  );
}

export default Navigation;
