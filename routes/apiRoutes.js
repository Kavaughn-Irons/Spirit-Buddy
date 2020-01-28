const connection = require("./connection");
const express = require('express');
const router = express.Router();

module.exports = router;

//===========================================================================
// THIS SHOULD NOT BE ABLE TO PULL PERSONAL INFORMATION
// ALSO CHECK IF ACTIVE STATE IS TRUE OR FALSE
//=======================================querying the dummy data in sql======
router.post('/api/test', (req, res) => {
  const query = "SELECT * FROM test;";

  console.log(req.body.getID)

  res.send({success : "random"})

  // connection.query(query, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(500).send("Failed to retrieve Data")
  //   } else {
       
  //     return null;
  //   };
  // });
});



