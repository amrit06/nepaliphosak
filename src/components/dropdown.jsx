import React from 'react';
import { getMargins, getSides } from '../global/generic';


export const DropDown = ({
    title = "Title",
    type = "type",
    options = [],
    optionsvaluepair = false,
    selectedValue = "",
    onChange
}) => {

    /*   
    const mystyle = { // you can add more to make it even more generic
          height: height,
          width: width,
          backgroundColor: backgroundColor,
          color: textColor,
          padding: padding,
          margin: margin,
          border: border,
          borderRadius: borderRadius
    };
    */


    return (
        <div>
            <label for={type}>{title}</label>
            <select name={type} onChange={onChange}>
                {
                    options.map((element) => (
                        (optionsvaluepair) ?
                            (element.value === selectedValue) ?
                                <>
                                    <option value={element.value} selected>{element.title}</option>
                                </> :
                                <>
                                    <option value={element.value} >{element.title}</option>
                                </>
                            :
                            <>
                                <option value={element}>{element}</option>
                            </>
                    ))
                }
                <option></option>
            </select>
        </div>
    );
};




export const Input = ({
    onChange,
    type = "email",
    defaultValue = "",
    value = "",
    placeholder = "",
    width = "100%",
    height = "50px",
    padding = "all:0px",
    margin = "all:0px",
    borderradius = "all:0px",
    border = "none",
    outline = "none",
    transition = "",
}) => {



    const paddingArray = getMargins({ properties: padding, callFunction: getSides });
    const borderRadius = getMargins({ properties: borderradius, callFunction: getSides });


    const mystyle = {
        width: width,
        height: height,
        /* */
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

        border: border,
        outline: outline,
        WebKitTransition: transition,
        transition: transition,
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


    const inputProps = {
        style: mystyle,
        onChange: onChange,
        type: type,
        defaultValue: defaultValue,
        placeholder: placeholder,
    };

    if (value !== "") {
        inputProps["value"] = value;
    }

    return (
        <>
            <input
                {...inputProps}
            />
        </>
    );
}


