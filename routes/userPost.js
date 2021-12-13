const express = require("express");
const router = express.Router();

const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

//Get single article based on ID from firebase
router.get("/user/:id", (req, res) => {
  const userID = req.params.userID;
  const userPosts = firestore.getDoc(firestore.doc(db, "post", userID));
  const postArray = [];

  userPosts
    .then((response) => {
      response.forEach((doc) => {
        const docData = doc.data();
        docData.id = doc.id;
        postArray.push(docData);
      });
      return res.send(postArray);
    })
    .catch(function (error) {
      console.log("Error:", error);
      return res.send(error);
    });
});

router.get("/", (req, res) => {
  res.send("Please include an ID");
});

module.exports = router;
