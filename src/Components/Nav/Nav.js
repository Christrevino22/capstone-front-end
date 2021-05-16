import React, { Component } from "react";
import Item from "../Item";
import { Menu } from "./Menu";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav className="Nav__Items">
        <h1 className="Nav__Logo">Design for Less!</h1>
        <div className="menu__links"></div>
        <ul>
          {Menu.map((itm, idx) => {
            return (
              <li key={idx}>
                <a className={itm.cName} href={itm.url}>
                  {itm.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
