import Logo from '../../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const IniNavbar = () => {
  return (
    <>
      <Navbar>
        <Container className="d-flex align-items-center">
          <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="me-5 fs-5 fw-semibold">
            <Nav.Link href="#" className="mt-1">
              Villa
            </Nav.Link>
            <Nav.Link href="#" className="mt-1">
              Paket Wisata
            </Nav.Link>
            <Nav.Link href="#">
              <button
                style={{
                  fontSize: '14px',
                  borderRadius: '80px',
                  padding: '4px 15px',
                  border: 'none',
                  fontWeight: 'semibold',
                  backgroundColor: 'white',
                  marginTop: '5px',
                }}
              >
                Kontak
              </button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
