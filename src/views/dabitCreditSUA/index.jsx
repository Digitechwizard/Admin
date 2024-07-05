import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import 'assets/scss/mainStyle.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AccountStatement = () => {
  const [selectedDate, setSelectedDate] = useState(null); // State to hold selected date

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mt-0">
      {/* Marquee */}
      <div className="marquee-container">
        <marquee direction="left" behavior="scroll" scrollamount="5">
          <h6> Welcome To Bro999 Gaming Website</h6>
        </marquee>
      </div>

      <h1 className="text-left title_h1">MiniAdmin Transactions</h1>

      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>MiniAdmin</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Select a person</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Collection</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>CASH A/C</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date</Form.Label> <br />
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy" // Customize date format if needed
              className="form-control" // Bootstrap class for form-control
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control placeholder="Amount" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPaymentType">
            <Form.Label>Payment Type</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>PAYMENT-DIYA</option>
              <option>PAYMENT-LIYA</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRemark">
            <Form.Label>Remark</Form.Label>
            <Form.Control placeholder="Remarks" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="mt-4">
        <div className="d-flex justify-content-center">
          <a href="/demos/admin-templates/materially/react/free/" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#ff1616', borderColor: '#ff1616' }}>Back to Main Menu</a>
        </div>
      </div>
    </div>
  );
};

export default AccountStatement;
