
var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
floatAge = parseFloat(prompt("What is your age?", "20") );
floatDays = parseFloat(floatAge * 365.25);
floatMonths = parseFloat(floatAge*12);
intWeeks = parseInt(floatDays/7);
intFortnights = parseInt(floatDays/14);
alert("Your current age is " + floatAge+ " which is " +floatMonths+" months, which is " +floatDays+ " days, which is " +intWeeks+ " weeks and " +intFortnights+ " fortnights." );