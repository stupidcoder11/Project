import {React,  Fragment } from "react";
import { Link } from "react-router-dom";

import { Form, FormControl, Button, NavDropdown, Nav, Offcanvas, Container, Navbar } from "react-bootstrap"

function TopNav() {
    return (
        <Fragment>
            <Navbar sticky="top" bg="warning" expand={false} className="p-sm-4 p-3">
                <Container fluid>
                    <Link to="/" className="text-decoration-none text-dark">
                        <span className="h1 text-dark">Otaku</span>
                        <span className="ms-2 text-success">&#x25cf;</span>
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
                        {/* <Nav.Link href="#action1">Home</Nav.Link> */}
                        <Link className="text-decoration-none text-dark" to="/signup">Signup</Link>
                        <Link className="text-decoration-none text-dark" to="/">Login</Link>
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
        </Fragment>
    );
}

export default TopNav;