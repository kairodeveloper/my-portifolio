import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const BannerDown = () => {
  const { t } = useTranslation();

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
          }}
          className="text-center"
        >
          10+
        </Col>
      </Row>
      <Row>
        <Col
          className="text-center"
          style={{ borderRight: "1px solid orange" }}
        >
          {t('bannerdown.years')}
        </Col>
        <Col className="text-center">{t('bannerdown.projects')}</Col>
      </Row>
    </Container>
  );
};

export default memo(BannerDown);
