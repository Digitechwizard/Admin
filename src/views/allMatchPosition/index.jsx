import React from 'react'
import { InputGroup, Col, Button, Row, Container, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function () {
  return (
    <Container>
      <Row className="vh-10 d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
       
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-1">
                {/* Marquee */}
      <div className="marquee-container">
        <marquee direction="left" behavior="scroll" scrollamount="5">
          <h6> Welcome To Bro999 Gaming Website</h6>
        </marquee>
      </div>
                <h5 className="fw-bold text-uppercase mb-3">Colombo Strikers VS B-Love Kandy(T-20)</h5>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formFullName">
                      <Form.Label className="text-center">Colombo Strikers</Form.Label>
                      <Form.Control type="number" placeholder="0" />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formPhoneNumber">
                      <Form.Label>B-Love Kandy</Form.Label>
                      <Form.Control type="number" placeholder="0" />
                    </Form.Group>
                  </Row>
                  <h5 className="fw-bold text-uppercase mb-3">Jaffna Kings VS Galle Marvels(T-20)</h5>
                  <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formFullName">
                      <Form.Label className="text-center">Jaffna Kings</Form.Label>
                      <Form.Control type="number" placeholder="0" />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formPhoneNumber">
                      <Form.Label>Galle Marvels</Form.Label>
                      <Form.Control type="number" placeholder="0" />
                    </Form.Group>
                  </Row>
               
                </Form>
               
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}