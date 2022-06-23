import axios from "axios";
import { useEffect, useState } from "react";

const useAllEffect = () => {
  const [volunteerSupport, setVolunteerSupport] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("http://localhost:9000/db");
        const data = response.data;

        setVolunteerSupport(data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  return [volunteerSupport, setVolunteerSupport];
};

export default useAllEffect;
