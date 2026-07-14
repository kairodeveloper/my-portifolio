import { memo } from "react";
import { CustomContainer as Container } from "./styles";
import { Col, Row } from "react-bootstrap";
import LeftContent from "./LeftContent";

const Home = () => {
  return (
    <>
      <Container>
        <Row style={{ height: "100%" }}>
          <LeftContent />
          <Col sm={2}>Foto</Col>
          <Col sm={5}>Foto</Col>
        </Row>
      </Container>
    </>
  );
};

export default memo(Home);
