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
import { toast } from "react-toastify";

const Register = () => {
  const { register, handleSubmit } = useForm();
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

  const [sendPasswordResetEmail, resetSending, resetError] =
    useSendPasswordResetEmail(auth);

  // FORM ON SUBMIT
  const onSubmit = async (data) => {
    const { email, password } = data;

    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    toast("send email");

    await sendPasswordResetEmail(email);

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

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  return (
    <div className="py-5">
      <h2 className="mb-4">Please Register!</h2>
      <div className="form-container py-5">
        <div className="form-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Name"
              {...register("name", { required: true })}
            />
            <input
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <input
              placeholder="Password"
              {...register("password", { required: true })}
            />

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
