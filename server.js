const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection({
    user: "root",
    database: "employee_db",
},
    console.log(`Connected to the employee_db`)
);

const addEmployee = async () => {
    const [responses] = await db.promise().query('SELECT id, title FROM roles');
    for (let i = 0; i < responses.length; i++) {
        let role = responses[i].title;
        roles.push(role);
    }
    id = results;
    const [employeeResults] = await db.promise().query('SELECT id, first_name, last_name FROM employees');
    for (let i = 0; i < employeeResults.length; i++) {
        let fullName = employeeResults[i].first_name + ' ' + employeeResults[i].last_name;
        employeeResults.push(fullName);
    }
    managerId = employeeResults;

    prompt([
        {
            name: 'firstName',
            message: 'What is the new employee`s first name?'
        },
        {
            name: 'lasstName',
            message: 'What is the new employee`s last name?'
        },
        {
            type: 'rawlist',
            name: 'employeeRole',
            message: 'Which role does this new employee fill?',
            choices: roles
        },
        {
            type: 'rawlist',
            name: 'employeeManager',
            message: 'Who is the manager for the new employee?',
            choices: 'employees'
        }
    ])
        .then(({ firstName, lastName, employeeRole, employeeManager }) => {
            roles = id.filter((one) => one.title === employeeRole)
            let managerId = employeeManager.split(' ').shift();
            employees = managerId.filter((one) => one.first_name === managerId)

            db.query(`INSERT INTO employees SET first_name="${firstName}", last_name="${lastName}", role_id="${roles[0].id}", manager_id="${employees[0].id}"`)
            db.query(allEmployees, (err, results) => {
                console.table(results, 'Employee has been added!')
                employee = [];
                roles = [];
                init();
            })
        });

};

const selectAll = (table) => {
    db.query('SELECT * FROM' + table, (err, results) => {
        console.table(results);
        init();
    });
}

const chooseOption = (type) => {
    switch (type) {
        case 'VIEW ALL EMPLOYEES': {
            selectAll('employee');
            break;
        }
        case 'VIEW ALL DEPARTMENTS': {
            selectAll('department');
            break;
        }
        case 'VIEW ALL ROLES': {
            selectAll('role');
            break;
        }
        case 'FIND TOTAL SALARIES PER DEPO': {
            db.query('SELECT SUM(quantity) AS total_in_salaries FROM department GROUP BY section', function (err, results) {
                console.log(results);
            });
        }
    }
}

const init = () => {
    prompt({
        type: 'rawlist',
        message: 'Choose one of the following categories to interact with',
        name: 'type',
        choices: [
            'VIEW ALL EMPLOYEES',
            'VIEW ALL DEPARTMENTS',
            'VIEW ALL ROLES',
            'VIEW DEPARTMENT PAYROLE',
            'ADD EMPLOYEE',
            'ADD DEPARTMENT',
            'ADD ROLE'
        ],
    })
        .then((answers) => {
            chooseOption(answers.type)
        });
}

init();