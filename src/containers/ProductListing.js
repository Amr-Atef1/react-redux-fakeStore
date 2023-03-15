import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts,fetchProducts } from "../redux/actions/productActions";
import Loading from "./Loading";

const ProductListing = () => {
  const [loading,setLoading]=useState(true)

  const products = useSelector((state) => state);
  const dispatch = useDispatch()
  // const fetchProducts = async () => {
    //   setLoading(true)
    //   const response = await axios.get("https://fakestoreapi.com/products").catch(
      //     (err) => {
        //       console.log("ERROR", err);
        //     }
        //   );
        //   setLoading(false)
        //   dispatch(setProducts(response.data));
        // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
