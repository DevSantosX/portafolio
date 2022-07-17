import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <main className="body">
            {/* <Header/> */}
            <main>{ children }</main>
            <footer>pie de pagina</footer>
        </main>
    );
}


export default Layout;
