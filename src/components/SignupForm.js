import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Signup.module.css";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [agree, setagree] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    //do validation

    if (password !== confirmpassword) {
      return setError("Password don't match!!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create a account!");
    }
  }

  return (
    <Form className={`${classes.signup}`} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter Name"
        icon="person"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        type="email"
        value={email}
        required
        onChange={(e) => setemail(e.target.value)}
        placeholder="Enter Email"
        icon="alternate_email"
      />
      <TextInput
        type="password"
        placeholder="Enter Password"
        required
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        icon="lock"
      />
      <TextInput
        type="password"
        value={confirmpassword}
        required
        onChange={(e) => setconfirmpassword(e.target.value)}
        placeholder="Confirm Password"
        icon="lock_clock"
      />
      <Checkbox
        text="I agree to the Terms &amp; Conditions"
        required
        value={agree}
        onChange={(e) => setagree(e.target.value)}
      />
      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
