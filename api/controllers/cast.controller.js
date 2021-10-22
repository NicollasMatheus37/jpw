const db = require("../database/database");
CastModel = require('../models/cast.model');

exports.get = (req, res) => {
    let sql = "select * from casts"
    let params = []

    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(500).json({
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
    let sql = "select * from casts where id = ?";
    let params = [req.params.id];

    db.get(sql, params, (err, row) => {
        if (err) {
            return res.status(500).json({
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
    let model = (new CastModel()).createFromReq(req);

    if (model.errors?.length) {
        return res.status(500).json({ "error": model.errors.join(",") });
    }

    const sql = 'INSERT INTO casts (name, gender, character) VALUES (?,?,?)';

    db.run(sql, model.prepareToSave(), (err, result) => {
        if (err) {
            return res.status(500).json({
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
    let model = (new CastModel()).createFromReq(req);

    if (model.errors?.length) {
        return res.status(500).json({ "error": model.errors.join(",") });
    }

    const sql = `UPDATE casts set
    name = COALESCE(?,name),
    gender = COALESCE(?,gender),
    character = COALESCE(?,character)
    WHERE id = ?`;

    db.run(sql, model.prepareToSave(), (err, result) => {
        if (err) {
            return res.status(500).json({
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
    const sql = 'DELETE FROM casts WHERE id = ?';

    db.run(sql, req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({
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