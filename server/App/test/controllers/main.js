'use strict';

module.exports.home = (req, res, next) => {
  res.render('test/views/index');
}


module.exports.content = (req, res, next) => {
  res.render('test/views/content/01/index');
}