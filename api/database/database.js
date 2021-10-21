const sqlite3 = require('sqlite3').verbose();
const md5 = require('md5');

const DBSOURCE = "db.sqlite";

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');

        createSqlTables();
        createAdminUser();
    }
});

function createAdminUser() {
    const sql = 'INSERT INTO users (name, email, password) VALUES (?,?,?)';

    db.run(
        sql,
        ["admin", "admin@example.com", md5("admin123456")],
        (err) => { });
}

function createSqlTables() {
    createUsersTable();
    createMoviesTable();
    createCastsTable();
    createDirectorsTable();

};

function createUsersTable() {
    db.run(
        `CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            email text UNIQUE,
            password text,
            token text,
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => { });
}

function createMoviesTable() {
    db.run(
        `CREATE TABLE movies (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name text,
                    genre text,
                    release_date text
                    )`,
        (err) => { });
}

function createCastsTable() {
    db.run(
        `CREATE TABLE casts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name text,
                gender text,
                character text
                )`,
        (err) => { });
}

function createDirectorsTable() {
    db.run(
        `CREATE TABLE directors (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name text,
                    gender text
                    )`,
        (err) => { });
}

module.exports = db;