import React, { useState, useEffect } from "react";
import { Text } from "../components/text";
import { Button } from "../components/Button";
import { SessionStatus } from "../global/enum";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Icon({
  id,
  color = "pink",
  hoverColor = "green",
  selectedColor = "red",
  icon = "",
  size = "",
  session = "",
  display = "block",
  width = "50px",
  height = "50px",
  border = "none",
  borderradius = "",
  margin = "all:0px",
}) {
  const [iconSelect, setIconSelect] = useState(false);

  const allStyles = {
    iconButton: {
      width: width,
      height: height,
      backgroundColor: "transparent",
      margin: margin,
      display: display,
      color: iconSelect ? selectedColor : color,
      border: border,
      borderradius: borderradius,
    },

    icon: {
      textColor: "inherit",
      size: size,
      textalign: "center",
    },

    iconButtonHover: {
      color: hoverColor,
    },

    iconMobile: {
      size: "1rem",
    },
  };

  allStyles.iconButton["hoverStyle"] = allStyles.iconButtonHover;

  useEffect(() => {
    toast.configure();
    updateState();
  });

  function updateState() {
    if (checkInSession() === SessionStatus.Exists) {
      setIconSelect(true);
    } else {
      setIconSelect(false);
    }
  }

  function checkInSession() {
    if (sessionStorage.getItem(session)) {
      let present = false;
      let temp = JSON.parse(sessionStorage.getItem(session));
      temp.forEach((element) => {
        if (element === id) {
          present = true;
          return;
        }
      });
      if (present) {
        return SessionStatus.Exists;
      } else {
        return SessionStatus.NonExistential;
      }
    }
    return SessionStatus.NoSession;
  }

  function addToSession() {
    if (sessionStorage.getItem("userSession")) {
      // if user is logged in
    } else {
      //if user is guest
      let status = checkInSession();

      if (status === SessionStatus.NoSession) {
        let cart = [];
        cart.push(id);
        sessionStorage.setItem(session, JSON.stringify(cart));
        toast.success("Added Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      } else if (status === SessionStatus.NonExistential) {
        let temp = JSON.parse(sessionStorage.getItem(session));
        temp.push(id);
        sessionStorage.setItem(session, JSON.stringify(temp));
        toast.success("Added Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      } else {
        let temp = JSON.parse(sessionStorage.getItem(session));
        temp.splice(temp.indexOf(id), 1);
        sessionStorage.setItem(session, JSON.stringify(temp));
        toast.error("Removed Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }

      console.warn(session, JSON.parse(sessionStorage.getItem(session)));
      updateState();
    }
  }

  return (
    <>
      <Button
        {...allStyles.iconButton}
        color={iconSelect ? "red" : "black"}
        onClick={() => {
          addToSession();
        }}
      >
        <Text {...allStyles.icon}>
          <i width="100%" height="100%" className={icon}></i>
        </Text>
      </Button>
    </>
  );
}

export default Icon;
