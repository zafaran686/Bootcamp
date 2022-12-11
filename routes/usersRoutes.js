var express = require('express');
var router = express.Router(); // 
const {usersController}= require ('../controllers');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const query = req.query;
  console.log(query);
  try {
    const result = await usersController.getAllUsers(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async function(req, res, next) {
  const query = req.body;
  try {
    const result = await usersController.addUser(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;
