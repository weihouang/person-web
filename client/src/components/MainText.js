import React from "react";
import { Col, Row, Typography, Flex, Card, Image } from "antd";
import oldComputer from "../assets/oldComputer.png";
const { Title, Paragraph, Text, Link } = Typography;

const MainText = () => {
  return (
    <Row>
      <Col span={16}>
        <Typography style={{ align: "center" }}>
          <Title style={{ width: "100%", fontSize: "30px" }}>
            Hello, I'm Weiho
          </Title>

          <Title style={{ marginTop: "0px", width: "60%" }}>
            Innovative Software Engineer with a Passion for Developing
            Cutting-Edge Applications
          </Title>
          <Paragraph style={{ width: "55%" }}>
            An enthusiastic and creative software engineer with a strong focus
            on user-centric design and efficient, scalable code. With a passion
            for both backend and frontend technologies turning complex problems
            into elegant digital solutions. I thrive in dynamic environments and
            am always eager to embrace new challenges in the ever-evolving world
            of tech.
          </Paragraph>
        </Typography>
      </Col>
      <Col span={8}>
        <Image src={oldComputer}></Image>
      </Col>
    </Row>
  );
};

export default MainText;
