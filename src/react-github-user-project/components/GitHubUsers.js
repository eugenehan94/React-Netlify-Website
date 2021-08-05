import React from "react";
import "../css/GitHubUsers.css";
import { FaGithub } from "react-icons/fa";
const GitHubUsers = ({ users, removeUser, id }) => {
  return (
    <div className="Github-flex-row-container">
      {users.map((user) => {
        return (
          <div className="Github-flex-row-item" key={user.id}>
            <img src={user.avatar_url} className="githubUsers" alt=""></img>
            <p>{user.login}</p>
            <a href={user.html_url} target="_blank">
              <FaGithub size="30px" color="rgb(226, 226, 204)" />
            </a>
            <div className="Github-btn-container">
              <button
                className="Github-btn"
                onClick={() => removeUser(user.id)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GitHubUsers;
