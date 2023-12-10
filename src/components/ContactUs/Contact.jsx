import React from "react";
import { Container } from "react-bootstrap";

export const Contact = () => {
  //   const style ={

  //   }
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Container>
          <div className="fs-3 fw-semibold mb-5 ">
            <p>Contact</p>
          </div>
          <hr />
          <div>
            <form>
              <div className="mb-3">
                <label htmlFor="nama" className="form-label">
                  Nama Kamu
                </label>
                <input type="text" className="form-control" id="nama" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="d-flex ">
                <div className="mb-3" style={{ width: "50%", marginRight: "10px" }}>
                  <label htmlFor="whatsApp" className="form-label">
                    WhatsApp
                  </label>
                  <input type="number" className="form-control" id="whatsApp" />
                </div>
                <div className="mb-3" style={{ width: "50%" }}>
                  <label htmlFor="asal" className="form-label">
                    Asal
                  </label>
                  <input type="text" className="form-control" id="asal" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="pesan" className="fs-5 fw-semibold">
                  Pesanmu
                </label>
                <textarea class="form-control" placeholder="Assalamualaikum" id="pesan" style={{ resize: "none", height: "10rem" }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary fw-semibold" style={{ borderRadius: "50px", padding:"3px 20px" }}>
                Send
              </button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};
