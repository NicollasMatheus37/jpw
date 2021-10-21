module.exports = function (app) {
    const controller = require('../controllers/user.controller');

    app.route('/users')
        .get(controller.get)
        .post(controller.post);

    app.route('/users/:id')
        .get(controller.find)
        .post(controller.update)
        .delete(controller.delete);
}