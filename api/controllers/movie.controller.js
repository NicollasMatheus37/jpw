const db = require("../database/database");
MovieModel = require('../models/movie.model');

exports.get = (req, res) => {
    let sql = "select * from movies"
    let params = []

    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": err
            })
        }
        res.json({
            "code": 200,
            "message": "success",
            "data": rows
        })
    });
};

exports.find = (req, res) => {
    let sql = "select * from movies where id = ?";
    let params = [req.params.id];

    db.get(sql, params, (err, row) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": err
            })
        }
        res.json({
            "code": 200,
            "message": "success",
            "data": row
        })
    });
}

exports.post = (req, res) => {
    let userModel = (new MovieModel()).createFromReq(req);

    if (userModel.errors?.length) {
        return res.json({ "error": errors.join(",") });
    }

    const sql = 'INSERT INTO movies (name, genre, release_date) VALUES (?,?,?)';

    db.run(sql, userModel.prepareToSave(), (err, result) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": err
            })
        }

        res.json({
            "code": 200,
            "message": "success",
            "data": result,
            "id": this.lastID
        });
    });
};

exports.update = (req, res) => {
    let userModel = (new MovieModel()).createFromReq(req);

    if (userModel.errors?.length) {
        return res.json({ "error": errors.join(",") });
    }

    const sql = `UPDATE movies set
    name = COALESCE(?,name),
    genre = COALESCE(?,genre),
    release_date = COALESCE(?,release_date)
    WHERE id = ?`;

    db.run(sql, userModel.prepareToSave(), (err, result) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": err
            })
        }
        res.json({
            "code": 200,
            message: "success",
            data: result,
            changes: this.changes
        })
    });
};

exports.delete = (req, res) => {
    const sql = 'DELETE FROM movies WHERE id = ?';

    db.run(sql, req.params.id, (err, result) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": err
            })
        }
        res.json({
            "code": 200,
            "message": "deleted", changes: this.changes
        })
    });
};