const employee = {
    name: "Hakeem",
    streetAddress: "39307192",
}


/* returns an employee with the original key value 
   pairs and the new key value pair  */
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee }
    newObj[key] = value
    return newObj
}

updateEmployeeWithKeyAndValue(employee, "Kendrick", "1")

/* does not modify the original employee
   (it is non-destructive) and also deletes 
   `key` from a clone of employee and returns
    the new employee (it is non-destructive) */
function deleteFromEmployeeByKey(employee, key){
    const remEmployee = { ...employee }
    let name = key
    let newEmployee = delete remEmployee[name]
    return {newEmployee}
}

deleteFromEmployeeByKey(employee, "Fatma")

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}