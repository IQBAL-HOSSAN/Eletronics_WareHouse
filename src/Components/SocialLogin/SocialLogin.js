import React, { useEffect } from "react";
import "./SocialLogin.css";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const SocialLogin = () => {
  // sign in with google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // sign in with github
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  // sign in with facebook
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // handle error
  let displayError;
  if (googleError || githubError || facebookError) {
    displayError = (
      <p className="">
        Error: {googleError?.message}
        {githubError?.message}
        {facebookError?.message}
      </p>
    );

    swal({
      title:
        googleError?.message || githubError?.message || facebookError?.message,
      text: "You clicked the button!",
      icon: "error",
    });
  }

  // loading
  if (googleLoading || githubLoading || facebookLoading) {
    <p>Loading...</p>;
  }

  useEffect(() => {
    if (googleUser || githubUser || facebookUser) {
      navigate(from, { replace: true });
    }
  }, [googleUser || githubUser || facebookUser]);
  // console.log(googleError);
  // handle sign in with google btn
  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
  };

  // facebook sign in
  const handleFacebookLogin = async () => {
    await signInWithFacebook();
  };

  // Sign In with github
  const handleSignInWithGithub = async () => {
    await signInWithGithub();
  };

  return (
    <div className="d-block">
      <button
        onClick={handleSignInWithGoogle}
        className=" d-flex align-items-center w-100 mt-3 py-2  rounded-pill"
      >
        <div className="social-icon">
          <FcGoogle className="fs-4  " />
        </div>
        <div className="social-name"> Google Sign In</div>
      </button>
      <button
        onClick={handleFacebookLogin}
        style={{ background: "#4267B2" }}
        className="d-flex align-items-center w-100 mt-3 py-2 text-white rounded-pill border "
      >
        <div className="social-icon">
          <FaFacebook className="fs-4 " />
        </div>{" "}
        <div className="social-name">Facebook Sign In</div>
      </button>
      <button
        onClick={handleSignInWithGithub}
        className="d-flex align-items-center w-100 mt-3 py-2 border rounded-pill bg-black text-white"
      >
        <div className="social-icon">
          <FaGithub className="fs-4" />
        </div>{" "}
        <div className="social-name">Github Sign In</div>
      </button>
    </div>
  );
};

export default SocialLogin;
