import React, { Component } from "react";
import Item from "../Item/index";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      furniture: [],
    };
  }

  componentDidMount() {
    fetch("https://cap-app.vercel.app/furniture")
      .then((response) => response.json())
      .then((data) => this.setState({ furniture: data }));
  }

  componentDidUpdate() {
    console.log(this.state.furniture);
  }

  render() {
    return (
      <ul>
        {this.state.furniture &&
          this.state.furniture.map((furniture, id) => {
            return (
              <Item
                key={furniture.id}
                name={furniture.fur_name}
                type={furniture.fur_type}
                img={furniture.fur_img}
                price={furniture.fur_price}
              />
            );
          })}
      </ul>
    );
  }
}

export default List;
