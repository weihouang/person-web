import React from "react";
import Project from "./Project";
import { Row, Col } from "antd";

const ProjectGallery = () => {
  return (
    <Row>
      <Col span={12} style={{ display: "flex", justifyContent: "center" }}>
        <Project />
      </Col>
      <Col span={12} style={{ display: "flex", justifyContent: "center" }}>
        <Project />
      </Col>
      <Col
        span={12}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Project />
      </Col>
      <Col span={12} style={{ display: "flex", justifyContent: "center" }}>
        <Project />
      </Col>
      <Col span={12} style={{ display: "flex", justifyContent: "center" }}>
        <Project />
      </Col>
      <Col span={12} style={{ display: "flex", justifyContent: "center" }}>
        <Project />
      </Col>
    </Row>
  );
};

export default ProjectGallery;
