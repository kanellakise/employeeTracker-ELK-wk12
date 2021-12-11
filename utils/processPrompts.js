const db = require("../config/connection");
const cTable = require('console.table');
const promptUser = require('../index');

// view all departments
const allDept = () => {
    const sql = `SELECT dept_name AS "Departments" FROM department;`;

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