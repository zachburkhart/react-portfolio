import React from "react";
import Navigation from "./Navigation";

function Header(props) {
    const { thisPage, changePage } = props;
    return (
        <header>
            <div>
                <h1>Zach's Portfolio</h1>
            </div>
            <div>
                <Navigation
                    thisPage={thisPage}
                    changePage={changePage}>
                </Navigation>
            </div>
        </header>
    );
}

export default Header;