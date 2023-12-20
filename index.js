require("dotenv").config();

const express = require("express");
const port = 3000;
const app = express();
const myData = {
  login: "Rahul-Maity",
  id: 113348978,
  node_id: "U_kgDOBsGRcg",
  avatar_url: "https://avatars.githubusercontent.com/u/113348978?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Rahul-Maity",
  html_url: "https://github.com/Rahul-Maity",
  followers_url: "https://api.github.com/users/Rahul-Maity/followers",
  following_url:
    "https://api.github.com/users/Rahul-Maity/following{/other_user}",
  gists_url: "https://api.github.com/users/Rahul-Maity/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Rahul-Maity/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Rahul-Maity/subscriptions",
  organizations_url: "https://api.github.com/users/Rahul-Maity/orgs",
  repos_url: "https://api.github.com/users/Rahul-Maity/repos",
  events_url: "https://api.github.com/users/Rahul-Maity/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Rahul-Maity/received_events",
  type: "User",
  site_admin: false,
  name: "Rahul Maity",
  company: null,
  blog: "",
  location: "India",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 28,
  public_gists: 0,
  followers: 2,
  following: 5,
  created_at: "2022-09-12T10:41:00Z",
  updated_at: "2023-12-17T06:38:28Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Chai@Twiter.com");
});
app.get("/github", (req, res) => {
  res.json(myData);
});
app.get("/login", (req, res) => {
  res.send("<h1>Plz login at promact.info </h1>");
});

//server running here
app.listen(process.env.PORT, () => {
  console.log(`App running on port ${port}`);
});
