
// A small business wants to keep track of its employees and the computers that they use. Each employee is assigned to a department, and they each get assigned a computer when they join the company.

// Assign each employee to a department using a foreign key.
// Assign each employee a computer using a foreign key.
// Once your data is normalized, use your DOM skills to display a card for each employee. It should display the employee name, the name of their department, and which computer they are using

// Build arrays of objects that represent Employees, Departments, and Computers.
const employee = [
    {
        // Assign every resource a unique id property.
        "employeeId": 1,
        "name": "Seth",
        "deptId": 3,
        "compId": 2
    },
    {
        "employeeId": 2,
        "name": "Matt",
        "deptId": 2,
        "compId": 1
    },
    {
        "employeeId": 3,
        "name": "Sarah",
        "deptId": 1,
        "compId": 3
    }
]
// console.log(employee);

const departments = [
    {
        "deptId": 1,
        "deptName": "Marketing"
    },
    {
        "deptId": 2,
        "deptName": "Software Engineering"
    },
    {
        "deptId": 3,
        "deptName": "Sales"
    }
]
const computers = [
    {
        "compId": 1,
        "compName": "Macbook"
    },
    {
        "compId": 2,
        "compName": "Chromebook"
    },
    {
        "compId": 3,
        "compName": "Mac Desktop"
    }
]

// Once your data is normalized, use your DOM skills to display a card for each employee. It should display the employee name, the name of their department, and which computer they are using

//we need to define where all of this information is going to attach to in the html
let company = $("#company");
//for loop to go through the above data in order to write to DOM and connect the empl, dept, comp
for (let i = 0; i < employee.length; i++) {
    let div = $("<div>")
    let employeeHeader = $("<h2>");
    employeeHeader.text(employee[i].name)
    div.append(employeeHeader);
    company.append(div);
    let departmentId = employee[i].deptId;
    for (let i = 0; i < departments.length; i++) {
        if (departmentId === departments[i].deptId) {
            let deptSect = $("<li>");
            deptSect.text(departments[i].deptName);
            div.append(deptSect);
            div.attr("id", "dept")

        }
    }
    let computerId = employee[i].compId;
    for (let i = 0; i < computers.length; i++) {
        if (computerId === computers[i].compId) {
            let compSect = $("<li>");
            compSect.text(computers[i].compName);
            div.append(compSect);
            div.attr("id", "person")
        }
    }

}
