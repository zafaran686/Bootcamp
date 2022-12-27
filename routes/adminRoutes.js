var express = require('express');
var router = express.Router(); // 
const {adminController}= require ('../controllers');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const query = req.query;
  console.log(query);
  try {
    const result = await adminController.getAllAdmin(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async function(req, res, next) {
  const body = req.body;
  try {
    const result = await adminController.addAdmin(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/', async function(req, res, next) {
  const body = req.body;
  if (!body._id)
  return res.status(400).send({message: "_id id require"});
  try {
    const result = await adminController.updateAdmin(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/admin/:id', async function(req, res, next) {
  const id = req.params.id;
  console.log(id);
  try {
    const filter = {_id:id}; // filter and find 
    const result = await adminController.deleteAdmin(filter);
    res.status(200).send({message: 'Deleetd Successfully'});
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;
