<script>
var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
floatAge = parseFloat(prompt("What is your age?") );
floatDays = floatAge * 365.25;
floatMonths = floatAge*12;
intWeeks = floatDays/7;
intFortnights = floatDays/14;
return floatAge, floatDays, intWeeks, floatMonths, intFortnights; 
</script>