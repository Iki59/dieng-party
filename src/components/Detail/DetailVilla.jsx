import React from "react";
import { Container } from "react-bootstrap";
import { DetailVillaDown } from "./DetailVillaDown";
import { DetailVillaUp } from "./DetailVillaUp";

export const DetailVilla = () => {
  return (
    <>
      <Container className="px-lg-4 py-lg-5 px-md-3 py-md-3 px-4 py-5">
        <DetailVillaUp />
        <DetailVillaDown />
      </Container>
    </>
  );
};
