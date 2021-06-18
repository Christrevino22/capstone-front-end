import { useState, useEffect } from "react";
import Item from "../Item/index";
import "./List.css";

const List = () => {
  const [furniture, setFurniture] = useState([])
    


  useEffect(()=> {
    fetch("https://cap-app.vercel.app/furniture")
      .then((response) => response.json())
      .then((data) => setFurniture(data)
  })

  // componentDidMount() {
  //   fetch("https://cap-app.vercel.app/furniture")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ furniture: data }));
  // }

  

  render() {
    return (
      <ul className="item__card">
        {furniture &&
          furniture.map((furniture, id) => {
            return (
              <Item
                key={furniture.id}
                img={furniture.fur_img}
                name={furniture.fur_name}
                type={furniture.fur_type}
                price={furniture.fur_price}
              />
            );
          })}
      </ul>
    );
  }
}

export default List;
