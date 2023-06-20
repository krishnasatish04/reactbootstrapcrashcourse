import React,{useState} from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export default function Register() {

    const [email, setEmail] =useState();
    const [password, setPassword] =useState();


    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
     console.log("email", email)
     console.log("password", password)
     setEmail('')
     setPassword('')
    }



  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Header className="p-3">Register</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} value={email}/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePassword}value={password}/>
                  </Form.Group>

                  <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
