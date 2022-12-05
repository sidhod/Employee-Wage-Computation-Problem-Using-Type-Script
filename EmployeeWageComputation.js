console.log(""
    + "    ##     ## ###### ##     ###### ###### ###   ### ######\r\n"
    + " *  ##     ## ##     ##     ##     ##  ## ## # # ## ##      *\r\n"
    + "*** ##  #  ## #####  ##     ##     ##  ## ##  #  ## #####  ***\r\n"
    + " *  ## # # ## ##     ##     ##     ##  ## ##     ## ##      *\r\n"
    + "    ###   ### ###### ###### ###### ###### ##     ## ###### \r\n"
    + "--------------- EMPLOYEE WAGE COMPUTATION-----------------------\r\n");
var IS_Full_Time = 1;
var IS_Part_Time = 2;
var EMP_RATE_PER_HOUR = 20;
var empHrs = 0;
var empWage = 0;
var empCheck = Math.floor(Math.random() * 3) + 0;
if (empCheck === IS_Part_Time)
    empHrs = 4;
else if (empCheck === IS_Full_Time)
    empHrs = 8;
else
    empHrs = 0;
empWage = empHrs * EMP_RATE_PER_HOUR;
console.log("Emp Wage: " + empWage);
