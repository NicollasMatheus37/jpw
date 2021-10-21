module.exports = function (app) {
    const controller = require('../controllers/movie.controller');

    app.route('/movies')
        .get(controller.get)
        .post(controller.post);

    app.route('/movies/:id')
        .get(controller.find)
        .post(controller.update)
        .delete(controller.delete);
}