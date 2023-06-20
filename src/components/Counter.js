import React,{useState} from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
export default function Counter() {
    const[count,setCount] = useState(0);

    const  handleInc = ()=>{
        setCount(count +1)
    }

    const  handleDec = ()=>{
        setCount(count - 1)
    }
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={4}>
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Text>
                  Count:{count}
                </Card.Text>
                <Button onClick={handleInc}variant="success"className="m-1">increment</Button>
                <Button onClick={handleDec}variant="warning" className="m-1">decrement</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
