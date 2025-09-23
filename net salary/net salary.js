// Net Salary Calculator
function calculateNetSalary() {
  // Get inputs
  let basicSalary = Number(prompt("Enter basic salary"));
  let benefits = Number(prompt("Enter benefits"));

  // Gross salary
  const grossSalary = basicSalary + benefits;

  // Deductions
  const nssf = Math.min(grossSalary, 72000) * 0.06; // 6%
  const shif = grossSalary * 0.0275; // 2.75%
  const housingLevy = grossSalary * 0.015; // 1.5%

  // Taxable income
  const taxableIncome = grossSalary - (nssf + shif + housingLevy);

  // PAYE tax
  let paye = calculatePAYE(taxableIncome);
  paye = Math.max(paye - 2400, 0); // minus relief

  // Net salary
  const netSalary = grossSalary - (nssf + shif + housingLevy + paye);

  // Return results
  return {
    grossSalary: grossSalary.toFixed(2),
    NSSF: nssf.toFixed(2),
    SHIF: shif.toFixed(2),
    housingLevy: housingLevy.toFixed(2),
    PAYE: paye.toFixed(2),
    netSalary: netSalary.toFixed(2),
  };
}

// PAYE calculator
function calculatePAYE(income) {
  if (income <= 24000) return income * 0.1;
  if (income <= 32333) return 2400 + (income - 24000) * 0.25;
  if (income <= 500000) return 2400 + 2083.25 + (income - 32333) * 0.3;
  if (income <= 800000) return 2400 + 2083.25 + 140200.1 + (income - 500000) * 0.325;
  return 2400 + 2083.25 + 140200.1 + 97500 + (income - 800000) * 0.35;
}

// Show results
const result = calculateNetSalary();
alert(`
Gross: Ksh ${result.grossSalary}
NSSF: Ksh ${result.NSSF}
SHIF: Ksh ${result.SHIF}
Housing Levy: Ksh ${result.housingLevy}
PAYE: Ksh ${result.PAYE}
Net: Ksh ${result.netSalary}
`);
