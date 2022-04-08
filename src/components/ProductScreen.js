import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const ProductScreen = () => {
  const { id } = useParams();
  console.log(id);

  console.log(id);

  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  // const product = products.find((p) => p.id === id);

  console.log(product);
  return (
    <>
      {product?.name ? (
        <Container>
          <Link className="btn btn-light my-3" to="/">
            GO BACK
          </Link>
          <Row>
            <Col md={6}>
              <Image src={product.img} alt={product.name} fluid />
            </Col>
            <Col md={3} className="">
              <ListGroup variant="flush">
                <ListGroup.Item className="text-uppercase">
                  {product?.name}
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
                <ListGroup.Item>
                  <ReactStars
                    count={5}
                    value={product.rating}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                  />{" "}
                  {product.rating}reviews
                </ListGroup.Item>
                <ListGroup.Item>{product.introduction}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.stock > 0 ? "In Stock" : "Out Of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Button
                        className="btn-block"
                        type="button"
                        disabled={product.stock=== 0}
                        variant='dark'
                      >
                        Buy Now
                      </Button>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <h1>No Product Found</h1>
      )}
    </>
  );
};

export default ProductScreen;
