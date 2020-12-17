import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreens = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // axios.get('/api/products').then() //return a promise
    const fetchProducts = async () => {
      const { data, status } = await axios.get("/api/products"); //destructured from res.data
      if (status !== 200) throw new Error("wtf");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreens;
