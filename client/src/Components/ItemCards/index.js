import React, { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UseBuyBestContext } from "../../Utils/GlobalState";


function CardItems() {

  useEffect(() => {
    dispatch({ type: "getItems" });
  }, [])

  
  const [state, dispatch] = UseBuyBestContext();
  console.log("home.state: ", state.display);



  return (
    <Container>
      <Row>     
        <p>Still Testing</p>
      {state.allItems.map((item, index) => (
       <Col xs="6" sm="4" lg="3" >
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} style={{ height: '20rem' }}/>
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
                <p>Regular Price: {item.regularPrice}</p>
                <p>Sale Price: {item.salePrice}</p>
            </Card.Text>
            <Button variant="primary" onClick={() => dispatch({
              type: "addToCart",
              thing: item
            })}>Add to Cart</Button>
            <Button variant="primary" onClick={() => dispatch({
              type: "addToWishList",
              thing: item
            })}>Add to Wish List</Button>

        </Card.Body>
    </Card>
    </Col> 
       ))}
      </Row>
    </Container>
  );
}

export default CardItems;