let basicSalary = Number(prompt("Enter your basic salary:"));
let benefits = Number(prompt("Enter your benefits:"));

let grossSalary = basicSalary + benefits;

let nssf = 0.06 * grossSalary;

let nhif = 1500;

let tax = 0.1 * grossSalary;

let netSalary = grossSalary - (nssf + nhif + tax);

console.log("Gross Salary: " + grossSalary);
console.log("NSSF Deduction: " + nssf);
console.log("NHIF Deduction: " + nhif);
console.log("Tax (PAYE): " + tax);
console.log("Net Salary: " + netSalary);
