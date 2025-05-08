import React, { useEffect, useState } from "react";
import { Card, Button, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Game = () => {
  const [nameinput, setNameInput] = useState("");
  const [apigender, setApiGender] = useState("");
  const [result, setResult] = useState("");
  const fetchAPI = async (inputname) => {
    try {
      const apiResponse = await fetch(
        "https://api.genderize.io/?name=".concat(inputname)
      );
      const apiData = await apiResponse.json();
      setApiGender(apiData.gender);
    } catch (error) {
      console.error("Error getting data:", error);
    }
  };
  const fetchGender = (e) => {
    e.preventDefault();
    nameinput.length > 0 ? fetchAPI(nameinput) : setApiGender("");
  };
  useEffect( () =>{
    nameinput.length > 0 ? setResult(nameinput.concat(" is ", apigender)): setResult("");
  },[apigender]
  );
  return (
    <>
      <div className="container">
        <Card className="text-left">
          <Card.Title>
            <h2 className="text-uppercase text-center mb-5">
              Welcome to Name Game
            </h2>
          </Card.Title>
          <Card.Body>
            <Form>
              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Enter a Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setNameInput(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col className="text-center">
                  <Button type="submit" onClick={fetchGender}>
                    Find Gender
                  </Button>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col className="text-center">
                  <Form.Label>
                    <h2>{result}</h2>
                  </Form.Label>
                </Col>
              </Form.Group>
              <Form.Group></Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Game;
