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

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

app.use("/", indexRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
