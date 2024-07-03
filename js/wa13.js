// problem 1:

const problem1 = document.querySelector('#problem1');
const requestURL1 = "https://tessambrown.github.io/wa/wa13.JSON";
const requestURL2 = ""


fetch(requestURL1)
  .then(response => response.text())
  .then(text => displayHRInfo(text));

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

