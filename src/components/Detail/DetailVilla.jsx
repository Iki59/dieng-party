import React from 'react';
import { Container } from 'react-bootstrap';
import { DetailVillaDown } from './DetailVillaDown';
import { DetailVillaUp } from './DetailVillaUp';
import dataVilla from '../../../data-villa.json';
import { useParams } from 'react-router-dom';

export const DetailVilla = () => {
  const { id } = useParams();
  console.log('ini id nya', id);

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
