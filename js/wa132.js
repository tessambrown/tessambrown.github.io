const employees = require('./wa13.JSON');
const company = require('./wa13company.JSON');

displayHRInfo(employees);
calculateAndDisplayTotalSalary(employees);
applyRaisesAndDisplay(employees);
updateWorkFromHomeStatus(employees);

displayCompanyInfo(company);
calculateAndDisplayTotalSalary(company.employees);
applyRaisesAndDisplay(company.employees);
updateWorkFromHomeStatus(company.employees);

// new employee to add to the function 
let newEmployee = {
    "name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise": false
};

// Add new employee to both employees and company.employees arrays
addEmployee(newEmployee, employees, company);

// problem 1: -> take in the first json file and output each of the employees
function displayHRInfo(employees) 
{
    console.log('Problem 1:');
    employees.forEach(employee => {
        console.log(`Name: ${employee.name}, Department: ${employee.department}, Designation: ${employee.designation}, Salary: ${employee.salary}, Raise Eligible: ${employee.raise ? 'Yes' : 'No'}`);
    });
}

// problem 2: -> take in the second json file and out put the company and the employees
function displayCompanyInfo(company) 
{
    console.log('Problem 2:');
    console.log(`Company Name: ${company.companyName}, Website: ${company.website}`);
    company.employees.forEach(employee => {
        console.log(`Name: ${employee.name}, Department: ${employee.department}, Designation: ${employee.designation}, Salary: ${employee.salary}, Raise Eligible: ${employee.raise ? 'Yes' : 'No'}`);
    });
}

// problem 3: -> function to add a new employee into both json files
function addEmployee(newEmployee, employees, company) 
{
    console.log('Problem 3:');
    employees.push(newEmployee);
    company.employees.push(newEmployee);
    displayHRInfo(employees);
    displayCompanyInfo(company);
}

// problem 4: -> take in the employees and calculate their total salary
function calculateAndDisplayTotalSalary(employees) 
{
    console.log('Problem 4:');
    let totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
    console.log(`Total Salary: ${totalSalary}`);
}

// problem 5: -> if the employee is up for a raise gives them the raise and displays the raise
function applyRaisesAndDisplay(employees) 
{
    console.log('Problem 5:');
    let raiseAppliedInfo = 'Employees eligible for a raise: ';
    let anyRaiseApplied = false;
    employees.forEach(employee => {
        if (employee.raise) {
            employee.salary *= 1.10; // Increase salary by 10%
            raiseAppliedInfo += `${employee.name} (new salary: ${employee.salary.toFixed(2)}), `;
            anyRaiseApplied = true;
        }
    });

    if (anyRaiseApplied) {
        raiseAppliedInfo = raiseAppliedInfo.slice(0, -2) + '.';
    } else {
        raiseAppliedInfo = 'No employees are eligible for a raise.';
    }

    console.log(raiseAppliedInfo);
}

// problem 6: -> updates the work from home status of the employees 
function updateWorkFromHomeStatus(employees) 
{
    console.log('Problem 6:');
    const workFromHomeArray = ['Anna', 'Sam'];
    
    employees.forEach(employee => {
        employee.wfh = workFromHomeArray.includes(employee.name);
    });

    let wfhInfo = 'Work from home status: ';
    employees.forEach(employee => {
        wfhInfo += `${employee.name} (wfh: ${employee.wfh ? 'Yes' : 'No'}), `;
    });

    wfhInfo = wfhInfo.slice(0, -2) + '.';
    console.log(wfhInfo);
}
