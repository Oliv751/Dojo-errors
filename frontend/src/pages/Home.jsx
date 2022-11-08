import { useState } from "react";
import logo from "../assets/logo.svg";
import Counter from "../components/Counter/Counter";
import Message from "../components/Message/Message";
import Users from "../components/Users/Users";

export default function Home() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  return (
    <header className="App-header">
      <img className="App-logo" src={logo} alt="" />
      <p>Regardez mon beau compteur :</p>
      <Counter count={count} setCount={setCount} setMessage={setMessage} />

      {message.length !== 0 && <Message msg={message} />}
      <Users />
    </header>
  );
}
