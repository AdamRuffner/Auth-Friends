import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";
import Friend from "./Friend";

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
          {this.state.friends.map(friend => {
            return (
              <Friend
                key={friend.id}
                friend={friend}
                deleteFriend={this.deleteFriend}
              />
            );
          })}
        </div>
      );
    }
  }


export default Friends;

