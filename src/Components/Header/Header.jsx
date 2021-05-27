import React from "react";
import head from "./Header.module.css"

const Header = () => {
    return (
        <header className={head.header}>
            <div className={head.search}>
                <form action="" method="get">
                    <div className={head.input}>
                        <input name="s" placeholder="Serch..." type="search"/>
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <button className={head.buttons}>Login</button>
                <button className={head.buttons}>Logout</button>
            </div>
        </header>
    )
}
export default Header;