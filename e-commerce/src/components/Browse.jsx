import React from "react";
import { Nav, NavDropdown, NavLink } from "react-bootstrap";

const BrowserCategories = (props) => {
  const data =
    props.children.length > 0 ? (
      <NavDropdown title={props.title}>
        {props.children.map((child,index) => {
          return <NavDropdown.Item key={index}>{child.title}</NavDropdown.Item>;
        })}
      </NavDropdown>
    ) : (
      <NavLink>{props.title}</NavLink>
    );

  return <div>{data}</div>;
};

export default BrowserCategories;
