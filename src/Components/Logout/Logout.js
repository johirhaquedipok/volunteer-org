import { signOut } from "firebase/auth";
import { Button } from "react-bootstrap";
// import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Logout = () => {
  const logout = () => {
    signOut(auth);
  };

  return <Button onClick={logout}>Sign Out</Button>;
};

export default Logout;
