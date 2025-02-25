import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user] = useRef(null);
  const dispatch = useDispatch();

  const userArray = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password123",
    },
    {
      name: "Alice Smith",
      email: "alicesmith@example.com",
      password: "securePassword",
    },
    {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      password: "mySecretPassword",
    },
  ];
  function findUserAndCheckCredentials(name, email, password) {
    const user = userArray.find((user) => user.name === name);

    if (user) {
      // If a user with the provided name exists
      if (user.email === email && user.password === password) {
        return true;
      } else {
        return false;
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const user = findUserAndCheckCredentials(name, email, password);
    user.current = findUserAndCheckCredentials(name, email, password);
    console.log(user.current);
    dispatch(login({ name: name, email: email, password: password }));
  };
  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="name"
          placeholder="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit " className="submit_btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
