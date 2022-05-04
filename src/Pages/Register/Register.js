import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import AfterBeforeEffect from "../../Components/AfterBeforeEffect/AfterBeforeEffect";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Register = () => {
  const {
    register,
    watch,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const email = getValues("email");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // FIREBASE AUTHENTICATION
  // CREATE USER WITH EMAIL AND PASSWORD
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // SEND EMAIL VERIFICATION
  const [sendEmailVerification, verificationSending, verificationError] =
    useSendEmailVerification(auth);

  // LOADING
  if (loading || verificationSending) {
    <p>Loading...</p>;
  }

  // ERROR HANDLING
  let displayError;
  if (error || verificationError) {
    displayError = (
      <p className="error-text text-danger text-start">
        Error: {error?.message} {verificationError?.message}
      </p>
    );

    swal({
      title: error?.message || verificationError?.message,
      icon: "error",
    });
  }

  // FORM ON SUBMIT
  const onSubmit = async (data) => {
    const { email, password } = data;

    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    await swal({
      title: "Send email",
      text: "You clicked the button!",
      icon: "success",
    });

    navigate(from, { replace: true });

    // CREATE USER ON MONGODB DATABASE
    // const url = `http://localhost:8000/api/products`;
    fetch(`http://localhost:8000/api/auth/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.error("error", err));
  };

  return (
    <div className="py-5">
      <div className="form-container col col-sm-6 col-md-6 col-lg-5 py-4 mx-auto">
        <div className="form-body ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="mb-4 text-center"> Register!</h2>
            <input placeholder="Name" {...register("name")} />
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
              <p className="error-text text-danger text-start">
                {errors?.email?.message}
              </p>
            )}

            <input
              placeholder="Password"
              {...register("password", {
                required: "This input is required.",
                // pattern: {
                //   value:
                //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
                //   message: `Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character!`,
                // },
              })}
            />
            {errors?.password && (
              <p className="error-text text-danger text-start">
                {errors?.password?.message}
              </p>
            )}
            <input type="submit" value="Register" />
          </form>

          {/* after & before line */}
          <AfterBeforeEffect></AfterBeforeEffect>
          {/* login with social media */}
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
