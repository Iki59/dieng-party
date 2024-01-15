import React from 'react';
import { Col, Row } from 'react-bootstrap';
import GoHome from '../../assets/button.png';
import Location from '../../assets/location.png';
import Share from '../../assets/share.png';
import Love from '../../assets/love.png';
import More from '../../assets/more.png';
import Close from '../../assets/close.png';
import Avatar from '../../assets/avatar.png';
import Star from '../../assets/Frame 855.png';
import Shape from '../../assets/Shape.png';
import Mark from '../../assets/Line.png';
import Primary from '../../assets/primary img.png';
import Thumb01 from '../../assets/thumb 01.png';
import Thumb03 from '../../assets/thumb 03.png';
import Thumb02 from '../../assets/thumb 02.png';
import BtnAll from '../../assets/btn-all.png';
import PropTypes from 'prop-types';

export const DetailVillaUp = ({ dataVilla }) => {
  console.log('ini data villa', dataVilla);
  return (
    <>
      <Row>
        <Col>
          <div className="mt-3">
            <a href="#">
              <img src={GoHome} alt="button" />
            </a>
          </div>
        </Col>
        <Col>
          <div
            style={{
              marginLeft: '12rem',
              marginTop: '1rem',
              fontSize: '0.8rem',
              fontWeight: 'semibold',
            }}
          >
            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: '22px',
              }}
            >
              Home
            </a>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: '22px',
              }}
            >
              Stay
            </a>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: '22px',
              }}
            >
              New Zealand
            </a>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: '22px',
              }}
            >
              South Island
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mt-3 fw-bold">
            <h2 className="fs-1">Spectacular views of Queenstown</h2>
          </div>
        </Col>
        <Col>
          <div style={{ marginLeft: '15rem', marginTop: '-3rem' }}>
            <a href="#" style={{ marginRight: '5px' }}>
              <img src={Location} alt="location" />
            </a>
            <a href="#" style={{ marginRight: '5px' }}>
              <img src={Share} alt="share" />
            </a>
            <a href="#" style={{ marginRight: '-12px', marginLeft: '-18px' }}>
              <img src={Love} alt="love" style={{ marginTop: '80px' }} />
            </a>
            <a href="#" style={{ marginRight: '5px' }}>
              <img src={More} alt="more" />
            </a>
            <a href="#" style={{ marginRight: '5px' }}>
              <img src={Close} alt="close" />
            </a>
          </div>
        </Col>
      </Row>
      <div style={{ marginTop: '-1.5rem' }}>
        <img src={Avatar} alt="ava" style={{ marginRight: '20px' }} />
        <img src={Star} alt="star" />
        <p
          style={{
            display: 'inline-block',
            marginLeft: '5px',
            marginRight: '20px',
            color: 'grey',
          }}
        >
          (256 reviews)
        </p>
        <img src={Shape} alt="home" />
        <p
          style={{
            display: 'inline-block',
            marginLeft: '5px',
            marginRight: '20px',
            color: 'grey',
          }}
        >
          Rekomendasi
        </p>
        <img src={Mark} alt="mark" />
        <p
          style={{
            display: 'inline-block',
            marginLeft: '5px',
            marginRight: '20px',
            color: 'grey',
          }}
        >
          Queenstown, Otago, New Zealand
        </p>
      </div>
      <div className="d-flex">
        <div>
          <img src={Primary} alt="primary" style={{ width: '98%' }} />
        </div>
        <div>
          <div className="mb-2">
            <img src={Thumb01} alt="thumb" style={{ width: '98%' }} />
          </div>
          <div className="mb-2">
            <img src={Thumb03} alt="thumb" style={{ width: '98%' }} />
          </div>
          <div className="mb-2">
            <img src={Thumb02} alt="thumb" style={{ width: '98%' }} />
          </div>
        </div>
      </div>
      <img
        src={BtnAll}
        alt="button"
        style={{ marginTop: '-129px', marginLeft: '20px', cursor: 'pointer' }}
      />
    </>
  );
};

DetailVillaUp.propTypes = {
  dataVilla: PropTypes.any,
};
