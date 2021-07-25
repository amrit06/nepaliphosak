import React from 'react';
import { getDimension, getMargins, getSides } from '../global/generic';

const Container = ({
    children,
    height = "",
    width = "",
    backgroundColor = "",
    padding = "all:0px",
    margin = "all:0px",
    borderradius = "all:0px",
    border = "",
    display = "",
    float = "",
    shadow = "",
    webkitboxshadow = "",
    boxshadow = "",
    flex = "",
    justifyContent = "",
    alignItems = "",
    textalign = "",
    position = "",
    top = "",
    bottom = "",
    left = "",
    right = "",
    zindex = "",
    transition = "",
    opacity = "",
    flexDirection = "",
    flexwrap = "",
    background = "",
    overflow = "all:hidden",
    whiteSpace = "",
    webkitOverflowScrolling = "",
    onClick,
    id = "",
    verticalalign = "",
    transform = "",
}) => {

    const paddingArray = getMargins({ properties: padding, callFunction: getSides });
    const borderRadius = getMargins({ properties: borderradius, callFunction: getSides });
    const overflows = getMargins({ properties: overflow, callFunction: getDimension })

    const mystyle = { // you can add more to make it even more generic
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        display: display,
        /*padding */
        paddingTop: paddingArray[0],
        paddingBottom: paddingArray[1],
        paddingLeft: paddingArray[2],
        paddingRight: paddingArray[3],
        /*border radius*/
        borderTopLeftRadius: borderRadius[0],
        borderTopRightRadius: borderRadius[1],
        borderBottomLeftRadius: borderRadius[2],
        borderBottomRightRadius: borderRadius[3],
        /*applies when used conjunction with postion="absolute" */

        top: top,
        bottom: bottom,
        left: left,
        right: right,

        transform: transform,
        verticalAlign: verticalalign,
        border: border,
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexWrap: flexwrap,
        textAlign: textalign,
        position: position,
        zIndex: zindex,
        WebKitTransition: transition,
        transition: transition,
        opacity: opacity,
        flexDirection: flexDirection,
        float: float,
        shadow: shadow,
        whiteSpace: whiteSpace,
        WebkitOverflowScrolling: webkitOverflowScrolling,
        //chidren will wrapped inside container so opacity and width with impact the children as well
        overflowX: overflows[0],
        overflowY: overflows[1],
        flex: flex,
        background: background === "" ? backgroundColor : background,
        WebkitBoxShadow: webkitboxshadow,
        boxShadow: boxshadow,
    };

    if (margin !== "") {
        if (margin === "0 auto") {
            mystyle["margin"] = margin
        } else {
            const marginArray = getMargins({ properties: margin, callFunction: getSides });
            mystyle["marginTop"] = marginArray[0];
            mystyle["marginBottom"] = marginArray[1];
            mystyle["marginLeft"] = marginArray[2];
            mystyle["marginRight"] = marginArray[3];
        }
    }






    return (
        <div id={id} style={mystyle} onClick={onClick}>
            {children}
        </div>
    );

};


const Column = ({
    children,
    width = "100%",
    height = "100%",
}) => {
    const mystyle = {
        widht: width,
        height: height,
        display: "flex",
    }
    return (
        < Container {...mystyle} >
            {children}
        </Container >
    );
}

const Row = ({
    children,
    width = "100%",
    height = "100%",
}) => {
    const mystyle = {
        widht: width,
        height: height,
        display: "flex",
        flexDirection: "column",
    }
    return (
        < Container {...mystyle} >
            {children}
        </Container >
    );
}











export { Container, Column, Row, }