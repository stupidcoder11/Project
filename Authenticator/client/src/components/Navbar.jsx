import {React,  Fragment } from "react";
import { Link } from "react-router-dom";
import { Form, FormControl, Button, Nav, Offcanvas, Container, Navbar } from "react-bootstrap"

function TopNav() {
    return (
        <Fragment>
            <Navbar fixed="top" bg="warning" expand={false} className="p-sm-4 p-3">
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
                        scroll={true}
                        >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <span className="display-2">Otaku</span>
                                <span className="ms-2 text-success">&#x25cf;</span>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link className="text-decoration-none text-dark mb-2 display-6" to="/posts">Post</Link>
                            <Link className="text-decoration-none text-warning mb-2 display-6" to="/about">About</Link>
                            </Nav>
                            <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Anime name..."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-dark">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default TopNav;