function leapYear(year) {
    if ((year % 4 === 0) || (year % 100 == 0) || (year % 400 === 0)) {
        let thisYear = (year + ' = This year is leap year');
        return thisYear;
    }
    else{
        let notThisYear = (year + ' = This  year is not leap year');
        return notThisYear;
    }
}

let leap = leapYear(1900);
console.log(leap);