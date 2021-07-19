import React, { useState } from 'react';
import { getMargins, getSides } from '../global/generic';

export const Button = ({
    children,
    height = "50px",
    width = "100px",
    backgroundColor = "green",
    color = "white",
    padding = "all:0px",
    margin = "all:0px",
    buttonType = "",
    border = "0",
    borderradius = "",
    display = "block",
    onClick,
    float = "",
    position = "",
    top = "",
    bottom = "",
    left = "",
    right = "",
    transform = "",
    transition = "",
    hoverStyle = {},
}) => {




    const [hover, setHover] = useState(false);
    const marginArray = getMargins({ properties: margin, callFunction: getSides });
    const paddingArray = getMargins({ properties: padding, callFunction: getSides });
    const borderRadius = getMargins({ properties: borderradius, callFunction: getSides });


    let mystyle = {};
    const propStyle = { // you can add more to make it even more generic
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        color: color,
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

        position: position,
        display: display,
        border: border,
        /*border radius */
        borderTopLeftRadius: borderRadius[0],
        borderTopRightRadius: borderRadius[1],
        borderBottomLeftRadius: borderRadius[2],
        borderBottomRightRadius: borderRadius[3],
        float: float,
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        transform: transform,
        weKitTransition: transition,
        transition: transition,
        overflow: "hidden",
    }

    if (hover) {
        mystyle = { ...propStyle, ...hoverStyle };
    } else {
        mystyle = { ...propStyle };
    }


    return (
        <button
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
            style={mystyle}
            onClick={onClick}
            type={buttonType}>{children}
        </button>
    );

}