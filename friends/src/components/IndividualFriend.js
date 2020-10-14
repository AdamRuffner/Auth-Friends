import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function IndividualFriend() {
  const [friend, setFriend] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/friends/${id}`)
      .then((res) => {
        setFriend(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="friend">
      <p>Name: {friend.name}</p>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
    </div>
  );
}
