const classes = () =>{
  const dayTimeData = require('../dayTime');
  const dayTime = dayTimeData();
  var day = dayTime.get("day");
  var hour = dayTime.get("hour");

  // var day = "thursday"
  // console.log(time);
  // console.log(day);

  const timeTableData = require('../timeTableData');
  const timeTable = timeTableData();

  const monday = timeTable.get("monday");
  const tuesday = timeTable.get("tuesday");
  const wednesday = timeTable.get("wednesday");
  const thursday = timeTable.get("thursday");
  const friday = timeTable.get("friday");
  const saturday = timeTable.get("saturday");

 
  var current;
  var upcoming;
  var hour2 = hour;
  
  if (day == "monday"){
  current = monday.get(hour);
  if (current == undefined){
    current = "No Ongoing Class";
  }
  while (true){
  hour2 +=1;
   if(hour2 >= 16){
    upcoming = "No Upcoming Class";
    break
  }
  if(monday.get(hour2) != undefined  && monday.get(hour2) !="Break" && monday.get(hour2) !="-"){
    upcoming = monday.get(hour2);
    break
  }
 }
 }else if (day == "tuesday"){
  current = tuesday.get(hour);
  if (current == undefined){
    current = "No Ongoing Class";
  }
  while (true){
  hour2 +=1;
   if(hour2 >= 16){
    upcoming = "No Upcoming Class";
    break
  }
  if(tuesday.get(hour2) != undefined  && tuesday.get(hour2) !="Break" && tuesday.get(hour2) !="-"){
    upcoming = tuesday.get(hour2);
    break
  }
 }
 }else if (day == "wednesday"){
  current = wednesday.get(hour);
  if (current == undefined){
    current = "No Ongoing Class";
  }
  while (true){
  hour2 +=1;
  if(hour2 >= 16){
    upcoming = "No Upcoming Class";
    break
  }
  if(wednesday.get(hour2) != undefined  && wednesday.get(hour2) !="Break" && wednesday.get(hour2) !="-"){
    upcoming = wednesday.get(hour2);
    break
  }
 }
 }else if (day == "thursday"){
  current = thursday.get(hour);
  if (current == undefined){
    current = "No Ongoing Class";
  }
  while (true){
  hour2 +=1;
   if(hour2 >= 16){
    upcoming = "No Upcoming Class";
    break
  }
  if(thursday.get(hour2) == "Break"){
    continue;
  }else if(thursday.get(hour2) != undefined  && thursday.get(hour2) !="Break" && thursday.get(hour2) !="-"){
    upcoming = thursday.get(hour2);
    break
  }
 }
 }else if (day == "friday" ){
  current = friday.get(hour);
  if (current == undefined ){
    current = "No Ongoing Class";
  }
  while (true){
  hour2 +=1;
   if(hour2 >= 16){
    upcoming = "No Upcoming Class";
    break
  }
  if(friday.get(hour2) != undefined && friday.get(hour2) !="Break" && friday.get(hour2) !="-"){
      upcoming = friday.get(hour2);
    break

    
  }
 }
 }else if (day == "saturday"){
  current = saturday.get(hour);
  if (current == undefined ){
    current = "No Ongoing Class";
  }
  while (true){
  hour2 +=1;
  if(hour2 >= 16){
    
    upcoming = "No Upcoming Class";
    break
  }if(saturday.get(hour2) != undefined  && saturday.get(hour2) !="Break" && saturday.get(hour2) !="-"){
    upcoming = saturday.get(hour2);
    break
  }
 }
 }else if (day == "sunday"){
    current = "No Ongoing Class";
    upcoming = "No Upcoming Class";
 }
 if(hour2>12){
  hour2 -= 12;
}
if(hour>12){
  hour -= 12;
}
 hour = hour + ":00";
 hour2 = hour2 + ":00";
 if(current == "No Ongoing Class"){
  hour = "-"
 }
 if(upcoming == "No Upcoming Class"){
  hour2 = "-"
 }
 if(current == "Break" || current=="-"){
  current = "No Ongoing Class";
  hour = "-";
 }
//  if(upcoming == "Break"){
//   upcoming = "No Upcoming Class";
//   hour2 = "-";
//  }

 var link = new Map();
 link.set("Waveguides & Antenna","https://vnit.webex.com/meet/akothari");
 link.set("Control Engineering","https://vnit.webex.com/join/punitbhavsar");
 link.set("Measurement & Instrumentation","https://vnit.webex.com/meet/ksurender");
 link.set("Embedded Systems","https://vnit.webex.com/meet/manishaparlewar.aapp");
 link.set("Analog Communication","https://vnit.webex.com/meet/ankitbhurane");
 link.set("Algorithms","https://i.ibb.co/SJ90KrZ/2451354.jpg");
 link.set("CMOS / CAO / ESD","https://i.ibb.co/SJ90KrZ/2451354.jpg");

 var linkOn = link.get(current);
 var linkUp = link.get(upcoming);

 var data = {"ongoingClass" : current, "ongoingClassTime" : hour,"ongoingLink" : linkOn , "upcomingClass" : upcoming, "upcomingClassTime":hour2, "upcomingLink" : linkUp};

 return data;
}

module.exports = classes;