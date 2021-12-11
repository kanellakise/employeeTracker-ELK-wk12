const inquirer = require('inquirer');
const { allDept, allRoles, allEmp, addDept, addRole, addEmp, updateEmp } = require('./utils/processPrompts.js');

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
                    updateEmp;
                    break;
            }
        });
};

promptUser();

module.exports = promptUser;