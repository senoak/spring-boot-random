import React from "react";

function NavBar(props){
    return (
        <div className="container">
            <h3>{props.title}</h3>
        </div>
    )
}

export default NavBar;