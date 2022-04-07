import React, { useEffect, useState } from "react";
import { Row, Col,Container } from "react-bootstrap";
import { Product } from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/medicine.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <>
     <Container>
     <Row xs={2} md={4} className="g-4 ">
        {products.map((product) => (
          <Col>
            <Product id={product.id} product={product}></Product>
          </Col>
        ))}
      </Row>
     </Container>
    </>
  );
};

export default Home;
