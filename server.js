const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection({
    user: "root",
    database: "employee_db",
});

chooseOption = (type) => {
switch (type) {
    case 'VIEW ALL EMPLOYEES': {
        db.query('SELECT * FROM employee', (err, employee) => {
            console.table(employee);
        });
    }
    case 'VIEW ALL DEPARTMENTS': {
        db.query('SELECT * FROM department', (err, department) => {
            console.table(department);
        });
    }
    case 'VIEW ALL ROLES': {
        db.query('SELECT * FROM role', (err, roles) => {
            console.table(roles);
        });
    };
};
}