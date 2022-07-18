import AppNavbar from "./Navbar/AppNavbar";
import React from "react";

type props = {
    children:JSX.Element
}

const Layout: React.FC<props> = ({children}) => {
    return (
        <>
            <AppNavbar/>
            <main>{children}</main>
        </>
    )
}

export default Layout;
