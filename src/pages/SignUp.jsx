// import React, { useState } from "react";

import { useState } from "react";

export const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userName);
    console.log(password);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            if (password !== e.target.value) {
              setPasswordError("not password match");
            } else {
              setPasswordError("");
            }
            setConfirmPassword(e.target.value);
          }}
          required
        />

        <br />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <button type="submit">SignUp</button>
      </form>
    </>
  );
};

-[];
