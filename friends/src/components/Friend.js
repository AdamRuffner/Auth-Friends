import React from "react";
import { Link } from "react-router-dom";

export default function Friend({ friend }) {
  return (
    <div className="friend">
      <Link to={`/friends/${friend.id}`}>
        <h3>Name: {friend.name}</h3>
      </Link>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
    </div>
  );
}
