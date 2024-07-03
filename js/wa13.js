// problem 1:

const problem1 = document.querySelector('#problem1');
const requestURL1 = "https://tessambrown.github.io/wa/wa13.JSON";
const requestURL2 = "https://tessambrown.github.io/wa/wa13company.JSON";


fetch(requestURL1)
  .then(response => response.text())
  .then(text => displayHRInfo(text));

fetch(requestURL2)
  .then(response => response.text())
  .then(text => displayCompanyInfo(text));

let employeeInfo = 'The employees are: ';

async function displayHRInfo(HRstring) {
  let employees = JSON.parse(HRstring);

  employees.forEach(employee => {
    let para = document.createElement('p');
    para.textContent = `Name: ${employee.name}, Department: ${employee.department}, Designation: ${employee.designation}, Salary: ${employee.salary}, Raise Eligible: ${employee.raise ? 'Yes' : 'No'}`;
    problem1.appendChild(para);
  });
}

// problem 2:
async function displayCompanyInfo(companyString) {
    let company = JSON.parse(companyString);

    let companyPara = document.createElement('p');
    companyPara.textContent = `Company Name: ${company.companyName}, Website: ${company.website}`;
    problem2.appendChild(companyPara);
  
    company.employees.forEach(employee => {
      let para = document.createElement('p');
      para.textContent = `Name: ${employee.name}, Department: ${employee.department}, Designation: ${employee.designation}, Salary: ${employee.salary}, Raise Eligible: ${employee.raise ? 'Yes' : 'No'}`;
      problem2.appendChild(para);
    });
}

// problem 3:

// new employee
let newEmployee = {
    "name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise": false
};

addEmployee(newEmployee);

function addEmployee(newEmployee) {
    
    employees.push(newEmployee);

    company.employees.push(newEmployee);

    displayHRInfo(JSON.stringify(employees));
    displayCompanyInfo(JSON.stringify(company));
}