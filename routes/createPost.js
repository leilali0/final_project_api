const express = require("express");
const { collection } = require("firebase/firestore");
const router = express.Router();

const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

// Allow post to request to creta a signle article from firebase
router.get("/", (req, res) => {
  const queryParams = req.query;
  const { imageAlt, imageSrc, message, rating, location, userId } = queryParams;

  const setPost = firestore.addDoc(firestore.collection(db, "post"), {
    imageAlt,
    imageSrc,
    message,
    rating,
    location,
    userId,
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
