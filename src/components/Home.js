import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../action/productAction";
import { Product } from "./Product";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  console.log(productList);
  const { loading,error, products } = productList;
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  // const products = [];
  return (
    <>
      <Container>
        <Row xs={2} md={4} className="g-4 ">
          {products.map((product) => (
            <Col>
              <Product id={product._id} product={product}></Product>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
