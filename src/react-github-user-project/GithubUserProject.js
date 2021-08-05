import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import GitHubUsers from "./components/GitHubUsers";
import Loading from "./components/Loading";
import "./css/GithubUserProject.css";

const url = "https://api.github.com/users";

const GithubUserProject = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeUser = (id) => {
    const newList = users.filter((user) => user.id !== id);
    setUsers(newList);
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
      setLoading(false);
      console.log(users);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <h1 className="github_user_title">GitHub Users List</h1>
      <GitHubUsers key={users.id} users={users} removeUser={removeUser} />
    </div>
  );
};

export default GithubUserProject;
