import { memo } from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  CustomContainer as Container,
  CustomColTop,
  CustomCol as Col,
} from "./styles";

const SEVEN_YEARS_LABEL = "7+";
const TEN_YEARS_LABEL = "10+";

const BannerDown = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <CustomColTop className="text-center" borderedRight>
          {SEVEN_YEARS_LABEL}
        </CustomColTop>
        <CustomColTop className="text-center">{TEN_YEARS_LABEL}</CustomColTop>
      </Row>
      <Row>
        <Col className="text-center" borderedRight>
          {t("bannerdown.years")}
        </Col>
        <Col className="text-center">{t("bannerdown.projects")}</Col>
      </Row>
    </Container>
  );
};

export default memo(BannerDown);
