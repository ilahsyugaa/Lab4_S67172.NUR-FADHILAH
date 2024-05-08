const employeeTable = document.getElementById("employeeTable");

const employee =[
    {id: 1, name: "Ahmad Faisal", email: "ahmadfaisal@gmail.com", phone: "0199088888"},
    {id: 2, name: "Ismail Sabri", email: "ismailsabri@gmail.com", phone: "0199076760"},
    {id: 1, name: "Fateh Yakin", email: "fatehyakin@gmail.com", phone: "0176067762"},
];

function addEmployeeRow(employee){
    const row = document.createElement("tr");
    row.addEventListener("click", function(){
        row.parentNode.removeChild(row);
    });

    const cellId = document.createElement("td");
    cellId.textContent = employee.id;
    row.appendChild(cellId);

    const cellName = document.createElement("td");
    cellName.textContent = employee.name;
    row.appendChild(cellName);

    const cellEmail = document.createElement("td");
    cellEmail.textContent = employee.email;
    row.appendChild(cellEmail);

    const cellPhone = document.createElement("td");
    cellPhone.textContent = employee.phone;
    row.appendChild(cellPhone);

    employeeTable.appendChild(row);
}

function addTableHeader() {
    const headerRow = document.createElement("tr");

    const headerId = document.createElement("th");
    headerId.textContent = "#";
    headerRow.appendChild(headerId);

    const headerName = document.createElement("th");
    headerName.textContent = "Name";
    headerRow.appendChild(headerName);

    const headerEmail = document.createElement("th");
    headerEmail.textContent = "Email";
    headerRow.appendChild(headerEmail);

    const headerPhone = document.createElement("th");
    headerPhone.textContent = "Phone";
    headerRow.appendChild(headerPhone);

    employeeTable.appendChild(headerRow);
}

addTableHeader();

employee.forEach(addEmployeeRow);

const newEmployee = { id: 4, name: "Mukhriz Jamil Asoka", email: "mukhriz@corp.jo", phone: "651181187223" };
addEmployeeRow(newEmployee);