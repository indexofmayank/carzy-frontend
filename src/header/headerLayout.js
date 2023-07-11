import { Container, Row, Col, Navbar, NavDropdown, Nav, Image, Dropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormLayout from "../formlayout/FormLayout";

import { BsFillGridFill } from "react-icons/bs";


const HeadersLayout = () => {

  return (
    <Container fluid className="main-container p-0 h-100">
      <div className="abn-car-left-panel">

        <Navbar expand="lg" sticky="top" className="navbar-top-brand h-100 p-0">
          <Navbar.Brand href="#home" className="lex-column p-2">
              <Image className='brand-icon' src={require('./../images/log.jpeg')} thumbnail />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="d-flex align-items-center">
                <BsFillGridFill className="nav-item-icon" />
                <span className="ms-2 nav-item-name">Dashboard</span>
              </Nav.Link>
              <Nav.Link href="#home" className="d-flex align-items-center">
                <BsFillGridFill className="nav-item-icon" />
                <span className="ms-2 nav-item-name">Dashboard</span>
              </Nav.Link>
              <Nav.Link href="#home" className="d-flex align-items-center">
                <BsFillGridFill className="nav-item-icon" />
                <span className="ms-2 nav-item-name">Dashboard</span>
              </Nav.Link>
              <Nav.Link href="#home" className="d-flex align-items-center">
                <BsFillGridFill className="nav-item-icon" />
                <span className="ms-2 nav-item-name">Dashboard</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="abn-car-right-panel">
        <div className="abn-car-right-header-paner p-2">
          <div className="right-menu-item">
          <Dropdown>
            <Dropdown.Toggle className="transparnt-btn"  id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
        </div>
        <div className="abn-car-body-container pl-2 pr-2">
          <FormLayout/>
        </div>
      </div>

    </Container>
  );
};

export default HeadersLayout;
