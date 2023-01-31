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

const selectAll = async (table) => {
    return await db.promise().query('SELECT * FROM ' + table);
};

const insert = (table, data) => {
    db.query('INSERT INTO ?? SET ?', [table, data], (err) => {
        if (err) return console.error(err);
        console.log('\nSuccessfully created!\n');
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
    const answers = await prompt([
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
    // .then((answers) => {
    //     insert('employee', answers);
    // });
    insert('employee', answers);
};

const addRole = async () => {
    const [departmentData] = await selectAll('department');
    // const [roleData] = await selectAll('role');
    const departments = departmentData.map(department => {
        return {
            name: department.name,
            value: department.id
        }
    });
    const answers = await prompt([
        {
            name: 'title',
            message: 'What is the new role`s title?'
        },
        {
            name: 'salary',
            message: 'What is the salary for the new role?'
        },
        {
            type: 'rawlist',
            name: 'department_id',
            message: 'What department does this new role belong to?',
            choices: departments,
        },
    ])
    // .then((answers) => {
    //     insert('role', answers);
    // });
    insert('role', answers);
};

const addDepartment = async () => {
    const answers = await prompt([{
        name: 'name',
        message: 'What is the name of this new department?'
    }
    ])
    //.then((answers) => {
    //     insert('department', answers);
    // })
    insert('department', answers);
}

const chooseOption = async (type) => {
    switch (type) {
        case 'View All Employees': {
            const [data] = await selectAll('employee');
            console.table(data);
            init();
            break;
        }
        case 'View All Departments': {
            const [data] = await selectAll('department');
            console.table(data);
            init();
            break;
        }
        case 'View All Roles': {
            const [data] = await selectAll('role');
            console.table(data);
            init();
            break;
        }
        case 'Add Employee': {
            await addEmployee();
            init();
            break;
        }
        case 'Add Department': {
            await addDepartment();
            init();
            break;
        }
        case 'Add Role': {
            await addRole();
            init();
            break;
        }
        // case 'View Department Payrole': {
        //     db.query('SELECT SUM(quantity) AS total_in_salary FROM role GROUP BY department_id', function (err, results) {
        //         console.log(results);
        //         init();
        //     });
        //     break;
        // }
    }
}

const init = async () => {
    const answers = await prompt({
        type: 'rawlist',
        message: 'Choose one of the following categories to interact with',
        choices: [
            'View All Employees',
            'View All Departments',
            'View All Roles',
            'Add Employee',
            'Add Department',
            'Add Role',
            // 'View Department Payrole'
        ],
        name: 'type',
    })
    chooseOption(answers.type)
}

init();