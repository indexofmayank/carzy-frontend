import { useFormik } from "formik";
import { Container, Row, Col, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const FormLayout = () => {
  const formik = useFormik({
    initialValues: {
      email: "test@test.com",
      password: "123456",
    },
    onSubmit(values) {
      console.log("values", values);
    },
  });

  return (
    <Container fluid>
      <div className="card">
        <h5 className="card-header">From Title</h5>
        <div className="bg-light card-body">
          <Row>
            <Col>
              <Form.Group
                as={Row}
                className="mb-3"
              >
                <Form.Label>
                  Name
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="Email" />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                as={Row}
                className="mb-3"
              >
                <Form.Label>
                  Email
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="Email" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                as={Row}
                className="mb-3"
              >
                <Form.Label>
                  City
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="City" />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                as={Row}
                className="mb-3"
              >
                <Form.Label>
                  State
                </Form.Label>
                <Col sm="12">
                  <Form.Control type="text" placeholder="State" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                as={Row}
                className="mb-3"
              >
                <Form.Label>
                  Phone Number
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="Phone Number" />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                as={Row}
                className="mb-3"
              >
                <Form.Label>
                  Password
                </Form.Label>
                <Col>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                as={Row}
                className="mb-3"
              >
                <Form.Label>
                  Password
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="Password" />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                as={Row}
                className="mb-3"
              >
                <Form.Label>
                  Password
                </Form.Label>
                <Col>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default FormLayout;
