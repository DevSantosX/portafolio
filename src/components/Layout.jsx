import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <main className="body">
            <Header/>
            <main>{ children }</main>
            <footer>Desarrollado by <strong>Dev-Santos</strong> 2022 </footer>
        </main>
    );
}


export default Layout;
