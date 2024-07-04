// 2 json files: 1 for the seperate employees and one for the company
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
    addEmployee(company.employees, company);
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

// problem 3: -> function to add a new employee into both json files
function addEmployee(employees, company) 
{
    console.log('Problem 3:');

    //new employee for the add employee function 
    let newEmployee = {
        "name": "Anna",
        "department": "Tech",
        "designation": "Executive",
        "salary": 25600,
        "raise": false
    };

    employees.push(newEmployee);
    if (company && company.employees) {
        company.employees.push(newEmployee);
    }

    console.log(`New Employee Added: Name: ${newEmployee.name}, Department: ${newEmployee.department}, Designation: ${newEmployee.designation}, Salary: ${newEmployee.salary}, Raise Eligible: ${newEmployee.raise ? 'Yes' : 'No'}`);
}

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

    // apply and find raises 
    employees.forEach(employee => {
        if (employee.raise) {
        employee.salary *= 1.10;
        raiseAppliedInfo += `${employee.name} (new salary: ${employee.salary.toFixed(2)}), `;
        anyRaiseApplied = true;
        }
    });

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