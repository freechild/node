import express from "express";
const router = express.Router();

import test from "../App/test/controllers/main";


//test router
router.get('/test', test.home);

// base
router.get('/',(req,res) =>{
  res.render('index', { title: 'start' });
})

export default router;
