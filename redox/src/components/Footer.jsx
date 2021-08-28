import React from "react";
import { Box, Container, Row, Column, FooterLink, Heading } from "./CSS/Footer";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#FF1E56", textAlign: "center", marginTop: "-50px" }}>
        Luxury, For the Sapiens Who Deserves It
      </h1>
      <hr />
      <Container>
        <Row>
          <Column>
            <Heading>Company</Heading>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Terms Conditions</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Products</Heading>
            <FooterLink href="#">Mens Wear</FooterLink>
            <FooterLink href="#">Womens Wear</FooterLink>
            <FooterLink href="#">Kids Wear</FooterLink>
            <FooterLink href="#">Accesories</FooterLink>
          </Column>
          <Column>
            <Heading>Branches</Heading>
            <FooterLink href="#">Nanded</FooterLink>
            <FooterLink href="#">Pune</FooterLink>
            <FooterLink href="#">Aurangabad</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
