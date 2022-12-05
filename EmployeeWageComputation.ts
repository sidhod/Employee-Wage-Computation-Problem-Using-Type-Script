console.log(""
    + "    ##     ## ###### ##     ###### ###### ###   ### ######\r\n"
    + " *  ##     ## ##     ##     ##     ##  ## ## # # ## ##      *\r\n"
    + "*** ##  #  ## #####  ##     ##     ##  ## ##  #  ## #####  ***\r\n"
    + " *  ## # # ## ##     ##     ##     ##  ## ##     ## ##      *\r\n"
    + "    ###   ### ###### ###### ###### ###### ##     ## ###### \r\n"
    + "--------------- EMPLOYEE WAGE COMPUTATION-----------------------\r\n");
let IS_Full_Time: number = 1;
let empCheck: number = Math.floor(Math.random() * 2) + 0;
console.log(empCheck);
if (empCheck == IS_Full_Time) {
    console.log("Employee is present");
}
else {
    console.log("Employee is Absent");
}

