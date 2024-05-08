function createProduct(){
    const productName = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;

    const product = {
        productName: productName,
        quantity: quantity,
        price: price
    };

    displayProductDetails(product);
}

function displayProductDetails(product){
    const productDetails = document.getElementById("productDetails");
    productDetails.innerHTML = `
    <p>Product Name: ${product.productName}</p>
    <p>Quantity: ${product.quantity}</p>
    <p>Price: ${product.price}</p>
    `;
}

function createBook() {
    var bookName = document.getElementById("bookName").value;
    var authorFName = document.get.getElementById("authorFName").value;
    var authorLName = document.get.getElementById("authorLName").value;
    const price = "RM15.00";

    function Author(firstName, lastName){
        this.firstNmae = firstName;
        this.lastName = lastName;
    }

    Author.prototype.getFullName = function() {
        return this.firstNmae + " " +this.lastName;
    };

    var author = new Author(authorFName, authorLName);

    var bookDetails = document.getElementById("bookDetails");
    bookDetails.innerHTML = `
    <p>Book Name: ${bookName}</p>
    <p>Author Name: ${author.getFullName()}</p>
    <p>Price: ${price}</p> 
    `;
}

class Employee {
    constructor(name, id, salary) {
        this.employeeName = name;
        this.employeeId = id;
        this.salary = salary;
    }

    displayDetails() {
        const employeeDetails = document.getElementById("employeeDetails");
        employeeDetails.innerHTML = `
        <p>Employee Name: Shahrulnizam B Jamil</p>
        <p>Employee ID: ${this.employeeId}</p>
        <p>Salary: ${this.salary}</p>
        `;
    }
}

class Manager extends Employee {
    constructor(name, branch) {
        super(name, "SCRT001", "RM5000.00");
        this.ManagerName = name;
        this.branch = branch;
    }

    displayManagerDetails() {
        const managerDetails = document.getElementById("managerDetails");
        managerDetails.innerHTML = `
        <p>Manager Name: ${this.ManagerName}</p>
        <p>Branch: ${this.branch}</p>
        `;
    }
}

function createPropertyManager() {
    const ManagerName = document.getElementById("managerName").value;
    const branch = document.getElementById("branch").value;

    const manager = new Manager(managerName, branch);

    manager.displayDetails();
    manager.displayManagerDetails();
}