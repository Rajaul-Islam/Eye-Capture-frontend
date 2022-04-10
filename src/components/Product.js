import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { LinkContainer } from "react-router-bootstrap";
import { Link, NavLink } from "react-router-dom";
export const Product = ({ product }) => {
  const { _id, name, image, price, rating } = product;
  return (
    <Card className="my-3 p-3 rounded">
      <NavLink to={`/product/${_id}`}>
        <Card.Img variant="top" src={image} />
      </NavLink>
      <Card.Body>
        <LinkContainer to={`/product/${_id}`}>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </LinkContainer>
        <Card.Text as="div">
          <div className="my-3">
            <ReactStars
              count={5}
              value={rating}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
