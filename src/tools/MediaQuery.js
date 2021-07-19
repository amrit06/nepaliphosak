import React, { useState, useEffect } from "react";
import { ScreenSize } from "../global/enum";

function MediaQuery() {
  const [screen, setScreen] = useState(ScreenSize.Default);

  function changeScreen() {
    if (window.innerWidth <= "380") {
      if (screen !== ScreenSize.Mobile) {
        setScreen(ScreenSize.Mobile);
      }
    } else if (window.innerWidth <= "760") {
      if (screen !== ScreenSize.Tablet) {
        setScreen(ScreenSize.Tablet);
      }
    } else if (window.innerWidth <= "1024") {
      if (screen !== ScreenSize.Laptop) {
        setScreen(ScreenSize.Laptop);
      }
    } else if (window.innerWidth <= "1200") {
      if (screen !== ScreenSize.Monitor) {
        setScreen(ScreenSize.Monitor);
      }
    } else {
      if (screen !== ScreenSize.TV) {
        setScreen(ScreenSize.TV);
      }
    }
  }

  useEffect(() => {
    changeScreen();
    window.addEventListener("resize", changeScreen);
    return () => {
      // gets activated when class is destroyed
      window.removeEventListener("resize", changeScreen); // removing listener
    };
  }, [screen]);

  return screen; // retun current window size;
}

export default MediaQuery;
