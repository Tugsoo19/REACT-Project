import React from 'react'
import { Children } from 'react';
import { Nav, NavDropdown, NavLink } from "react-bootstrap"
import categories from '../data/menus'
// import Browse from './Browse'


const SubMenu = (props) => {

    // const BrowseCategories = categories.map(Browse => {
    //     return (
    //         <Browse
    //             title={Browse.title}
    //             children={Browse.children}
    //         />
    //     )
    // })

    const subMenu =
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

                {/* {BrowseCategories} */}
                {subMenu}
            </Nav>

        </div>


    );
};

export default SubMenu

