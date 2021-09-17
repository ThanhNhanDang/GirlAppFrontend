import React from "react";
import styled from "styled-components";
import { categories } from "../data.jsx";
import CategoryItems from "./CategoryItems";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    `;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id}></CategoryItems>
      ))}
    </Container>
  );
};

export default Categories;
