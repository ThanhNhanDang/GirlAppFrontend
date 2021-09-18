import React from "react";
import styled from "styled-components";
import { mobile } from "../reponsive";
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ fontSize: "11px", fontWeight: "400" })}
`;

const Announcement = () => {
  return (
    <Container>
      Ưu đãi siêu khủng! Giao hàng miễn phí cho các đơn đặt hàng trên $ 50
    </Container>
  );
};

export default Announcement;
