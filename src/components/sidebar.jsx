import React from 'react';
import { getMargins } from '../global/generic';

export const SideBar = ({
    child = "",
    height = "200px",
    width = "100px",
    backgroundColor = "rgb(32,32,32)",
    padding = "all:0px",
    margin = "all:0px",
    borderRadius = "0px",
    webkitboxshadow = " 5px 5px 23px 2px rgba(0,0,0,0.65)",
    shadow = "5px 5px 23px 2px rgba(0,0,0,0.65)",
    display = "inline",
    onClick,
}) => {

    /*     -webkit-box-shadow: 5px 5px 23px 2px rgba(0,0,0,0.65); 
    box-shadow: 5px 5px 23px 2px rgba(0,0,0,0.65);
     */


    const marginArray = getMargins({ properties: margin });
    const paddingArray = getMargins({ properties: padding });


    const mystyle = { // you can add more to make it even more generic
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        /* margin */
        marginTop: marginArray[0],
        marginBottom: marginArray[1],
        marginLeft: marginArray[2],
        marginRight: marginArray[3],
        /* padding */
        paddingTop: paddingArray[0],
        paddingBottom: paddingArray[1],
        paddingLeft: paddingArray[2],
        paddingRight: paddingArray[3],
        borderRadius: borderRadius,
        boxShadow: shadow,
        webkitBoxShadow: webkitboxshadow,
        position: "fixed",
        top: 0,
        left: 0,
        overflowX: "hidden",
        display: display
    };

    

    return (
        <div style={mystyle} onClick={onClick}>
            {child}
        </div>
    );

};