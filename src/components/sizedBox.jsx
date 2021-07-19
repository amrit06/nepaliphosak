const Divider = ({
    height = "",
    width = "",
    color = "black",
    align = "left",
}) => {

    const mystyle = { // you can add more to make it even more generic
        height: height,
        width: width,
        background: color,
    };

    if (align === "left") {
        mystyle["float"] = align;
    } else if (align === "center") {
        mystyle["margin"] = "0 auto";
    } else if (align === "right") {
        mystyle["float"] = align;
    }

    return (
        <div style={mystyle}>
        </div>
    );

};


const HorBox = ({
    height = "",
}) => {
    const mystyle = { // you can add more to make it even more generic
        height: height,
        width: "100%",
    };
    return (
        <div style={mystyle}>
        </div>
    );
};



const VerBox = ({
    width = "",
}) => {

    const mystyle = { // you can add more to make it even more generic
        height: "100%",
        width: width,
    };

    return (
        <div style={mystyle}>
        </div>
    );

};

export { Divider, VerBox, HorBox }


