var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://backend-service:33000')
    .then(function (response) {
      // handle success
      console.log(response.data);
      res.render('index', { title: response.data.value });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  
});

module.exports = router;
