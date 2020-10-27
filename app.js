// Selectors
const employeeName = document.querySelector('#employee-name')
const employeeEmail = document.querySelector('#employee-email')
const employeePhone = document.querySelector('#employee-phone')
const employeeProjectKey = document.querySelector('#employee-project-key')
const employeesTable = document.querySelector('.employees')
const employeeModal = document.querySelector('#add-employee-modal')

const projectTitle = document.querySelector('#project-title')
const projectKey = document.querySelector('#project-key')
const projectModal = document.querySelector('#add-project-modal')

const saveEmployeeBtn = document.querySelector('.save-employee-btn')
const saveProjectBtn = document.querySelector('.save-project-btn')

// Event listeners
saveEmployeeBtn.addEventListener('click', addEmployee)
saveProjectBtn.addEventListener('click', addProject)

employees = []
projects = []

window.onload = function () {
    loadEmployees()
    loadProjects()
}

// Functions
function addEmployee() {
    let employee = {
        employeeName: employeeName.value,
        employeeEmail: employeeEmail.value,
        employeePhone: employeePhone.value,
        employeeProjectKey: employeeProjectKey.value
    }

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status === 201) {
                $(employeeModal).modal('hide')
                employees.push(employee)
                showEmployees(employees)
            }
            else {
                alert('There was an error saving employee');
            }
        }
    };

    xmlhttp.open("POST", "https://api.mocki.io/v1/6a5f1cea", true);
    xmlhttp.send(JSON.stringify(employee));
}


function addProject() {
    console.log(projectTitle.value)
    console.log(projectKey.value)
    let project = {
        projectKey: projectKey.value,
        projectTitle: projectTitle.value
    }

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status === 201) {
                $(projectModal).modal('hide')
                projects.push(project)
                showEmployees(project)
            }
            else {
                alert('There was an error saving project');
            }
        }
    };

    xmlhttp.open("POST", "https://api.mocki.io/v1/6a5f1cea", true);
    xmlhttp.send(JSON.stringify(project));
}


function loadEmployees() {
    let employees = []
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status === 200) {
                employees = JSON.parse(xmlhttp.response)
                console.log(employees)
                showEmployees(employees)
            }
            else {
                alert('There was an error loading employees');
            }
        }
    };

    xmlhttp.open("GET", "https://api.mocki.io/v1/f69c7016", true);
    xmlhttp.send();
}

function showEmployees(employees) {
    employeesTable.innerHTML = ''
    for (let employee of employees) {
        console.log(employee)
        let employeeElement = document.createElement("tr")
        employeeElement.classList.add("employee")
        let employeeNameElement = document.createElement("td")
        employeeNameElement.innerText = employee["employeeName"]
        employeeElement.appendChild(employeeNameElement)

        let employeeEmailElement = document.createElement("td")
        employeeEmailElement.innerText = employee["employeeEmail"]
        employeeElement.appendChild(employeeEmailElement)

        let employeePhoneElement = document.createElement("td")
        employeePhoneElement.innerText = employee["employeePhone"]
        employeeElement.appendChild(employeePhoneElement)

        let employeeProjectElement = document.createElement("td")
        employeeProjectElement.innerText = employee["employeeProjectKey"]
        employeeElement.appendChild(employeeProjectElement)

        employeesTable.appendChild(employeeElement)
    }
}


function loadProjects() {
    let projects = []
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status === 200) {
                projects = JSON.parse(xmlhttp.response)
                console.log(projects)
                showProjects(projects)
            }
            else {
                alert('There was an error loading employees');
            }
        }
    };

    xmlhttp.open("GET", "https://api.mocki.io/v1/85e8eca0", true);
    xmlhttp.send();
}

function showProjects(projects) {
    employeeProjectKey.innerHTML = ''
    for (let project of projects) {
        console.log(project)
        let projectKeyElement = document.createElement("option")
        projectKeyElement.innerText = project["projectTitle"]
        projectKeyElement.value = project["projectKey"]

        employeeProjectKey.appendChild(projectKeyElement)
    }
}