import { useState } from "react";
import { signup } from "../../services/auth.service";
import { Button } from "../UI/Button";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    signup(name, email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-4"
    >
      <div className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Name"
          className="bg-transparent p-2 border border-solid rounded"
        />
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

export default Signup;
