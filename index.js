const { response } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const firebase = require("firebase/app");

// Import Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDFyxl7vX9b9FG29wjnLaG74pfSlvnIQ2c",
  authDomain: "final-project-fall-2021-a6431.firebaseapp.com",
  projectId: "final-project-fall-2021-a6431",
  storageBucket: "final-project-fall-2021-a6431.appspot.com",
  messagingSenderId: "429756787453",
  appId: "1:429756787453:web:0615f2deba9e09f49eec94",
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index");
const createPostRoute = require("./routes/createPost");
const singlePostRoute = require("./routes/post");
const userPostsRoute = require("./routes/userPost");

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Pass to next layer of middleware
  next();
});

// Get all Post
app.use("/", indexRoute);
// Submit new post
app.use("/create", createPostRoute);
app.use("/post", singlePostRoute);
app.use("/user", userPostsRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
