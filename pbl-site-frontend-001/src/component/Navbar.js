import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icon from '../assets/two.png';
import '../styles/Navbar.css';

function navbar() {
    return (
    <Container>
        <Navbar expand="lg" className="custom-navbar">
            <Navbar.Brand href="home">
                <img src={Icon} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
            </Navbar.Brand>
            <Navbar.Brand href="home">Paradox Badminton League</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="fixtures">Fixtures</Nav.Link>
                    <NavDropdown title="Teams" id="basic-nav-dropdown">
                    <NavDropdown.Item href="teams01">Team 01</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="teams02">Team 02</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="teams03">Team 03</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="teams04">Team 04</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="teams05">Team 05</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="teams06">Team 06</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="teams07">Team 07</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="teams08">Team 08</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="teams09">Team 09</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="teams10">Team 10</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="teams11">Team 11</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="teams12">Team 12</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="contact-us">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
    )
}

export default navbar