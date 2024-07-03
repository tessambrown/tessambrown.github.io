// problem 1:

// 2 json files
const requestURL1 = "https://tessambrown.github.io/wa/wa13.JSON";
const requestURL2 = "https://tessambrown.github.io/wa/wa13company.JSON";

// fetch the first json file
fetch(requestURL1)
  .then(response => response.text())
  .then(text => {
    const employees = JSON.parse(text);
    displayHRInfo(employees);
    // calculateAndDisplayTotalSalary(employees);
    // applyRaisesAndDisplay(employees);
    // updateWorkFromHomeStatus(employees);
  });

// fetch the second json file 
fetch(requestURL2)
  .then(response => response.text())
  .then(text => {
    const company = JSON.parse(text);
    displayCompanyInfo(company);
    // calculateAndDisplayTotalSalary(company.employees);
    // applyRaisesAndDisplay(company.employees);
    // updateWorkFromHomeStatus(company.employees);
  });

// problem 1:
function displayHRInfo(employees) {
  console.log('Problem 1:');
  employees.forEach(employee => {
    console.log(`Name: ${employee.name}, Department: ${employee.department}, Designation: ${employee.designation}, Salary: ${employee.salary}, Raise Eligible: ${employee.raise ? 'Yes' : 'No'}`);
  });
}

// problem 2
function displayCompanyInfo(company) {
  console.log('Problem 2:');
  console.log(`Company Name: ${company.companyName}, Website: ${company.website}`);
  company.employees.forEach(employee => {
    console.log(`Name: ${employee.name}, Department: ${employee.department}, Designation: ${employee.designation}, Salary: ${employee.salary}, Raise Eligible: ${employee.raise ? 'Yes' : 'No'}`);
  });
}

// function addEmployee(newEmployee, employees, company) {
//   employees.push(newEmployee);
//   company.employees.push(newEmployee);
//   displayHRInfo(employees);
//   displayCompanyInfo(company);
// }

// // new employee
// let newEmployee = {
//     "name": "Anna",
//     "department": "Tech",
//     "designation": "Executive",
//     "salary": 25600,
//     "raise": false
//   };

// function calculateAndDisplayTotalSalary(employees) {
//   let totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
//   console.log(`Total Salary: ${totalSalary}`);
// }

// function applyRaisesAndDisplay(employees) {
//   let raiseAppliedInfo = 'Employees eligible for a raise: ';
//   let anyRaiseApplied = false;
  
//   employees.forEach(employee => {
//     if (employee.raise) {
//       employee.salary *= 1.10; // Increase salary by 10%
//       raiseAppliedInfo += `${employee.name} (new salary: ${employee.salary.toFixed(2)}), `;
//       anyRaiseApplied = true;
//     }
//   });

//   if (anyRaiseApplied) {
//     raiseAppliedInfo = raiseAppliedInfo.slice(0, -2) + '.';
//   } else {
//     raiseAppliedInfo = 'No employees are eligible for a raise.';
//   }

//   console.log(raiseAppliedInfo);
// }

// function updateWorkFromHomeStatus(employees) {
//   const workFromHomeArray = ['Anna', 'Sam'];
  
//   employees.forEach(employee => {
//     employee.wfh = workFromHomeArray.includes(employee.name);
//   });

//   let wfhInfo = 'Work from home status: ';
//   employees.forEach(employee => {
//     wfhInfo += `${employee.name} (wfh: ${employee.wfh ? 'Yes' : 'No'}), `;
//   });

//   wfhInfo = wfhInfo.slice(0, -2) + '.';
//   console.log(wfhInfo);
// }

// // Example usage:
// fetch(requestURL1)
//   .then(response => response.text())
//   .then(text => {
//     let employees = JSON.parse(text);
//     let company = {
//       companyName: "Tech Stars",
//       website: "www.techstars.site",
//       employees: employees
//     };

//     addEmployee(newEmployee, employees, company);
//     calculateAndDisplayTotalSalary(employees);
//     applyRaisesAndDisplay(employees);
//     updateWorkFromHomeStatus(employees);
// });
