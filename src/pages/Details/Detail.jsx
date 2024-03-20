import React from 'react';
import { DetailVilla } from '../../components/Detail/DetailVilla';
import { IniNavbar } from '../../components/Navbar/iniNavbar';
import { useParams } from 'react-router-dom';
import dataVilla from '../../../data-villa.json';

export const Detail = () => {
  const { id } = useParams();
  const villa = dataVilla.find((item) => item.id == id);
  console.log('ini villa 1', villa);

  return (
    <>
      <div style={{ marginTop: '8rem' }}>
        <IniNavbar />
        <DetailVilla data={villa} />
      </div>
    </>
  );
};
