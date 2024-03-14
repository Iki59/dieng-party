import Logo from "../../assets/RY (1).png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const IniNavbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div>
        <Navbar expand="md" className="fixed-top shadow" style={{ backdropFilter: "blur(5px)" }}>
          <Container className="px-lg-4 px-md-3 px-4 d-flex align-items-center">
            <Navbar.Brand>
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto fs-5 fw-semibold text-center">
                <div onClick={() => scrollToSection("villa")} style={{ cursor: "pointer", marginRight: "0.5rem" }}>
                  <p className="">Cabin</p>
                </div>
                <div onClick={() => scrollToSection("homestay")} style={{ cursor: "pointer", marginRight: "0.5rem" }}>
                  <p className="">Homestay</p>
                </div>
                <div onClick={() => scrollToSection("testimonial")} style={{ cursor: "pointer", marginRight: "0.5rem" }}>
                  <p className="">Testimonial</p>
                </div>
                <div onClick={() => scrollToSection("contact")} style={{ cursor: "pointer" }}>
                  <p className="">Contact</p>
                </div>
                {/* <Nav.Link href="#" className="mt-1">
                  Villa
                </Nav.Link>
                <Nav.Link href="#" className="mt-1">
                  Paket Wisata
                </Nav.Link> */}
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
                {/* <Nav.Link href="#" className="mt-1">
                  Kontak
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
