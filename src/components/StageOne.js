import React, { useContext, useState, useRef } from "react";
import { MyContext } from "../contexts";
import classes from "./StageOne.module.css";
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import {
  Form,
  Button,
  Alert,
  ListGroup,
  Container,
  Row,
  Col,
  CloseButton,
} from "react-bootstrap";

const StageOne = () => {
  const inputRef = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, ""]);
  const listOfPlayers = context.state.players;


  const submitHandler = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;

    if (value === "") {
      setError([true, "Sorry, you need to enter somthing!"]);
      return false;
    }

    if (value.trim().length <= 2) {
      setError([true, "The name should be at least 3 characters long!"]);
      return false;
    }

    context.addPlayer(value);
    inputRef.current.value = "";
    setError([false, ""]);
  };

  const nextHandler = () => {
    if (listOfPlayers.length < 2) {
      toast.error('You should add at least one more player!');
    }
    else {
      context.stage();
    }
  }

  return (
    <>
      <Form className="mt-4" onSubmit={submitHandler}>
        <Form.Group>
          <Form.Control type="text" placeholder="Enter Name" ref={inputRef} />
          <Button type="submit" className={classes.miami} variant="primary">
            Add to List
          </Button>
        </Form.Group>
      </Form>
      {error[0] === true ? <Alert variant="danger">{error[1]}</Alert> : ""}
      {listOfPlayers.length > 0 && listOfPlayers ? (
        <>
          <hr />
          <div>
            <ListGroup>
              {listOfPlayers.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Container>
                    <Row>
                      <Col xs={6}>{item}</Col>
                      <Col xs={4}></Col>
                      <Col xs={2}>
                        <CloseButton
                          onClick={() => context.removePlayer(index)}
                        />
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <button 
              className={classes.action_button} 
              onClick={nextHandler}
              >Next</button>
          </div>
        </>
      ) : null}
      <ToastContainer position="top-left" autoClose={5000}/>
    </>
  );
};

export default React.memo(StageOne);
