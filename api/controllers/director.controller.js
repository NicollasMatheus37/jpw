const db = require("../database/database");
DirectorModel = require('../models/director.model');

exports.get = (req, res) => {
    let sql = "select * from directors";

    db.all(sql, [], (err, rows) => {
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
    let sql = "select * from directors where id = ?";

    db.get(sql, [req.params.id], (err, row) => {
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
    let model = (new DirectorModel()).createFromReq(req);

    if (model.errors?.length) {
        return res.status(500).json({ "error": model.errors.join(",") });
    }

    const sql = 'INSERT INTO directors (name, gender) VALUES (?,?)';

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
    let model = (new DirectorModel()).createFromReq(req);

    if (model.errors?.length) {
        return res.status(500).json({ "error": model.errors.join(",") });
    }

    const sql = `UPDATE directors set
    name = COALESCE(?,name),
    gender = COALESCE(?,gender)
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
    const sql = 'DELETE FROM directors WHERE id = ?';

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