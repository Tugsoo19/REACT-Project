import React from 'react'
import { Children } from 'react';
import { Nav, NavDropdown, NavLink } from "react-bootstrap"



const browse = (props) => {


    const Browse =
        props.children.length > 0 ? (
            <NavDropdown title={props.title}>
                {props.children.map(child => {
                    return (
                        <NavDropdown.Item>{child.title}</NavDropdown.Item>
                    )
                })}

            </NavDropdown>
        ) : (
            <NavLink>{props.title}</NavLink>
        );

    return (
        <div>
            <Nav className="me-auto">

               {Browse}
               
            </Nav>

        </div>


    );
};

export default browse

