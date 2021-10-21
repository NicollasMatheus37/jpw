module.exports = function (app) {
    const controller = require('../controllers/director.controller');

    app.route('/directors')
        .get(controller.get)
        .post(controller.post);

    app.route('/directors/:id')
        .get(controller.find)
        .post(controller.update)
        .delete(controller.delete);
}