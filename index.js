// Initialize the employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update employee non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to update employee destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete property from employee non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete property from employee destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Test the functions
  console.log("Original employee:", employee);
  
  // Test updateEmployeeWithKeyAndValue
  employee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log("After non-destructive update:", employee);
  
  // Test destructivelyUpdateEmployeeWithKeyAndValue
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log("After destructive update:", employee);
  
  // Test deleteFromEmployeeByKey
  const newEmployee = deleteFromEmployeeByKey(employee, "name");
  console.log("After non-destructive deletion:", newEmployee);
  
  // Test destructivelyDeleteFromEmployeeByKey
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("After destructive deletion:", employee);
  