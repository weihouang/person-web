import { Card, Flex, Space } from "antd";
import React from "react";
const { Meta } = Card;

const Project = () => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          style={{ width: "100%", height: "50%" }}
        />
      }
      style={{ width: "70%", height: "200%" }}
    >
      <Meta
        title={
          <Flex vertical justify="flex-start">
            <p style={{ margin: "0px" }}>Roam</p>
            <Flex Hoorizontal>
              <p style={{ margin: "0px" }}>Python</p>
              <p style={{ margin: "0px" }}>Flask</p>
              <p style={{ margin: "0px" }}>React</p>
              <p style={{ margin: "0px" }}>MongoDB </p>
              <p style={{ margin: "0px" }}>Swagger</p>
            </Flex>
          </Flex>
        }
        description="This is the description"
      />
    </Card>
  );
};

export default Project;
