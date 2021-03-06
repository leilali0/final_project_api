const express = require("express");
const router = express.Router();

const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

// Allow post to request to creta a signle article from firebase
router.get("/", (req, res) => {
  const queryParams = req.query;
  const { imageAlt, imageSrc, message, rating, location, userID, userName } =
    queryParams;

  const setPost = firestore.addDoc(firestore.collection(db, "post"), {
    imageAlt,
    imageSrc,
    message,
    rating,
    location,
    userID,
    userName,
  });

  setPost
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
      res.send(`Error Submitting: ${error.toString()}`);
    });
});

module.exports = router;
