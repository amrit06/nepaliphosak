import React from "react";
import MediaQuery from "../tools/MediaQuery";
import { ScreenSize } from "./enum";

export const getSizes = () => {
  let data = [
    { title: "Small", value: "small" },
    { title: "Medium", value: "medium" },
    { title: "Large", value: "large" },
  ];
  return data;
};

// used for margin paddings and anything that requier top bottom values
export const getSides = () => {
  let data = [
    { title: "all", active: false, value: "0px" },
    { title: "top", active: false, value: "0px" },
    { title: "bottom", active: false, value: "0px" },
    { title: "left", active: false, value: "0px" },
    { title: "right", active: false, value: "0px" },
  ];

  return data;
};

export const getDimension = () => {
  const data = [
    { title: "all", active: false, value: "hidden" },
    { title: "x", active: false, value: "hidden" },
    { title: "y", active: false, value: "hidden" },
  ];

  return data;
};

// construct array based on string("prop:vlaues")
export const getMargins = ({ properties = "", callFunction = () => {} }) => {
  const marginArray = properties.split(";");
  const sides = callFunction();
  const returnValue = []; // return value

  marginArray.forEach((element) => {
    sides.forEach((side) => {
      // loop through sides
      if (element.includes(side.title)) {
        side.active = true;
        let arr = element.split(":");
        side.value = arr[1];
        return;
      }
    });
  });

  if (sides[0].active) {
    // if all fill rest with all's value
    for (let index = 0; index < sides.length - 1; index++) {
      //
      returnValue.push(sides[0].value);
    }
  } else {
    for (let index = 0; index < sides.length - 1; index++) {
      //
      returnValue.push(sides[index + 1].value);
    }
  }

  return returnValue;
};

/* 
export const getOverflows = ({
  properties = ""
})
=>{
  const result = [];
  const flowArray = properties.split(";");
  const sides = [
    {prop = "all", active = false, value = "hidden" },
    {prop = "x", active = false, value = "hidden" },
    {prop = "y", active = false, value = "hidden" },
  ];

  flowArray.forEach((element) => {
      sides.forEach((side)=>{
        if(element.includes(side.prop)){
          side.active = true;
          let valuesArray = element.split(":");
          side.value = valuesArray[1];
          return;
        }
      });
  });

  if(sides[0].active){
    for (let index = 0; (index < sides.length-1); index++) {
      result.push(sides[0].value);
    }
  }else{
    for (let index = 0; index < (sides.length-1); index++) {
      result.push(sides[index+1].value);
    }
  }

  return result;
} */

/*
export const getMargins = ({ properties = "" }) => {
  const marginArray = properties.split(";");
  const sides = getSides();
  const returnValue = []; // return value

  marginArray.forEach((element) => {
    sides.forEach((side) => {
      // loop through sides
      if (element.includes(side.title)) {
        side.active = true;
        let arr = element.split(":");
        side.value = arr[1];
        return;
      }
    });
  });

  if (sides[0].active) {
    // if all fill rest with all's value
    for (let index = 0; index < 4; index++) {
      //
      returnValue.push(sides[0].value);
    }
  } else {
    for (let index = 0; index < 4; index++) {
      //
      returnValue.push(sides[index + 1].value);
    }
  }

  return returnValue;
};
*/
