import React from 'react';
import { Container } from 'react-bootstrap';
import { DetailVillaDown } from './DetailVillaDown';
import { DetailVillaUp } from './DetailVillaUp';
import dataVilla from '../../../data-villa.json';

export const DetailVilla = () => {
  const url = window.location.href;
  const segments = url.split('/');
  const id = segments[segments.length - 1];

  const villa = dataVilla.find((item) => item.id == id);
  return (
    <>
      <Container>
        <DetailVillaUp dataVilla={villa} />
        <DetailVillaDown dataVilla={villa} />
      </Container>
    </>
  );
};
