//Task 1

var arrayNames = new  Array("John", "Robert", "Jimmy", "Bonzo");
var arrayInstruments = [];
arrayInstruments[0] = "bass";
arrayInstruments[1] = "vocals";
arrayInstruments[2] = "guitar";
arrayInstruments[3] = "drums";

var stringMessage = "";

var intCount;

for(intCount=0; intCount<arrayNames.length; intCount++){
    stringMessage = stringMessage + arrayNames[intCount] + " plays "+ arrayInstruments[intCount] + "\n";
}
alert(stringMessage);

//Task 2
var stringTimesTable ="";
for(var x=1; x<=12; x++){
    for(var y=1; y<=12; y++){
        stringTimesTable = stringTimesTable + " " + x*y + " ";
    }
}
alert(stringTimesTable);