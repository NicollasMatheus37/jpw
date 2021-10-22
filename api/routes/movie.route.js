module.exports = function (app) {
    const controller = require('../controllers/movie.controller');

    app.route('/movies').get(controller.get);
    app.route('/movies').post(controller.post);

    app.route('/movies/:id').get(controller.find);
    app.route('/movies/:id').put(controller.update);
    app.route('/movies/:id').delete(controller.delete);
}