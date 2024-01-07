import React from "react";
import { Container } from "react-bootstrap";
import { DetailVillaDown } from "./DetailVillaDown";
import { DetailVillaUp } from "./DetailVillaUp";

export const DetailVilla = () => {
  return (
    <>
      <Container>
        <DetailVillaUp />
        <DetailVillaDown />
      </Container>
    </>
  );
};
