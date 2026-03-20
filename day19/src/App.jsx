import React, { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setSuccess("");
    if (email === "" || password == "") {
      setError("All fields are required!");
    } else if (password.length < 6) {
      setError("Password must be atleast 6 characters");
    } else if (!isLogin && password !== confirmpassword) {
      setError("Password do not match!");
    } else {
      setError("");
      setSuccess(isLogin ? "Login Successful ✅" : "Signup Successful 🎉");

      setInterval(() => {
        setSuccess("");
      }, 5000);

      setEmail("");
      setPassword("");
      setConfirmpassword("");
    }
  }

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "SignUp"}</h2>
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type={showpassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Enter confirm password"
            value={confirmpassword}
            onChange={(e) => {
              setConfirmpassword(e.target.value);
            }}
          />
        )}
        <p
          className="pass"
          onClick={() => {
            setShowpassword(!showpassword);
          }}
        >
          {showpassword ? "Hide Password" : "Show Password"}
        </p>

        {error && <p className="err">{error}</p>}
        {success && (
          <p style={{ color: "green", marginTop: "10px" }}>{success}</p>
        )}
        <button className="submit" type="submit">
          {isLogin ? "Login" : "Signup"}
        </button>
        <p
          className="btn"
          onClick={() => {
            setIsLogin(!isLogin);
            setError("");
            setSuccess("");
          }}
        >
          {isLogin ? "Create an account" : "Already have an account"}
        </p>
      </form>
    </div>
  );
};

export default App;
