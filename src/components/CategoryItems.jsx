import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  &:hover .info {
    display: flex;
    background-color: rgba(128, 131, 134, 0.498);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
 

`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;
const Button = styled.button`
    
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItems = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info className="info">
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItems;
