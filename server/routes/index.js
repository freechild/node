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


console.log(

'zero'.padStart(10)
);

async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const itr = gen();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
