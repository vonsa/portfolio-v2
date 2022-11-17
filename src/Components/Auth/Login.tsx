import { useState } from "react";
import { login } from "../../services/auth.service";
import { Button } from "../UI/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    login(email, password).then(() => {
      window.location.href = "/blog/manage";
    }); // catch error?
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-4"
    >
      <h2 className="text-2xl font-bold">Login</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Email"
          className="bg-transparent p-2 border border-solid rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Password"
          className="bg-transparent p-2 border border-solid rounded"
        />
      </div>
      <Button submit>Submit</Button>
    </form>
  );
};

export default Login;
