import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  width: 100%;
  background-color: #eee;
  padding: 2rem 12%;
  position:absolute;
  bottom: 0;
  height:5rem;
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <Foot>
      <div style={{ display: "flex", textTransform: "uppercase" }}>
        <p style={{ fontWeight: "700", marginRight: 5 }}>
          Pemrograman Integratif{" "}
        </p>
        <p style={{ fontWeight: "300" }}> Final Project</p>
      </div>
      <div style={{ display: "flex", textTransform: "uppercase" }}>
        <p style={{ fontWeight: "700", marginRight: 5 }}>Kelompok 5 - </p>
        <p style={{ fontWeight: "300" }}> Kelas TI-A</p>
      </div>
    </Foot>
  );
};

export default Footer;
