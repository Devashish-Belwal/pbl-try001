import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icon from '../assets/PBLIcon.png';
import icons from '../assets/Team_Icons/Team_icons.js';
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
                        <NavDropdown.Item href="bandipur_blazers"><img src={icons.team01} alt='team img' style={{ width: '2rem', height: '2rem' }}/> Bandipur Blazers</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="corbett_crushers"><img src={icons.team02} alt='team img' style={{ width: '2rem', height: '2rem' }}/> Corbett Crushers</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="gir_gliders"><img src={icons.team03} alt='team img' style={{ width: '2rem', height: '2rem' }}/> Gir Gliders</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="kanha_knights"><img src={icons.team04} alt='team img' style={{ width: '2rem', height: '2rem' }}/> Kanha Knights</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="kairanga_kaisers"><img src={icons.team05} alt='team img' style={{ width: '2rem', height: '2rem' }}/> Kaziranga Kaisers</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="nallamala_nets"><img src={icons.team06} alt='team img' style={{ width: '2rem', height: '2rem' }}/> Nallamala Nets</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="namdapha_nimblebird"><img src={icons.team07} alt='team img' style={{ width: '2rem', height: '2rem' }}/> Namdapha Nimblebirds</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="nilgiri_ninjas"><img src={icons.team08} alt='team img' style={{ width: '2rem', height: '2rem' }}/> Nilgiri Ninjas</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="pichavaram_phoenixes"><img src={icons.team09} alt='team img' style={{ width: '2rem', height: '2rem' }}/> Pichavaram Phoenixes</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="saranda_shuttlers"><img src={icons.team10} alt='team img' style={{ width: '2rem', height: '2rem' }}/> Saranda Shuttlers</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="sundarbans_smashers"><img src={icons.team11} alt='team img' style={{ width: '2rem', height: '2rem' }}/> Sundarbans Smashers</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="waynad_warriors"><img src={icons.team12} alt='team img' style={{ width: '2rem', height: '2rem' }}/> Wayanad Warriors</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="editorial">Editorial</Nav.Link>
                    <Nav.Link href="contact-us">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
    )
}

export default navbar