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

const selectAll = (table) => {
    return db.promise().query('SELECT * FROM ' + table);
};

const insert = (table, data) => {
    db.query('INSERT INTO ?? SET ?', [table, data], (err) => {
        if (err) return console.error(err);
        console.log('\nSuccessfully created employee!\n');
        init();
    });
};

const addEmployee = async () => {
    const [roleData] = await selectAll('role');
    const [employeeData] = await selectAll('employee');
    const roles = roleData.map(role => {
        return {
            name: role.title,
            value: role.id
        }
    });
    const managers = employeeData.map(employee => {
        return {
            name: employee.first_name + ' ' + employee.last_name,
            value: employee.id
        }
    });
    prompt([
        {
            name: 'first_name',
            message: 'What is the new employee`s first name?'
        },
        {
            name: 'last_name',
            message: 'What is the new employee`s last name?'
        },
        {
            type: 'rawlist',
            name: 'role_id',
            message: 'What is the new employee`s role?',
            choices: roles,
        },
        {
            type: 'rawlist',
            name: 'manager_id',
            message: 'Who is the new employee`s manager?',
            choices: managers,
        }
    ])
        .then((answers) => {
            insert('employee', answers);
        });
};

const addRole = async () => {
    const departments = departmentData.map(department => {
        return {
            name: department.title,
            value: department.id
        }
    });
    prompt([
    {
        name: 'role_title',
        message: 'What is the new role`s title?'
    },
    {
        name: 'role_salary',
        message: 'What is the salary for the new role?'
    },
    {
        type: 'rawlist',
        name: 'department',
        message: 'What department does this new role belong to?',
        choices: departments,
    },
])
.then((answers) => {
    insert('role', answers);
});
};


const chooseOption = (type) => {
    switch (type) {
        case 'View All Employees': {
            selectAll('employee');
            break;
        }
        case 'View All Departments': {
            selectAll('department');
            break;
        }
        case 'View All Roles': {
            selectAll('roles');
            break;
        }
        case 'Add Employee': {
            addEmployee();
            break;
        }
        case 'Add Role': {
            addRole();
            break;
        }
    }
}

const init = () => {
    prompt({
        type: 'rawlist',
        message: 'Choose one of the following categories to interact with',
        choices: [
            'View All Employees',
            'View All Departments',
            'View All Roles',
            'Add Employee',
        ],
        name: 'type',
    })
        .then((answers) => {
            chooseOption(answers.type)
        });
}

init();