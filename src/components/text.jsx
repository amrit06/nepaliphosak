import React from 'react';

export const Text = ({
    children,
    textColor = "black",
    family = "arial",
    size = "1rem",
    bold = "normal",
    underline = "none",
    textalign = "left",
    lspace = "0",
    wspace = "0",
    backgroundColor = " transparent",
    display = "block",
}) => {

    const mystyle = { // you can add more to make it even more generic
        color: textColor,
        fontFamily: family,
        fontSize: size,
        textAlign: textalign,
        TextDecoration: underline,
        padding: "0px",
        margin: "0px",
        fontWeight: bold,
        letterSpacing: lspace,
        wordSpacing: wspace,
        backgroundColor: backgroundColor,
        display: display,
    };


    return (
        <>
            <p style={mystyle}
            >{children}</p>
        </>

    );
};