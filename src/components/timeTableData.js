const timeTableData = () =>{
    var monday = new Map();
    monday.set(9,"-");
    monday.set(10,"Embedded Systems");
    monday.set(11,"Control Engineering");
    monday.set(12,"CMOS / CAO / ESD");
    monday.set(13,"Break");
    monday.set(14,"Waveguides & Antenna");
    monday.set(15,"-");

    var tuesday = new Map();
    tuesday.set(9,"Algorithms");
    tuesday.set(10,"Waveguides & Antenna");
    tuesday.set(11,"Analog Communication");
    tuesday.set(12,"Measurement & Instrumentation");
    tuesday.set(13,"Break");
    tuesday.set(14,"-");
    tuesday.set(15,"Control Engineering");

    var wednesday = new Map();
    wednesday.set(9,"CMOS / CAO / ESD");
    wednesday.set(10,"-");
    wednesday.set(11,"Embedded Systems");
    wednesday.set(12,"Control Engineering");
    wednesday.set(13,"Break");
    wednesday.set(14,"Algorithms");
    wednesday.set(15,"Analog Communication");

    var thursday = new Map();
    thursday.set(9,"Measurement & Instrumentation");
    thursday.set(10,"Algorithms");
    thursday.set(11,"Waveguides & Antenna");
    thursday.set(12,"Analog Communication");
    thursday.set(13,"Break");
    thursday.set(14,"CMOS / CAO / ESD");
    thursday.set(15,"Embedded Systems");

    var friday = new Map();
    friday.set(9,"Control Engineering");
    friday.set(10,"CMOS / CAO / ESD");
    friday.set(11,"Measurement & Instrumentation");
    friday.set(12,"Embedded Systems");
    friday.set(13,"Break");
    friday.set(14,"-");
    friday.set(15,"-");

    var saturday = new Map();
    saturday.set(9,"Analog Communications");
    saturday.set(10,"Measurement & Instrumentation");
    saturday.set(11,"Algorithms");
    saturday.set(12,"Waveguides & Antenna");
    saturday.set(13,"Break");
    saturday.set(14,"-");
    saturday.set(15,"-");

    const timeTable = new Map();
    timeTable.set("monday",monday);
    timeTable.set("tuesday",tuesday);
    timeTable.set("wednesday",wednesday);
    timeTable.set("thursday",thursday);
    timeTable.set("friday",friday);
    timeTable.set("saturday",saturday);

    return(timeTable);
}
module.exports = timeTableData;