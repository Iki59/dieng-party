import Logo from "../../assets/RY (1).png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const IniNavbar = () => {
  return (
    <>
      <div className="sticky-top">
        <Navbar expand="md" className="mb-0" style={{ backdropFilter: "blur(8px)" }}>
          <Container className="px-lg-4 px-md-3 px-4 d-flex align-items-center">
            <Navbar.Brand>
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto fs-5 fw-semibold text-center">
                <Nav.Link href="#" className="mt-1">
                  Villa
                </Nav.Link>
                <Nav.Link href="#" className="mt-1">
                  Paket Wisata
                </Nav.Link>
                {/* <Nav.Link href="#">
                  <button
                    style={{
                      border: "2px solid var(--Neutrals-6, #E6E8EC)",
                      borderRadius: "80px",
                      padding: "4px 15px",
                      fontWeight: "normal",
                      backgroundColor: "white",
                    }}
                  >
                    Kontak
                  </button>
                </Nav.Link> */}
                <Nav.Link href="#" className="mt-1">
                  Kontak
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
