module.exports = function (app) {
    const controller = require('../controllers/director.controller');

    app.route('/directors').get(controller.get);
    app.route('/directors').post(controller.post);

    app.route('/directors/:id').get(controller.find);
    app.route('/directors/:id').put(controller.update);
    app.route('/directors/:id').delete(controller.delete);
}