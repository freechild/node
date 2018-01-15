import express from "express";
const router = express.Router();

import test from "../App/test/controllers/main";



//test router
router.get('/test', test.home);
router.get('/content', test.content);
router.get('/content/*', test.content);

// base
router.get('/',(req,res) =>{
  res.render('index', { title: 'start' });
})

export default router;


// console.log(

// 'zero'.padStart(10)
// );

async function* gen(i) {
  while(i <= 100)
    yield ++i;
}
const itr = gen(99);
// console.log(itr.next());

var map = new Map();
map.set('hero','Hero');
map.set('test','jj');

const [c, ,d] = [1,2,3]
console.log(c);
console.log(d);

console.log(
  Array.from('zero')
);
