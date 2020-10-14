import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";

class Friends extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        this.setState({
          friends: res.data,
        });
      });
  };

  onSubmit = (data) => {
    axiosWithAuth()
      .post("/api/friends", data)
      .then((res) => {
        this.setState({
          ...this.state,
          friends: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="friends">
        <FriendForm onSubmit={this.onSubmit} />
        {this.state.friends.map((friend) => (
          <>
            <div className="friend-container">
              <p>{friend.name}</p>
            </div>

            <div className="age">
              <p>{friend.age}</p>
            </div>
            <div className="email">
              <p>{friend.email}</p>
            </div>
          </>
        ))}
      </div>
    );
  }
}

export default Friends;
