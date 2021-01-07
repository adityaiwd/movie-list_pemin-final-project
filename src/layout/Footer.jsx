import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  font-size:1rem;
  flex-wrap:wrap;
`;

const FootWrapper = styled.footer`
  width: 100%;
  background-color: #eee;
  padding: 2.5rem;
  position:absolute;
  bottom: 0;
`

const Footer = () => {
  return (
    <FootWrapper>
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
    </FootWrapper>
  );
};

export default Footer;
