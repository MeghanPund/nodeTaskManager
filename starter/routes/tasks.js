const express = require('express');
const router = express.Router();

const {getAllTasks} = require('../controllers/tasks');



router.route('/').get((req,res)=> {getAllTasks});

module.exports = router