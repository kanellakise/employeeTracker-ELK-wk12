const inquirer = require('inquirer');
const db = require("./config/connection");
const consoleTable = require('console.table');

const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
            }
        ])
        .then(answers => {
            switch (answers.menu) {
                case 'View all departments':
                    allDept();
                    break;
                case 'View all roles':
                    allRoles();
                    break;
                case 'View all employees':
                    allEmp();
                    break;
                case 'Add a department':
                    addDept();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmp();
                    break;
                case 'Update an employee role':
                    updateEmp();
                    break;
            }
        });
};

// view all departments
const allDept = () => {
    const sql = `SELECT dept_name AS "Departments" FROM department;`;

    db.query(sql, (err, results) => {
        if (err) throw err;
        console.table(('All Departments'), results);
    });
    setTimeout(promptUser, 1000);
};

// view all roles
const allRoles = () => {
    const sql = `SELECT 
                    role.title AS Title, role.salary AS Salary, dept_name AS Department
                FROM
                    role
                        JOIN
                    department ON role.department_id = department.id;`;

    db.query(sql, (err, results) => {
        if (err) throw err;
        console.table(('All Roles'), results);
    });
    setTimeout(promptUser, 1000);
};

// view all employees
const allEmp = () => {
    const sql = `SELECT 
                    e.id AS 'ID',
                    e.first_name AS 'First Name',
                    e.last_name AS 'Last Name',
                    role.title AS 'Job Title',
                    department.dept_name AS 'Department',
                    role.salary AS 'Salary',
                    CONCAT(m.first_name, ' ', m.last_name) AS Manager
                FROM
                    employee e
                        LEFT JOIN
                    employee m ON m.id = e.manager_id
                        JOIN
                    role ON e.role_id = role.id
                        JOIN
                    department ON department.id = role.department_id;`;

    db.query(sql, (err, results) => {
        if (err) throw err;
        console.table(('All Roles'), results);
    });
    setTimeout(promptUser, 1000);
};

// add a department
const addDept = () => {
    const sql = ``

    db.query(sql, (err, results) => {
        if (err) throw err;
        console.table(('Department Added!'), results);
    });
    setTimeout(promptUser, 1000);
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

module.exports = promptUser;

promptUser();