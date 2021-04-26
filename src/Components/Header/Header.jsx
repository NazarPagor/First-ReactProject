import React from "react";
import head from "./Header.module.css"

const Header = () => {
    return (
        <header className={head.header}>
            <img src="https://api.freelogodesign.org/assets/thumb/logo/22073155_400.png" alt="foto" className={head.headerFoto}/>
        </header>
    )
}
export default Header;