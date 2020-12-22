/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  const byid = new Map();
  for (let i = 0; i < employees.length; i++) {
      byid.set(employees[i].id, employees[i]);
  }
  
  let count = function(empid) {
      let emp = byid.get(empid);
      if (!emp) return 0;
      let importance = emp.importance;
      for (let i = 0; i < emp.subordinates.length; i++) {
          importance += count(emp.subordinates[i]);
      }
      return importance;
  }
  
  return count(id);
};

