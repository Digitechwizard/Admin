import { Link } from 'react-router-dom'; // Import Link from React Router if using it
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function GridComplexExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Reference</Form.Label>
          <Form.Control type="text" placeholder="Enter Reference" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>My Coins</Form.Label>
          <Form.Control type="number" placeholder="200" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Coins</Form.Label>
          <Form.Control type="number" placeholder="Subdomain Coins" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Contact No</Form.Label>
          <Form.Control type="number" placeholder="Enter Mobile number" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <h3>Subadmin Match Share And Commission</h3>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>My Match Share(%)</Form.Label>
          <Form.Control type="number" placeholder="96" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Match Share(%)</Form.Label>
          <Form.Control type="number" placeholder="Subdomain Match Share" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCommType">
          <Form.Label>My Comm Type</Form.Label>
          <Form.Control as="select" defaultValue="Bet By Bet">
            <option>Bet By Bet</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCommType">
          <Form.Label>Comm Type</Form.Label>
          <Form.Control as="select" defaultValue="Commission Type">
            <option>Commission Type</option>
            <option>No Commission</option>
            <option>Bet By Bet</option>
          </Form.Control>
        </Form.Group>
      </Row>

      <h3>Subadmin Casino Share And Commission</h3>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>My Casino Share(%)</Form.Label>
          <Form.Control type="number" placeholder="96" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Casino Share(%)</Form.Label>
          <Form.Control type="number" placeholder="Subdomain Casino Share" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>My Casino Comm(%)</Form.Label>
          <Form.Control type="number" placeholder="2" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Casino Comm(%)</Form.Label>
          <Form.Control type="number" placeholder="Casino commission" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Col>
          <Link to="/miniAdminMaster"> {/* Assuming '/' is your home page route */}
            <Button variant="secondary" type="button">
              Back
            </Button>
          </Link>
        </Col>
        <Col className="text-end">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default GridComplexExample;
