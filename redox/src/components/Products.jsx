import React from "react";
import SearchBox from "./SearchBox";
import "./css/Products.css";
import { Card, Container } from "react-bootstrap";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <SearchBox />
      <div>
        <Container>
          <Card className="cardmain">
            <Card.Title id="cardtitle">Products</Card.Title>
            <Card.Img variant="top" src="/car1.jpg" />
            <Card.Text>
              lorem ipsum lorem sjhfbjsdf gfjmhv jsdg fmjsdgvj gsdv hj{" "}
            </Card.Text>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Products;
