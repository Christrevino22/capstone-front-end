import React, { Component } from "react";
import { cover__art } from "./item.module.css";
import Button from "../Item/Button";

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="item__card">
        <img
          className={cover__art}
          src={this.props.img}
          alt={this.props.name}
        />
        <div>
          <h2>{this.props.name}</h2>
          <h5>{this.props.type}</h5>
          <p>{this.props.price}</p>
          <Button />
        </div>
      </li>
    );
  }
}
export default Item;
