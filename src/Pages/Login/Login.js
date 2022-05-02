import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import AfterBeforeEffect from "../../Components/AfterBeforeEffect/AfterBeforeEffect";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();

  // LOADING
  if (loading) {
    <h3>Loading...</h3>;
  }

  // ERROR

  // FORM SUBMIT
  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);
  return (
    <div className="py-5">
      <h2 className="mb-4">Please Login</h2>
      <div className="form-container">
        <div className="form-body py-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Email" {...register("email")} />
            <input placeholder="Password" {...register("password")} />

            <input type="submit" />
          </form>
          <AfterBeforeEffect />
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
