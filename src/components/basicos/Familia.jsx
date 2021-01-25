import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {

    return (
        <>
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro/>
            <FamiliaMembro/>
        </>
    );
};
