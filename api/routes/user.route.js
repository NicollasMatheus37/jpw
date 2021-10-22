module.exports = function (app) {
    const controller = require('../controllers/user.controller');

    app.route('/users').get(controller.get);
    app.route('/users').post(controller.post);

    app.route('/users/:id').get(controller.find);
    app.route('/users/:id').put(controller.update);
    app.route('/users/:id').delete(controller.delete);
}