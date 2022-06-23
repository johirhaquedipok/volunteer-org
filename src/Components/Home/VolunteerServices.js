import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const VolunteerServices = ({ services }) => {
  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src={services.img}
          style={{ height: "243px" }}
        />
        <Card.Body>
          <Card.Title>{services.voltrService}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default VolunteerServices;
