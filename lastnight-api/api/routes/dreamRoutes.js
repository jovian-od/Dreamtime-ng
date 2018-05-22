'use strict'
module.exports = function (app) {
  var dreamList = require('../controllers/dreamController')

  // Dream Routes
  app.route('/dreams')
    .get(dreamList.list_all_dreams)
    .post(dreamList.create_a_dream)

  app.route('/dreams/:dreamId')
    .get(dreamList.read_a_dream)
    .put(dreamList.update_a_dream)
    .delete(dreamList.delete_a_dream)

  app.route('/dreams/search/:term')
    .get(dreamList.find_dream)

  app.route('/dreams/user/:term')
    .get(dreamList.find_user)
}
