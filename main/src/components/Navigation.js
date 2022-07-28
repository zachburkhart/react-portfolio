import React from "react";

function Navigation(props) {
    const { changePage } = props;
    return (
        <nav>
            <ul>
                <li>
                    <span onClick={() => changePage("About")}>About</span>
                </li>
                <li>
                    <span onClick={() => changePage("Contact")}>Contact</span>
                </li>
                <li>
                    <span onClick={() => changePage("Portfolio")}>Portfolio</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;