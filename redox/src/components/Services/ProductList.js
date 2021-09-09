import React, { useEffect } from "react";
import axios from "axios";
import useSelector, { useDispatch } from "react-redux";
import { setProducts } from "../Redux/Actions/productsAction";
import ProductCard from "../ProductCard";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products");
      return response.data;
      };
    console.log(response);

    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products==>", products);
  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ProductList;
