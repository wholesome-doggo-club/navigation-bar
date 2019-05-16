const controllers = require('./controllers.js');
const router = require('express').Router();

router
  .route('/nav')
  .get(controllers.get)
  .post(controllers.post)
  // .put(controllers.update)
  .delete(controllers.delete)

module.exports = router;