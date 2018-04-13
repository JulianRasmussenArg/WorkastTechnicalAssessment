'use strict';

module.exports = function(app) {
    var usersController = require('../controllers/usersController');
    var articlesController = require('../controllers/articlesController');
    
    app.route('/users')
        .get(usersController.list_all_users)
        .post(usersController.create_user);
}