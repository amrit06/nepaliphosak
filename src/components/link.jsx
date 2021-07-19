import React from 'react';
import { Button } from './Button';

export const Link = ({
    children,
    route = "#",
    margin = "all:0px",
    padding = "all:0px",
    height = "",
    width = "",
    backgroundColor = "transparent",
    color = "white",
    display = "inline-block",
    float = "left",
    onClick,
    borderRadius = "",
    transition = "",
    hoverStyle = "",

}) => {


    const mystyle = { // you can add more to make it even more generic
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        textColor: color,
        display: display,
        padding: padding,
        margin: margin,
        float: float,
        borderRadius: borderRadius,
        transition: transition,
        hoverStyle: hoverStyle,
    };



    return (
        <a href={route} onClick={onClick} >
            <Button
                {...mystyle}
            >{children}</Button>
        </a>
    );

};

