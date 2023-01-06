import React from "react";
import SubMenu from "./SubMenu";
import { Navbar } from "react-bootstrap";
import { menus, categories } from "../data/menus";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import BrowseCategories from "./Browse";
import Nav from "react-bootstrap/Nav";

export default function MainMenu() {
  const browseMenu = categories.map((el) => {
    return <BrowseCategories title={el.title} children={el.children} />;
  });

  const subMenus = menus.map((subMenu) => {
    return (
      <SubMenu
        title={subMenu.title}
        position={subMenu.position}
        children={subMenu.children}
      />
    );
  });

  return (
    <div>
      <div className="MainMenu">
        <div className="Container">
          <Row>
            <Col md={3}>
              <img src="images/logo.png"></img>
            </Col>
            <Col md={3}>
              <InputGroup className="mb-3">
                <Form.Control
                  className="p-2"
                  placeholder="Search any things"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="warning text-white rounded" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </Col>
            <Col></Col>
            <Col md={4}>
              <Row md={4}>
                <Col>
                  <img src="images/user.svg"></img>
                  <a>Sign in</a>
                </Col>
                <Col>
                  <img src="images/like.svg"></img>
                  <Badge pill bg="warning">
                    0
                  </Badge>
                </Col>
                <Col>
                  <img src="images/shopping-cart.svg"></img>
                  <Badge pill bg="warning">
                    0
                  </Badge>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <Navbar bg="light" className="me-auto gap-5" expand="lg-2 md-6">

          <div className="bg-warning ms-5">{browseMenu}</div>
          <div className="d-flex gap-5">{subMenus}</div>
          
          <Nav.Link href="#deets">30 Days Free Return </Nav.Link>

        </Navbar>
      </div>
    </div>
  );
}
