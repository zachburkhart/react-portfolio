import React from "react";
import Navigation from "./Navigation";

function Header(props) {
    const { thisPage, changePage } = props;
    return (
        <header>
            <div>
                <h3>Zach's Portfolio</h3>
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