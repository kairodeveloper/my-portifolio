import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";

const BannerDown = () => {
  return (
    <Container
      style={{
        minHeight: "5rem",
        borderRadius: "0.5rem",
        backgroundColor: "#111111a9",
        padding: "1rem",
      }}
    >
      <Row>
        <Col
          style={{
            fontWeight: "bold",
            color: "orange",
            borderRight: "1px solid orange",
          }}
          className="text-center"
        >
          7+
        </Col>
        <Col
          style={{
            fontWeight: "bold",
            color: "orange",
            borderRight: "1px solid orange",
          }}
          className="text-center"
        >
          10+
        </Col>
        <Col
          style={{ fontWeight: "bold", color: "orange" }}
          className="text-center"
        >
          10+
        </Col>
      </Row>
      <Row>
        <Col
          style={{ borderRight: "1px solid orange" }}
          className="text-center"
        >
          years of experience
        </Col>
        <Col
          style={{ borderRight: "1px solid orange" }}
          className="text-center"
        >
          projects
        </Col>
        <Col className="text-center">projects</Col>
      </Row>
    </Container>
  );
};

export default memo(BannerDown);
