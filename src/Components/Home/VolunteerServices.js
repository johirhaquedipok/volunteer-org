import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const VolunteerServices = ({ services }) => {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={services.img} />
          <Card.Body>
            <Card.Title>{services.volntrName}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default VolunteerServices;
