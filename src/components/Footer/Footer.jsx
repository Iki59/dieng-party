import React from 'react';
import Logo from '../../assets/logo.png';
import { Col, Row } from 'react-bootstrap';

export const Footer = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          marginBottom: '1rem',
          marginTop: '2rem',
        }}
      >
        <div
          style={{
            width: '85%',
          }}
        >
          {/* <div className="d-flex mb-2">
            <div className="me-5">
              <img src={Logo} style={{ width: '8rem', marginRight: '6rem' }} />
            </div>
            <div> */}
          <Row className="px-2 px-sm-0">
            <Col md={3} className="mb-4">
              <img src={Logo} style={{ width: '12rem' }} />
            </Col>
            <Col md={2} className="d-sm-block d-flex">
              <p className="me-5" style={{ marginBottom: '2rem' }}>
                Villa
              </p>
              <p>Paket Wisata</p>
            </Col>
            <Col md={2} className="d-sm-block d-flex">
              <p className="me-5" style={{ marginBottom: '2rem' }}>
                Villa
              </p>
              <p>Paket Wisata</p>
            </Col>
            <Col md={2} className="d-sm-block d-flex">
              <p className="me-5" style={{ marginBottom: '2rem' }}>
                Villa
              </p>
              <p>Paket Wisata</p>
            </Col>
            <Col md={3}>
              <p className="fw-bold">Join our community 🔥</p>
            </Col>
            <div className="mt-4">
              <p className="fs-10">
                Copyright © 2023 Techmas Dev. All rights reserved
              </p>
            </div>
          </Row>
          {/* </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
