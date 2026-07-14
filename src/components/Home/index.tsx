import { memo } from "react";
import { Col, Image, Row } from "react-bootstrap";
import LeftContent from "./LeftContent";
import { CustomContainer as Container, JustifiedCol, SpanColImage } from "./styles";

const Home = () => {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row>
          <JustifiedCol
            sm={{ span: 12, order: "last" }}
            md={{ span: 7, order: "first" }}
            lg={6}
          >
            <LeftContent />
          </JustifiedCol>

          <Col lg={1} className="d-xs-none d-sm-none d-md-none d-lg-block" />
          <Col
            md={5}
            lg={5}
            className="d-xs-none d-sm-none d-md-block d-lg-block align-middle"
          >
            <SpanColImage>
              <Image
                fluid
                roundedCircle
                src="https://scontent.fthe7-1.fna.fbcdn.net/v/t1.6435-9/180350552_2212422708893999_3259667848565145523_n.jpg?stp=dst-jpg_tt6&cstp=mx652x652&ctp=s652x652&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGmi4Sr0fbnU_F9ScdRemn2X0_yoLkkxLZfT_KguSTEvMzxYOcpBN0iS-Q1XS2DxCfSV0Ee8d0GEcAU7Oi4N7r&_nc_ohc=HiqmwwZrSZcQ7kNvwFH_b3o&_nc_oc=Adq393ZdJ7J6SY-3mp3YLhfiR1lfamx9JOLzeVRknj6r_8QOocCy2Y79HM7Ai1MwAxBbA44AebRB2ACHxVCM7nKU&_nc_zt=23&_nc_ht=scontent.fthe7-1.fna&_nc_gid=f1LLBnioNUJ2jPUhUYxcnA&_nc_ss=7b2a8&oh=00_AQA_6YwyynWVl1M_-rRz6WGx2chEV3YHgPwy_mEGfZe5Og&oe=6A7D323E"
              />
            </SpanColImage>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default memo(Home);
