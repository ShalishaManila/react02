import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game2() {
  return (
    <Form>
      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
    </Form>
  );
}

export default Game2;