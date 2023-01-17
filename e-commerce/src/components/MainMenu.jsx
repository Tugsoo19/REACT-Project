import React from "react";
import SubMenu from "./SubMenu";
import { Navbar } from "react-bootstrap";
import { menus, categories } from "../data/menus";
import Badge from "react-bootstrap/Badge";
import BrowseCategories from "./Browse";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { Link } from "react-router-dom";

import CloseButton from "react-bootstrap/CloseButton";

export default function MainMenu(props) {
  const [show, setShow] = useState(false);
  
  console.log("MainMenu", props.wishlist);

  const browseMenu = categories.map((el, index) => {
    return (
      <BrowseCategories key={index} title={el.title} children={el.children} />
    );
  });

  const subMenus = menus.map((subMenu, index) => {
    return (
      <SubMenu
        key={index}
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
            <img src="images/user.svg" />
            <Link to={"/signup"} className="signin">
              Sign in
            </Link>
            {show ? (
              <div className="wish align-items-center">
                <h3>Wishlist</h3>
                {props.wishlist.map((w) => {
                  return (
                    <div className="d-flex gap-3 justify-content-between border p-3">
                      <img src={w.productImage} className="col-5" />
                      <div>
                        <h5>{w.productTitle}</h5>
                        <p>Price: {w.productPrice}</p>
                        <button className="addcart">Add to cart</button>
                      </div>
                      <CloseButton />
                    </div>
                  );
                })}

                <hr></hr>
                <button className="border-2 rounded-3" onClick={() => setShow(false)}>Close</button>
              </div>
            ) : (
              ""
            )}
            <div onClick={() => setShow(true)}>
              <img src="images/like.svg"></img>

              <Badge pill bg="warning">
                {props.wishlist.length}
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
      <Navbar bg="light" className="menu gap-5 p-0 pe-4" expand="lg-2 md-6">
        <div className="browse bg-warning ms-5 p-3 text-white">
          {browseMenu}
        </div>
        <div className="sub d-flex gap-5">{subMenus}</div>

        <Nav.Link className="return" href="#deets">
          30 Days Free Return{" "}
        </Nav.Link>
      </Navbar>
    </div>
  );
}
