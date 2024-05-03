import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

   const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          border: "10px solid rgba(0, 0, 0, 0.05)",
          background: "#B784B7",
          width: 500,
          height: 500,
          textAlign: "center",
        }}
      >
        First Name :
        <input
          onChange={(event) => {
            const value = event.target.value;
            setFirstName(value);
          }}
          style={{
            padding: 10,
            margin: 10,
          }}
          type="text"
          placeholder="firstName"
        ></input>
        <br />
        Last Name :
        <input
          onChange={(event) => {
            const value = event.target.value;
            setLastName(value);
          }}
          style={{
            padding: 10,
            margin: 10,
          }}
          type="text"
          placeholder="lastName"
        ></input>
        <br />
        Password :
        <input
          onChange={(event) => {
            const value = event.target.value;
            setPassword(value);
          }}
          style={{
            padding: 10,
            margin: 10,
          }}
          type="text"
          placeholder="password"
        ></input>
        <br />
        Email :
        <input
          onChange={(event) => {
            const value = event.target.value;
            setUserName(value);
          }}
          style={{
            padding: 10,
            margin: 10,
          }}
          type="text"
          placeholder="userName"
        ></input>
        <br />
        <br />
        <div>
          <button
            onClick={async () => {
              try {
                const response = await fetch("http://localhost:8000/signup", {
                  method: "POST",
                  body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    password: password,
                    userName: userName,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                });
                if (!response.ok) {
                  //ok is prefedined
                  const errData = await response.json();
                  // console.log(errData);
                  alert(errData.msg);
                } else {
                   navigate("/login");
                  alert("sign")
                }
              } catch (e) {
                alert("something error occured");
              }
            }}
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
