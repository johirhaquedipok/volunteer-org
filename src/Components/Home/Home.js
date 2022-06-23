import useAllEffect from "../Hooks/useAllEffect";
import VolunteerServices from "./VolunteerServices";

const Home = () => {
  const [volunteerSupport] = useAllEffect();
  console.log(volunteerSupport);
  return (
    <div>
      <h1>Volunteer</h1>
      {volunteerSupport.map((services) => (
        <VolunteerServices key={services._id} services={services} />
      ))}
    </div>
  );
};

export default Home;
