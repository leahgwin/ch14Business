
// A small business wants to keep track of its employees and the computers that they use. Each employee is assigned to a department, and they each get assigned a computer when they join the company.

// Assign each employee to a department using a foreign key.
// Assign each employee a computer using a foreign key.
// Once your data is normalized, use your DOM skills to display a card for each employee. It should display the employee name, the name of their department, and which computer they are using

// Build arrays of objects that represent Employees, Departments, and Computers.
const Database = {
    "employees": [
        {
            // Assign every resource a unique id property.
            "employeeId": 1,
            "name": "Seth"
        },
        {
            "employeeId": 2,
            "name": "Matt"
        },
        {
            "employeeId": 3,
            "name": "Sarah"
        }
    ],
    "departments": [
        {
            "deptId": 1,
            "name": "Marketing"
        },
        {
            "deptId": 2,
            "name": "Software Engineering"
        },
        {
            "deptId": 3,
            "name": "Sales"
        }
    ],
    "computers": [
        {
            "compId": 1,
            "name": "Macbook"
        },
        {
            "compId": 2,
            "name": "Chromebook"
        }
    ]
}