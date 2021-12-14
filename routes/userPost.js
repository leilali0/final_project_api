const express = require("express");
const router = express.Router();

const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

//Get single article based on ID from firebase
router.get("/:userID", (req, res) => {
  const userID = req.params.userID;
  const posts = firestore.query(
    firestore.collection(db, "post"),
    firestore.where("userID", "==", userID)
  );

  const querySnapshot = firestore.getDocs(posts);
  const postsArray = [];

  querySnapshot
    .then((response) => {
      response.forEach((doc) => {
        const docData = doc.data();
        docData.id = doc.id;
        postsArray.push(docData);
      });
      res.send(postsArray);
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
