import React from "react";
import { Col, Row, Typography, Flex, Card } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const MainText = () => {
  return (
    <Row>
      <Col span={16}>
        <Typography>
          <Title>Hello, I'm Wei Ho Uang</Title>

          <Title style={{ marginTop: "0px" }}>
            Innovative Software Engineer with a Passion for Developing
            Cutting-Edge Applications
          </Title>
          <Paragraph>
            {" "}
            An enthusiastic and creative software engineer with a strong focus
            on user-centric design and efficient, scalable code. With a passion
            for both backend and frontend technologies turning complex problems
            into elegant digital solutions. I thrive in dynamic environments and
            am always eager to embrace new challenges in the ever-evolving world
            of tech.
          </Paragraph>
        </Typography>
      </Col>
      <Col span={8}></Col>
    </Row>
  );
};

export default MainText;
