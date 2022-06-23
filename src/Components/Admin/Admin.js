import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  let err;
  if (error) {
    err = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }

  let spinner;
  if (loading) {
    spinner = (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (user) {
    navigate("/", true);
  }

  return (
    <>
      {err}
      {spinner}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => signInWithEmailAndPassword(email, password)}>
        Sign In
      </button>
    </>
  );
};

export default Admin;
