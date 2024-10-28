import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";


const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const result = await userSign(formData);

      
      console.log("Signup successful:", result);
      navigate("/login"); 
    } catch (error) {
      
      console.error("Error during signup:", error);
   
    }
  };


  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Row>
          <Col>
            <Form className="border p-4 rounded shadow" onSubmit={handleSubmit}>
              <Form.Group className="mb-3 d-flex align-items-center justify-content-center">
                <Link to="/">
                  <Image
                    style={{ width: "50px", height: "auto" }}
                    src="/logo.png"
                    fluid
                  />
                </Link>
              </Form.Group>
              <hr />
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="User name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange} 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange} 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                onChange={handleChange}
                />
              </Form.Group>

              <Button variant="success" type="submit">
                Signup
              </Button>
              <Link to="/login">
                <Button className="ms-2" variant="primary" type="submit">
                  Login
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupPage;
