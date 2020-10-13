import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

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

  render() {
    return (
      <div className="friends">
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
