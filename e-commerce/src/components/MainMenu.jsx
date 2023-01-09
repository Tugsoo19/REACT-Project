import React from "react";
import SubMenu from "./SubMenu";
import { Navbar } from "react-bootstrap";
import { menus, categories } from "../data/menus";
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
          <div className="logo">
            <img src="images/logo.png"></img>
          </div>
          <form className="searchField">
            <input type="text" placeholder="Search any things" />
            <button type="submit">Search</button>
          </form>
          <div className="login-left">
            <div>
              <img src="images/user.svg"></img>
              <a>Sign in</a>
            </div>
            <div>
              <img src="images/like.svg"></img>
              <Badge pill bg="warning">
                0
              </Badge>
            </div>
            <div>
              <img src="images/shopping-cart.svg"></img>
              <Badge pill bg="warning">
                0
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <Navbar bg="light" className="gap-5 p-0" expand="lg-2 md-6">
        <div className="bg-warning ms-5 p-3 text-white">{browseMenu}</div>
        <div className="d-flex gap-5">{subMenus}</div>

        <Nav.Link href="#deets">30 Days Free Return </Nav.Link>
      </Navbar>
    </div>
  );
}
