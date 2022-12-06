var fixedInfo;
(function (fixedInfo) {
    fixedInfo[fixedInfo["IS_Full_Time"] = 1] = "IS_Full_Time";
    fixedInfo[fixedInfo["IS_Part_Time"] = 2] = "IS_Part_Time";
    fixedInfo[fixedInfo["EMP_RATE_PER_HOUR"] = 20] = "EMP_RATE_PER_HOUR";
    fixedInfo[fixedInfo["NO_OF_WORKING_DAYS"] = 20] = "NO_OF_WORKING_DAYS";
    fixedInfo[fixedInfo["MAX_HRS_IN_MONTH"] = 100] = "MAX_HRS_IN_MONTH";
})(fixedInfo || (fixedInfo = {}));
function welcomMessage() {
    console.log(""
        + "    ##     ## ###### ##     ###### ###### ###   ### ######\r\n"
        + " *  ##     ## ##     ##     ##     ##  ## ## # # ## ##      *\r\n"
        + "*** ##  #  ## #####  ##     ##     ##  ## ##  #  ## #####  ***\r\n"
        + " *  ## # # ## ##     ##     ##     ##  ## ##     ## ##      *\r\n"
        + "    ###   ### ###### ###### ###### ###### ##     ## ###### \r\n"
        + "--------------- EMPLOYEE WAGE COMPUTATION-----------------------\r\n");
}
function calculateEmployeeWage() {
    var empHrs = 0, empWage = 0, totalEmployeeWage = 0, totalEmpHrs = 0, totalWorkingDays = 0;
    while (totalEmpHrs < fixedInfo.MAX_HRS_IN_MONTH && totalWorkingDays < fixedInfo.NO_OF_WORKING_DAYS) {
        totalWorkingDays++;
        var empCheck = Math.floor(Math.random() * 3) + 0;
        switch (empCheck) {
            case fixedInfo.IS_Part_Time:
                empHrs = 4;
                break;
            case fixedInfo.IS_Full_Time:
                empHrs = 8;
                break;
            default:
                empHrs = 0;
        }
        empWage = empHrs * fixedInfo.EMP_RATE_PER_HOUR;
        totalEmployeeWage = empWage + totalEmployeeWage;
    }
    return totalEmployeeWage;
}
function showresult(result) {
    console.log("***********|Total Employee Wage of Month: " + result + "|**********");
}
welcomMessage(); //Call welome message
var result = calculateEmployeeWage(); //call calculateEmployeeWage Function and take in variable
showresult(result);
