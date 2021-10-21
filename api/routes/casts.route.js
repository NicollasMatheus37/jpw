module.exports = function (app) {
    const controller = require('../controllers/cast.controller');

    app.route('/casts')
        .get(controller.get)
        .post(controller.post);

    app.route('/casts/:id')
        .get(controller.find)
        .post(controller.update)
        .delete(controller.delete);
}