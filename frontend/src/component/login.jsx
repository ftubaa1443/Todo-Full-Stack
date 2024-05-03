import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
              const response = await fetch("http://localhost:8000/login", {
                method: "POST",
                body: JSON.stringify({
                  userName: userName,
                  password: password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              });
              console.log(response);
              if (!response.ok) {
                const errData = await response.json();
                alert(errData.msg);
              } else {
                navigate('/create-todo');
              }
            } catch (e) {
              alert("something error occured");
            }
          }}
        >
          Login
        </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
