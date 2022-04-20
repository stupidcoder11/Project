import {React,  Fragment } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

import { Form, FormControl, Button, NavDropdown, Nav, Offcanvas, Container, Navbar } from "react-bootstrap"

function TopNav() {
    return (
        <Fragment>
            {/* <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark p-4">
                <Link to="/" className="navbar-brand display-5">Logo</Link>
                <ul className="navbar-nav display-md-6">
                    <li className="nav-item">
                        <Link to="#" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">Features</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link disabled">Disabled</Link>
                    </li>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/service">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </nav> */}
            <Navbar sticky="top" bg="warning" expand={false} className="p-lg-4">
                <Container fluid>
                    <Link to="/" className="text-decoration-none text-dark">
                        <Navbar.Brand className="container border p-1">HeavyBite</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                            Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Login/>
            <Login/>
        </Fragment>
    );
}

export default TopNav;