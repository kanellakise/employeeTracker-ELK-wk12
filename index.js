const inquirer = require('inquirer');
const db = require("./config/connection");
const consoleTable = require('console.table');
const mysql = require('mysql2');

const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit program']
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
                    role.id AS ID, role.title AS Title, role.salary AS Salary, dept_name AS Department
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
    const addDeptQuestions = [
        {
            type: 'input',
            name: 'dept_name',
            message: 'Please enter a department name',
            validate: deptInput => {
                if (deptInput) {
                    return true;
                } else {
                    console.log('Please enter a department name!');
                    return false;
                }
            }
        }
    ];

    inquirer.prompt(addDeptQuestions).then((answers) => {
        console.log(answers.dept_name);
        const deptName = answers.dept_name;
        const sql = `INSERT INTO department (dept_name) VALUES ('${deptName}');`
        console.log(sql);
        db.query(sql, (err, results) => {
            if (err) throw err;
            console.log('Department Added!');
        });
        setTimeout(promptUser, 1000);
    });
};

// add a role
const addRole = () => {
    const addDeptQuestions = [
        {
            type: 'input',
            name: 'dept_name',
            message: 'Please enter a department name',
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please enter a department name!');
                    return false;
                }
            }
        }
    ];

    inquirer.prompt(addDeptQuestions).then((answers) => {
        const sql = `INSERT INTO department (dept_name) VALUES ('${answers.dept_name}')`

        db.query(sql, (err, results) => {
            if (err) throw err;
            console.log('Department Added!');
        });
        setTimeout(promptUser, 1000);
    });
};

// add an employee
const addEmp = () => {
    const addEmpQuestions = [
        {
            type: 'input',
            name: 'first_name',
            message: "Please enter the employee's first name",
            validate: empInput => {
                if (empInput) {
                    return true;
                } else {
                    console.log('Please enter a first name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'last_name',
            message: "Please enter the employee's last name",
            validate: empInput => {
                if (empInput) {
                    return true;
                } else {
                    console.log('Please enter a last name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'role',
            message: "Please enter desired role ID number",
            validate: empInput => {
                if (empInput) {
                    return true;
                } else {
                    console.log('Please enter a role ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manager',
            message: "Please select desired manager's employee ID number",
            validate: empInput => {
                if (empInput) {
                    return true;
                } else {
                    console.log('Please enter an employee ID number!');
                    return false;
                }
            }
        }
    ];

    inquirer.prompt(addEmpQuestions).then((answers) => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
                    VALUES 
                        ('${answers.first_name}', '${answers.last_name}', ${answers.role}, ${answers.manager})`

        db.query(sql, (err, results) => {
            if (err) throw err;
            console.log('Employee Added!');
        });
        setTimeout(promptUser, 1000);
    });
};

// update an employee role
const updateEmp = () => {

};

module.exports = promptUser;

promptUser();