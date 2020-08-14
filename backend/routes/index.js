const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  const date = new Date();
  axios.get('http://numbersapi.com/' + date.getDate())
    .then(function (response) {
      // handle success
      console.log(response.data);
      res.json({ value: response.data })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
});

module.exports = router;
