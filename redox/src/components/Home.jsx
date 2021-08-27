import React from "react";
import { Row, Col, Container } from "react-bootstrap";
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
          <Box
            style={{
              backgroundColor: "#EDEDED",
              width: "100rem",
              padding: "100px 80px",
              width: "100%",
            }}
          >
            <Container
              style={{
                backgroundColor: "#EDEDED",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                maxWidth: "1000px",
                margin: "0 auto",
              }}
            >
              <h1>REDOX</h1>
              <br />
              <h1>SHOP</h1>
            </Container>
          </Box>
        </Row>
      </Box>
    </div>
  );
};

export default Home;
