// Write your solution in this file!
const employee = {
    name :"Victor",
    streetAddress : "Lumumba drive",
}

function updateEmployeeWithKeyAndValue(){
    const employee_1 = {
        name : "Sam",
        streetAddress : "11 Broadway"
    }
    const updatedEmployees = {...employee, ...employee_1}
    return updatedEmployees;
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey() {
    const employee_2 = {
        color : "black",
        road : "trm",
    }
    const about = {...employee, ...employee_2}
    return about;
}








