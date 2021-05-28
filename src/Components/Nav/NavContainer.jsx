import React from "react";
import Nav from "./Nav";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return {
        sidebarPage: state.sidebarPage
    }
}

const NavContainer = connect(mapStateToProps)(Nav)

export default NavContainer;