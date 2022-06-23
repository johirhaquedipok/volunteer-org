import { Col, Row } from "react-bootstrap";
import useAllEffect from "../Hooks/useAllEffect";
import VolunteerServices from "./VolunteerServices";
const Home = () => {
  const [volunteerSupport] = useAllEffect();

  return (
    <>
      <h1>Volunteer</h1>
      <Col>
        <Row xs={1} md={3} className="g-4">
          {volunteerSupport.map((services) => (
            <VolunteerServices key={services._id} services={services} />
          ))}
        </Row>
      </Col>
    </>
  );
};

export default Home;
