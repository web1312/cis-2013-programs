<script>
     var miles, gallons, mpg;
     var floatMiles, floatGallons, floatMPG;
     floatMiles = parseMiles(prompt("Enter miles driven"));
     floatGallons = parseGallons(prompt("Enter gallons of gas used"));
     floatMPG = floatMiles/floatGallons;
     alert("Miles per gallon = " + floatMPG);
   </script>