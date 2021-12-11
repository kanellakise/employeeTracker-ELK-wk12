const db = require("../config/connection");
const promptUser = require('../index.js');

// view all departments
const allDept = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, results) => {
        if (err) throw err;
        console.table(('All Departments'), results);
    });
    promptUser();
};

// view all roles
const allRoles = () => {
    const sql = `SELECT * FROM role;`;

    db.query(sql, (err, results) => {
        if (err) throw err;
        console.table(('All Roles'), results);
    });
};

// view all employees
const allEmp = () => {

};

// add a department
const addDept = () => {

};

// add a role
const addRole = () => {

};

// add an employee
const addEmp = () => {

};

// update an employee role
const updateEmp = () => {

};

module.exports = { allDept, allRoles, allEmp, addDept, addRole, addEmp, updateEmp };