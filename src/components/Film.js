import React from "react";

const Film = ({name, children}) => {

    return(
        <>
        <h3><a href={children}>{name}</a></h3>
        </>
    )
}

export default Film;