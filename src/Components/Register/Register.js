import Spinner from "react-bootstrap/Spinner";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error1] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error2] = useUpdateProfile(auth);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    console.log(name, email, password);
    // create user
    await createUserWithEmailAndPassword(email, password);
    // update username and others
    await updateProfile({ name });
  };
  let err;
  if (error1 || error2) {
    err = (
      <div>
        <p className="text-danger">
          Error: {error1?.message} {error2?.message}
        </p>
      </div>
    );
  }

  let spinner;
  if (loading || updating) {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          placeholder="name"
          {...register("name", { required: true })}
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Register;
