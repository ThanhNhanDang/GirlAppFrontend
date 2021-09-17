import Announcement from "../components/Announcement";
import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dễ thương</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Bộ lọc:</FilterText>
          <Select>
            <Option disabled selected>
              Thể loại
            </Option>
            <Option>Tóc ngắn</Option>
            <Option>Đeo kính</Option>
            <Option>Học sinh</Option>
            <Option>Dễ thương</Option>
            <Option>Cool ngầu</Option>
            <Option>Sexy</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Quốc gia
            </Option>
            <Option>Việt Nam</Option>
            <Option>Hàn Quốc</Option>
            <Option>Trung Quốc</Option>
            <Option>Thái Lan</Option>
            <Option>Nhật Bản</Option>
            <Option>Châu Phi</Option>
            <Option>Châu Âu</Option>
            <Option>Châu Mĩ</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sắp xếp:</FilterText>
          <Select>
            <Option selected>Mới nhất</Option>
            <Option>Dưới 20$</Option>
            <Option>Giá (20$ - 40$)</Option>
            <Option>Giá (40$ - 80$)</Option>
            <Option>Giá (80$ - 160$)</Option>
            <Option>Trên 160$</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter/>
      <Footer />
    </Container>
  );
};

export default ProductList;
