module.exports = function (app) {
    const controller = require('../controllers/cast.controller');

    app.route('/casts').get(controller.get);
    app.route('/casts').post(controller.post);

    app.route('/casts/:id').get(controller.find);
    app.route('/casts/:id').put(controller.update);
    app.route('/casts/:id').delete(controller.delete);
}