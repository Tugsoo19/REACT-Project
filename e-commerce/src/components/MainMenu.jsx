import React from 'react'
import SubMenu from './SubMenu'
import { Navbar } from 'react-bootstrap'
import menus from '../data/menus'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

export default function MainMenu() {




    const subMenus = menus.map(subMenu => {
        return (
            <SubMenu
                title={subMenu.title}
                position={subMenu.position}
                children={subMenu.children}
            />
        )
    })

    return (
        <div>
            <div className='MainMenu'>
                <div className='Container'>
                    <Row>
                        <Col>
                            <img src='images/logo.png'></img>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Search any things"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="warning" id="button-addon2">
                                    Search
                                </Button>
                            </InputGroup>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <img src='images/user.svg'></img>
                                    <a>Sign in</a>
                                </Col>
                                <Col>
                                    <img src='images/like.svg'></img>
                                    <Badge pill bg="warning">0</Badge>
                                </Col>
                                <Col>
                                    <img src='images/shopping-cart.svg'></img>
                                    <Badge pill bg="warning">0</Badge>
                                </Col>
                            </Row>

                        </Col>


                    </Row>

                </div>


            </div>
            <Navbar bg='light' expand='lg'>
                {subMenus}
            </Navbar>


        </div>
    )
}