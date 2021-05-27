import React from "react";
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";
import Nav from "./Nav";
import StoreContext from "../redux/StoreContext";


const NavContainer = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) =>{
                let state = store.getState().sidebarPage;
                let Frends = state.frendsName.map((f) => (<FriendsSidebar name={f.fname} id={f.id}/>));
                return (
                    <Nav Frends={Frends}/>
                )
            }
        }
        </StoreContext.Consumer>
    );
}
export default NavContainer;