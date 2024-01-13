import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export const Faq = () => {
  const style = {
    Btn: {
      border: 'none',
      padding: '3px 15px',
      backgroundColor: 'white',
      color: 'black',
      cursor: 'pointer',
      transition: 'salmon 0.3s ease',
    },
    BtnHover: {
      backgroundColor: 'salmon',
      color: 'white',
    },
    Accordion: {
      borderBottom: '1px solid #E6E8EC',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
    },
  };

  return (
    <>
      <h2 className="text-center">Frequently Asked Question</h2>
      <div className="text-center m-5 d-md-none">
        <Form.Select aria-label="Default select example fs-9">
          <option value="1">General</option>
          <option value="2">Support</option>
          <option value="3">Hosting</option>
          <option value="3">Product</option>
        </Form.Select>
      </div>
      <div className="text-center m-5 d-none d-xs-block">
        <button className="mx-2" style={style.Btn}>
          General
        </button>
        <button className="mx-2" style={style.Btn}>
          Support
        </button>
        <button className="mx-2" style={style.Btn}>
          Hosting
        </button>
        <button className="mx-2" style={style.Btn}>
          Product
        </button>
      </div>
      <Container className="px-lg-4 px-md-3 px-4">
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" style={style.Accordion}>
              <Accordion.Header>01 How Does It work?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={style.Accordion}>
              <Accordion.Header>
                02 How can i set up a new website
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={style.Accordion}>
              <Accordion.Header>03 How does it work?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" style={style.Accordion}>
              <Accordion.Header>04 How does it work?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" style={style.Accordion}>
              <Accordion.Header>05 How does it work?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </>
  );
};
