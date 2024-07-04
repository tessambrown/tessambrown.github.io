// 2 json files
const requestURL1 = "https://tessambrown.github.io/wa/wa13.JSON";
const requestURL2 = "https://tessambrown.github.io/wa/wa13company.JSON";

// fetch the first json file, send it to different functions
fetch(requestURL1)
  .then(response => response.text())
  .then(text => {
    const employees = JSON.parse(text);
    displayHRInfo(employees);
    calculateAndDisplayTotalSalary(employees);
    applyRaisesAndDisplay(employees);
    updateWorkFromHomeStatus(employees);
  });

// fetch the second json file, send it to different functions
fetch(requestURL2)
  .then(response => response.text())
  .then(text => {
    const company = JSON.parse(text);
    displayCompanyInfo(company);
    calculateAndDisplayTotalSalary(company.employees);
    applyRaisesAndDisplay(company.employees);
    updateWorkFromHomeStatus(company.employees);
});

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

// problem 3: -> function to add a new emploee in to both json files
function addEmployee(employees, company) 
{
    console.log('Problem 3:');

    employees.push(JSON.stringify(newEmployee));
    company.push(JSON.stringify(newEmployee))

    console.log(`Name: ${newEmployee.name}, Department: ${newEmployee.department}, Designation: ${newEmployee.designation}, Salary: ${newEmployee.salary}, Raise Eligible: ${newEmployee.raise ? 'Yes' : 'No'}`);

    console.log('Updated Employee JSON File')
    displayHRInfo(employees);
    console.log('Updated Company and Employee JSON File')
    displayCompanyInfo(company);
}

// new employee to add to the function 
let newEmployee = {
    "name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise": false
};

// problem 4: -> take in the employees and calculate thier total salary
function calculateAndDisplayTotalSalary(employees) 
{
    console.log('Problem 4:')
    let totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
    console.log(`Total Salary: ${totalSalary}`);
}

// problem 5: -> if the employee is up for a raise gives them the raise and displays the raise
function applyRaisesAndDisplay(employees) 
{
    console.log('Problem 5:')
    let raiseAppliedInfo = 'Employees eligible for a raise: ';
    let anyRaiseApplied = false;
    employees.forEach(employee => {
        if (employee.raise) {
        employee.salary *= 1.10;
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
    console.log('Problem 6:')
    const workFromHomeArray = ['Anna', 'Sam'];
    
    employees.forEach(employee => {
        employee.wfh = workFromHomeArray.includes(employee.name);
    });

    let wfhInfo = 'Work from home status: ';
    employees.forEach(employee => {
        wfhInfo += `${employee.name} ('work from home': ${employee.wfh ? 'Yes' : 'No'}), `;
    });

    wfhInfo = wfhInfo.slice(0, -2) + '.';
    console.log(wfhInfo);
}