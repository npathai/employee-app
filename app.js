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


projects = []

document.onload = function () {
    loadEmployees()
    showEmployees(employees)
    showProjects(projects)
}

// Functions
function addEmployee() {
    let employee = {
        employeeName: employeeName.value,
        employeeEmail: employeeEmail.value,
        employeePhone: employeePhone.value,
        employeeProjectKey: employeeProjectKey.value
    }
    employees.push(employee)
    console.log(employees)
    $(employeeModal).modal('hide')
    showEmployees(employees)
}


function addProject() {
    console.log(projectTitle.value)
    console.log(projectKey.value)
    let project = {
        projectKey: projectKey.value,
        projectTitle: projectTitle.value
    }
    projects.push(project)
    console.log(projects)
    $(projectModal).modal('hide')
    showProjects(projects)
}


// https://ce14fd94-751f-42b3-9330-483c7f544456.mock.pstmn.io
function loadEmployees() {

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