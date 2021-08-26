import React from "react";
import { Row, Col } from "react-bootstrap";
import { Box } from "@material-ui/core";
import CarouselMain from "./Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <div>
        <CarouselMain />
      </div>
      <Box>
        <Row>
          <Col>first</Col>
          <Col>Second</Col>
        </Row>
      </Box>
    </div>
  );
};

export default Home;
