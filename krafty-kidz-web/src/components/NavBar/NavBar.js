import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import "./NavBar.css";

class NavBar extends Component {
    render() {
        return(
            <nav className="nav-bar-items">
                <h1 className="nav-bar-logo">KraftyKidz<i className="fab fa-react"></i></h1>
                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar
