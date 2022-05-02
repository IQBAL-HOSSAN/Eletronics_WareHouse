import React, { useEffect } from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

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
      <p className="text-danger">
        {" "}
        Error: {googleError?.message} {githubError?.message}{" "}
        {facebookError?.message}
      </p>
    );
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
      {displayError}
      <button
        onClick={handleSignInWithGoogle}
        className="d-block w-100 mt-3 py-2  rounded-pill"
      >
        <FaGoogle className="fs-4 me-2" /> Google Sign In
      </button>
      <button
        onClick={handleFacebookLogin}
        style={{ background: "#4267B2" }}
        className="d-block w-100 mt-3 py-2 text-white rounded-pill border "
      >
        <FaFacebook className="fs-4 me-2" /> Facebook Sign In
      </button>
      <button
        onClick={handleSignInWithGithub}
        className="d-block w-100 mt-3 py-2 border rounded-pill bg-black text-white"
      >
        <FaGithub className="fs-4 me-2" /> Github Sign In
      </button>
    </div>
  );
};

export default SocialLogin;
