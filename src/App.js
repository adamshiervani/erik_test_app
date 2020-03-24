import React from "react";
import "./styles.css";

export default function App() {
  const friends = ["Matias", "Erik", "Nacho"];

  return (
    <div className="App">
      <Header name="Adam" age={3200} />
      <FriendsList friends={friends} />
    </div>
  );
}

function Header({ age, name }) {
  return (
    <>
      <h1>
        Hello {name}. You are {age} year{age > 1 ? "s" : ""} old
      </h1>
    </>
  );
}

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((name, index) => {
        return <li key={`${name}_${index}`}>{name}</li>;
      })}
    </ul>
  );
}
