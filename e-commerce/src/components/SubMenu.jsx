import React from 'react'
import { NavDropdown, NavLink } from "react-bootstrap"

const SubMenu = (props) => {
    
    const subMenu =
        props.children.length > 0 ? (
            <NavDropdown title={props.title}>
                {props.children.map((child, index) => {
                    return (
                        <NavDropdown.Item key={index}>{child.title}</NavDropdown.Item>
                    )
                })}
            </NavDropdown>
        ) : (
            <NavLink>{props.title}</NavLink>
        );

    return (
        <div>
            {subMenu}
        </div>
    );
};

export default SubMenu

