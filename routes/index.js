const express = require("express");
const router = express.Router();

const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

router.get("/", (req, res) => {
  const post = firestore.getDocs(firestore.collection(db, "post"));
  const postArray = [];

  post
    .then((response) => {
      response.forEach((doc) => {
        postArray.push(doc.data());
      });
      return res.send(postArray);
    })
    .catch(function (error) {
      console.log("Error:", error);
      return res.send(error);
    });
});

module.exports = router;
