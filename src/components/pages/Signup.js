import React from "react";
import signupImage from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration icon={signupImage} />
        <SignupForm />
      </div>
    </>
  );
}

export default Signup;
