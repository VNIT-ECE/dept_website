const timeTableData = () => {
    var monday = new Map();
    monday.set(9, "-");
    monday.set(10, "ES");
    monday.set(11, "CE");
    monday.set(12, "CMOS / CAO / ESD");
    monday.set(13, "Break");
    monday.set(14, "WA");
    monday.set(15, "-");

    var tuesday = new Map();
    tuesday.set(9, "Algo");
    tuesday.set(10, "WA");
    tuesday.set(11, "AC");
    tuesday.set(12, "MI");
    tuesday.set(13, "Break");
    tuesday.set(14, "-");
    tuesday.set(15, "CE");

    var wednesday = new Map();
    wednesday.set(9, "CMOS / CAO / ESD");
    wednesday.set(10, "-");
    wednesday.set(11, "ES");
    wednesday.set(12, "CE");
    wednesday.set(13, "Break");
    wednesday.set(14, "Algo");
    wednesday.set(15, "AC");

    var thursday = new Map();
    thursday.set(9, "MI");
    thursday.set(10, "Algo");
    thursday.set(11, "WA");
    thursday.set(12, "AC");
    thursday.set(13, "Break");
    thursday.set(14, "CMOS / CAO / ESD");
    thursday.set(15, "ES");

    var friday = new Map();
    friday.set(9, "CE");
    friday.set(10, "CMOS / CAO / ESD");
    friday.set(11, "MI");
    friday.set(12, "ES");
    friday.set(13, "Break");
    friday.set(14, "-");
    friday.set(15, "-");

    var saturday = new Map();
    saturday.set(9, "AC");
    saturday.set(10, "MI");
    saturday.set(11, "Algo");
    saturday.set(12, "WA");
    saturday.set(13, "Break");
    saturday.set(14, "-");
    saturday.set(15, "-");

    const timeTable = new Map();
    timeTable.set("monday", monday);
    timeTable.set("tuesday", tuesday);
    timeTable.set("wednesday", wednesday);
    timeTable.set("thursday", thursday);
    timeTable.set("friday", friday);
    timeTable.set("saturday", saturday);

    return (timeTable);
}
module.exports = timeTableData;