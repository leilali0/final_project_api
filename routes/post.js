const express = require("express");
const router = express.Router();

const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

//Get single article based on ID from firebase
router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const singlePost = firestore.getDoc(firestore.doc(db, "post", postId));

  singlePost
    .then((response) => {
      const postData = response.data();
      if (postData) return res.send(postData);
      return res.send({ message: `no doc...... sorry` });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/", (req, res) => {
  res.send("Please include an ID");
});

module.exports = router;
