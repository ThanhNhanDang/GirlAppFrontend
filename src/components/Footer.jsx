import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../reponsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:"none"})}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Right = styled.div`
  flex: 1;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display:flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Girl App.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          placeat, labore nam non, aut officia vero autem hic voluptas provident
          dolorem deserunt, ad reiciendis vel quam rem odio assumenda! Fugit.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Link
              href="https://www.facebook.com/profile.php?id=100036518013283"
              target="_blank"
              title="Facebook"
            >
              <Facebook />
            </Link>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Link
              href="https://www.instagram.com/yesthanhnhan/"
              target="_blank"
              title="Instagram"
            >
              <Instagram />
            </Link>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Link
              href="https://twitter.com/ThanhNhanDev"
              target="_blank"
              title="Twitter"
            >
              <Twitter />
            </Link>
          </SocialIcon>
          <SocialIcon color="E60023">
            <Link
              href="https://www.pinterest.com/yesthanhnhan/_saved/"
              target="_blank"
              title="Pinterest"
            >
              <Pinterest />
            </Link>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Liên kết hữu ích</Title>
        <List>
          <ListItem>Trang chủ</ListItem>
          <ListItem>Giỏ hàng</ListItem>
          <ListItem>Dễ thương</ListItem>
          <ListItem>Quyến rũ</ListItem>
          <ListItem>Lạnh Lùng</ListItem>
          <ListItem>Tài khoản của tôi</ListItem>
          <ListItem>Theo dõi đơn hàng</ListItem>
          <ListItem>Danh sách yêu thích</ListItem>
          <ListItem>Điều khoản</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Liên hệ</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}}/> 301 Tôn Đản, P.15, Q.4, TP.Hồ Chí Minh
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}}/> +84 123 433 12
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}}/> thanhnhan.dev@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/VJKwzLr/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
