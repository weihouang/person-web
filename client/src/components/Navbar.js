import React from "react";
import { Flex, Card, Typography, theme, Menu, Space, Switch } from "antd";
import {
  LinkedinOutlined,
  MailOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text, Link } = Typography;

const Navbar = () => {
  return (
    <Flex justify="space-between" align="center">
      <Space justify="space-around" size={"large"} style={{ color: "white" }}>
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </Space>
      <Flex size={"middle"} align="center" gap={"middle"}>
        <Link
          href="https://www.linkedin.com/in/wei-ho-uang-460353250/"
          target="_blank"
          style={{ marginTop: "2px" }}
        >
          <LinkedinOutlined style={{ fontSize: "24px" }} />
        </Link>
        <Link
          href="mailto:willy200335@gmail.com"
          target="_blank"
          style={{ marginTop: "2px" }}
        >
          <MailOutlined style={{ fontSize: "24px" }} />
        </Link>

        <Link
          href="https://github.com/weihouang"
          target="_blank"
          style={{ marginTop: "2px" }}
        >
          <GithubOutlined style={{ fontSize: "24px" }} />
        </Link>
        <Switch
          checkedChildren="Dark"
          unCheckedChildren="Light"
          defaultChecked
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
