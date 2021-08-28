import React from "react";
import SearchBox from "./SearchBox";
import "./CSS/Products.css";
import { useSelector } from "react-redux";
import { Card, Container } from "react-bootstrap";

const ProductCard = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title } = products[0];
  return (
    <div>
      <h1>Products</h1>
      <SearchBox />

      <Card className="cardmain">
        <Card.Title id="cardtitle">{title}</Card.Title>
        <Card.Img variant="top" src="/car1.jpg" />
        <Card.Text>
          lorem ipsum lorem sjhfbjsdf gfjmhv jsdg fmjsdgvj gsdv hj{" "}
        </Card.Text>
      </Card>
    </div>
  );
};

export default ProductCard;
