const db = require("../database/database");
CastModel = require('../models/cast.model');

exports.get = (req, res) => {
    let sql = "select * from users"
    let params = []

    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(500).json({
                "code": 500,
                "error": res.message
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
    let sql = "select * from users where id = ?";
    let params = [req.params.id];

    db.get(sql, params, (err, row) => {
        if (err) {
            return res.status(500).json({
                "code": 500,
                "error": res.message
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
    let userModel = (new CastModel()).createFromReq(req);

    if (userModel.errors?.length) {
        return res.status(500).json({ "error": errors.join(",") });
    }

    const sql = 'INSERT INTO users (name, gender, character) VALUES (?,?,?)';

    db.run(sql, userModel.prepareToSave(), (err, result) => {
        if (err) {
            return res.status(500).json({
                "code": 500,
                "error": res.message
            })
        }

        res.json({
            "code": 200,
            "message": "success",
            "data": data,
            "id": this.lastID
        });
    });
};

exports.update = (req, res) => {
    let userModel = (new CastModel()).createFromReq(req);

    if (userModel.errors?.length) {
        return res.status(500).json({ "error": errors.join(",") });
    }

    const sql = `UPDATE users set
    name = COALESCE(?,name),
    gender = COALESCE(?,gender),
    character = COALESCE(?,character)
    WHERE id = ?`;

    db.run(sql, userModel.prepareToSave(), (err, result) => {
        if (err) {
            return res.status(500).json({
                "code": 500,
                "error": res.message
            })
        }
        res.json({
            "code": 200,
            message: "success",
            data: data,
            changes: this.changes
        })
    });
};

exports.delete = (req, res) => {
    const sql = 'DELETE FROM users WHERE id = ?';

    db.run(sql, req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({
                "code": 500,
                "error": res.message
            })
        }
        res.json({
            "code": 200,
            "message": "deleted", changes: this.changes
        })
    });
};