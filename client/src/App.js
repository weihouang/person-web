import backgroundImage1 from "./assets/backgroundImage1.png";
import React from "react";
import { useState, useEffect } from "react";
import { Layout, ConfigProvider, theme, Image } from "antd";

import Navbar from "./components/Navbar";
import MainText from "./components/MainText";
import ProjectGallery from "./components/ProjectGallery";

const App = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };
  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
      }}
    >
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <MainText />
          <ProjectGallery />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
