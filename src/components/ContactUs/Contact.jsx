import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { errorNotification, successNotification } from "../../utils/Notifications";

export const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const [showPhone, setShowPhone] = useState(false);
  const [send, setSend] = useState("1");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: null,
    asal: "",
    message: "",
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (send === "1") {
        event.preventDefault();
<<<<<<< HEAD
        try {
          emailjs.sendForm('service_6852cjr', 'template_0uwexia', form, {
            publicKey: 'uMJ9DGnQynwlhNM0J',
          });
          successNotification('Email');
        } catch (error) {
          errorNotification('Email');
          console.log(error);
        }
=======
        emailjs
          .sendForm("service_6852cjr", "template_0uwexia", form, {
            publicKey: "uMJ9DGnQynwlhNM0J",
          })
          .then(
            () => {
              successNotification("Email");
            },
            (error) => {
              errorNotification("Email");
              console.log(error);
            }
          );
>>>>>>> 50b68a6484a47b7219b42846c068be26c41bdac4
      } else {
        const phone = "+628562593941";
        const message = `Saya ${data.name} berasal dari ${data.asal}. ${data.message} `;
        const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
      }
    }

    setValidated(true);
  };

  const handleSelect = (e) => {
    const value = e.target.value;
    value === "1" ? (setShowEmail(true), setShowPhone(false), setSend("1")) : (setShowPhone(true), setShowEmail(false), setSend("2"));
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Container className="px-lg-4 py-lg-5 px-md-3 py-md-3 px-4 py-5">
        <div className="fs-3 fw-semibold mb-2 ">
          <p>Contact</p>
        </div>
        <hr />
        <div className="mt-3">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="mb-3">
              <Form.Group>
                <Form.Label className="form-label">Nama Kamu</Form.Label>
                <Form.Control required type="text" className="form-control" id="name" name="name" onChange={handleChange} />
                <Form.Control.Feedback type="invalid">Mohon isi nama kamu</Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group>
                <Form.Label className="form-label">Send Via</Form.Label>
                <Form.Select size="sm" className="form-control" onChange={(e) => handleSelect(e)}>
                  <option value="1">Email</option>
                  <option value="2">Whatsapp</option>
                </Form.Select>
              </Form.Group>
            </div>
            {showEmail && (
              <div className="d-flex ">
                <div className="mb-3 fade-in" style={{ width: "50%", marginRight: "10px" }}>
                  <Form.Group>
                    <Form.Label className="form-label">Email</Form.Label>
                    <Form.Control required type="email" className="form-control" id="email" name="email" onChange={handleChange} />
                    <Form.Control.Feedback type="invalid">Mohon isi email kamu</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="mb-3 fade-in" style={{ width: "50%" }}>
                  <Form.Group>
                    <Form.Label className="form-label">Asal</Form.Label>
                    <Form.Control required type="text" className="form-control" id="asal" name="asal" onChange={handleChange} />
                    <Form.Control.Feedback type="invalid">Mohon isi asal kamu</Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>
            )}
            {showPhone && (
              <>
                {/* <div className="mb-3 fade-in">
                  <Form.Group>
                    <Form.Label className="form-label">WhatsApp</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      className="form-control"
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Mohon isi nomor whatsapp kamu
                    </Form.Control.Feedback>
                  </Form.Group>
                </div> */}
                <div className="mb-3 fade-in">
                  <Form.Group>
                    <Form.Label className="form-label">Asal</Form.Label>
                    <Form.Control required type="text" className="form-control" id="asal" name="asal" onChange={handleChange} />
                    <Form.Control.Feedback type="invalid">Mohon isi asal kamu</Form.Control.Feedback>
                  </Form.Group>
                </div>
              </>
            )}
            <div className="mb-3">
              <Form.Group>
                <Form.Label htmlFor="pesan" className="fs-5 fw-semibold">
                  Pesanmu
                </Form.Label>
<<<<<<< HEAD
                <Form.Control
                  required
                  as="textarea"
                  className="form-control"
                  placeholder="Assalamualaikum"
                  id="message"
                  name="message"
                  onChange={handleChange}
                  style={{ resize: 'none', height: '10rem' }}
                />
                <Form.Control.Feedback type="invalid">
                  Mohon isi pesan kamu
                </Form.Control.Feedback>
=======
                <Form.Control required as="textarea" className="form-control" placeholder="Assalamualaikum" id="message" name="message" onChange={handleChange} style={{ resize: "none", height: "10rem" }} />
                <Form.Control.Feedback type="invalid">Mohon isi pesan yang ingin disampaikan</Form.Control.Feedback>
>>>>>>> 50b68a6484a47b7219b42846c068be26c41bdac4
              </Form.Group>
            </div>
            <Button type="submit" className="btn btn-primary fw-semibold" style={{ borderRadius: "50px", padding: "3px 20px" }}>
              Send
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};
