import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
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

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const email = getValues("email");

  // LOADING
  if (loading) {
    <h3>Loading...</h3>;
  }

  // ERROR HANDLING
  let displayError;
  if (error) {
    displayError = (
      <p className="error-text text-danger text-start">
        Error: {error?.message}
      </p>
    );

    swal({
      title: error?.message,
      icon: "error",
    });
  }

  // FORM SUBMIT
  const onSubmit = async (data) => {
    const { email, password } = data;
    await signInWithEmailAndPassword(email, password);
    await swal({
      title: "You are logged in now!",
      icon: "success",
    });
    navigate(from, { replace: true });
  };

  useEffect(() => {
    // if (user) {
    //   swal({
    //     title: "You are logged in now!",
    //     icon: "success",
    //   });
    //   navigate(from, { replace: true });
    // }
  }, [user]);
  return (
    <div className="py-5">
      <div className="form-container col col-sm-6 col-md-6 col-lg-5 mx-auto">
        <div className="form-body py-4">
          <h2 className="mb-4 text-center"> Login!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Email"
              {...register("email", {
                required: "This input is required.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: `Please include an '@' in the email address. '${email}' is missing an '@`,
                },
              })}
            />
            {errors?.email && (
              <p className=" error-text text-danger text-start">
                {errors?.email?.message}
              </p>
            )}

            <input placeholder="Password" {...register("password")} />

            <input className="lr-btn" type="submit" value="Login" />
          </form>
          <AfterBeforeEffect />
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
