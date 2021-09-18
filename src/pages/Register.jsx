import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/zrQmLcb/hinh-nen-hot-girl-cho-may-tinh-16-1.jpg") right;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>TẠO MỘT TÀI KHOẢN</Title>
        <Form>
          <Input placeholder="tên của bạn" />
          <Input placeholder="họ của bạn" />
          <Input placeholder="tên đăng nhập" />
          <Input placeholder="email" />
          <Input placeholder="mật khẩu" />
          <Input placeholder="xác nhận mật khẩu" />
          <Agreement>
            Bằng cách tạo tài khoản, tôi đồng ý với việc xử lý dữ liệu cá nhân
            của mình theo <b>CHÍNH SÁCH BẢO MẬT</b>
          </Agreement>
          <Button>TẠO MỚI</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
