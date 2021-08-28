import React from "react";
import SearchBox from "./SearchBox";
import "./CSS/Products.css";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const ProductCard = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, price, image, category } = product;
    return (
      <div>
        <Card className="cardmain" key={id}>
          <Card.Img variant="top" src={image} />
          <Card.Title id="cardtitle">{title}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <Card.Text>{category}</Card.Text>

          <Card.Text>
            lorem ipsum lorem sjhfbjsdf gfjmhv jsdg fmjsdgvj gsdv hj{" "}
          </Card.Text>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <h1>Products</h1>
      <SearchBox />
      <div>{renderList}</div>
    </div>
  );
};

export default ProductCard;
