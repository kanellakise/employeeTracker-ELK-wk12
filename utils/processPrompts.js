// const db = require("../config/connection");
// const cTable = require('console.table');
// const promptUser = require('../index.js');

// // view all departments
// const allDept = () => {
//     const sql = `SELECT dept_name AS "Departments" FROM department;`;

//     db.query(sql, (err, results) => {
//         if (err) throw err;
//         console.table(('All Departments'), results);
//     });
//     promptUser();
// };

// // view all roles
// const allRoles = () => {
//     const sql = `SELECT * FROM role;`;

//     db.query(sql, (err, results) => {
//         if (err) throw err;
//         console.table(('All Roles'), results);
//     });
//     // promptUser();
// };

// // view all employees
// const allEmp = () => {
//     const sql = `SELECT e.id AS 'ID',
//                 e.first_name AS 'First Name',
//                 e.last_name AS 'Last Name',
//                 role.title AS 'Job Title',
//                 department.dept_name AS 'Department',
//                 role.salary AS 'Salary',
//                 CONCAT(m.first_name,' ',m.last_name) AS Manager FROM employee e
//                 LEFT JOIN employee m ON m.id = e.manager_id
//                 JOIN role ON e.role_id = role.id
//                 JOIN department ON department.id = role.department_id;`
//     // promptUser();
// };

// // add a department
// const addDept = () => {

// };

// // add a role
// const addRole = () => {

// };

// // add an employee
// const addEmp = () => {

// };

// // update an employee role
// const updateEmp = () => {

// };

// module.exports = { allDept, allRoles, allEmp, addDept, addRole, addEmp, updateEmp };