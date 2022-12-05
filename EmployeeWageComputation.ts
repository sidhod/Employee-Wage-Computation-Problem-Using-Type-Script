console.log(""
    + "    ##     ## ###### ##     ###### ###### ###   ### ######\r\n"
    + " *  ##     ## ##     ##     ##     ##  ## ## # # ## ##      *\r\n"
    + "*** ##  #  ## #####  ##     ##     ##  ## ##  #  ## #####  ***\r\n"
    + " *  ## # # ## ##     ##     ##     ##  ## ##     ## ##      *\r\n"
    + "    ###   ### ###### ###### ###### ###### ##     ## ###### \r\n"
    + "--------------- EMPLOYEE WAGE COMPUTATION-----------------------\r\n");
const IS_Full_Time: number = 1;
const IS_Part_Time: number = 2;
const EMP_RATE_PER_HOUR: number = 20;
const NO_OF_WORKING_DAYS: number = 20;
let empHrs: number = 0;
let empWage: number = 0;
let totalEmployeeWage: number = 0;
for (let day = 0; day <= NO_OF_WORKING_DAYS; day++) {
    var empCheck = Math.floor(Math.random() * 3) + 0;
    switch (empCheck) {
        case IS_Part_Time:
            empHrs = 4;
            break;
        case IS_Full_Time:
            empHrs = 8;
            break;
        default:
            empHrs = 0;
    }
    empWage = empHrs * EMP_RATE_PER_HOUR;
    totalEmployeeWage = empWage + totalEmployeeWage;
    console.log("Employee Wage is: " + empWage);
}
console.log("Total Employee Wage of Month: " + totalEmployeeWage);