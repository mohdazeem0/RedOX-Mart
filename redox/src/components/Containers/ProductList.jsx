import React, { useEffect } from "react";
import axios from "axios";
import useSelector from "react-redux";
import ProductCard from "../ProductCard";

const ProductList = () => {
  const products = useSelector((state) => state);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err==>", err);
      });
    console.log("fuckin response====>", response);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ProductList;
