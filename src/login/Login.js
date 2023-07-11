import './login.scss';
import { useFormik } from "formik";
import { Container, Row,Col, Image, InputGroup, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: "test@test.com",
      password: "123456",
    },
    onSubmit(values) {
      console.log("values", values);
    }
  });

  return (
    <Container fluid className='main-container p-0 h-100'>
      {/* <div className='login-form-container-form'> */}
        <div className='login-form-container'>
          <div className='login-form'>
            <div className='d-flex flex-center'>
              <Image className='app-logo mb-5' src={require('./../images/log.jpeg')} thumbnail />

            </div>
            <Form className='card login-form-wrapper'>
                  <h5 className='login-title'>Welcome to Carzy</h5>
                  <Row>
                      <Col>
                      <InputGroup className="mb-4">
                      {/* <InputGroup.Text className='input-group-icon border-right-0' id="basic-addon1">@</InputGroup.Text> */}
                      <Form.Control className='form-control'
                      placeholder="Email Address"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                      />
                  </InputGroup>
                  <InputGroup className="mb-3 mt-2">
                      {/* <InputGroup.Text id="basic-addon1" className='input-group-icon border-right-0'>@</InputGroup.Text> */}
                      <Form.Control className='form-control'
                      placeholder="Password"
                      type='password'
                      aria-label="password"
                      aria-describedby="basic-addon1"
                      />
                      {/* <InputGroup.Text className='input-group-icon border-left-0'>@</InputGroup.Text> */}
                  </InputGroup>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='mb-0'>
                      <Form.Check type="checkbox" className='fs--1' label="Check me out" />
                    </div>
                    <div className='forgot-password-link'>
                        <a className="fs--1 mb-0" href="/authentication/simple/forgot-password">Forgot Password?</a>
                    </div>
                  </div>
                  <div className='login-button d-grid mt-3'>
                      <Button variant="primary" className='btn-orange'>Log in</Button>
                  </div>
                  <div className='position-relative mt-4'>
                    <div className='text-300'></div>
                    <div className='divider-content-center'>Or</div>
                  </div>
                  
                  <div className='d-flex flex-center'>
                  <a href="/authentication/simple/register" className='fs--1'>Create an account</a>
                  </div>
                      </Col>
                  </Row>
                  
            </Form>
          </div>
        </div>
      {/* </div> */}
    </Container>
  );
}

export default Login;