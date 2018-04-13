'use strict';

module.exports = function(app) {
    var usersController = require('../controllers/usersController');
    var articlesController = require('../controllers/articlesController');
    
    app.route('/users')
        .get(usersController.list_all_users)
        .post(usersController.create_user);
    app.route('/article/')
        .post(articlesController.create_article);
    app.route('/articles/')
        .post(articlesController.get_articles_by_tag)
 /*   app.route('/articles/:articleId')
        .get(articlesController.get_article) /// no needed
        .put(articlesController.update_article)
        .delete(articlesController.delete_article);*/
}