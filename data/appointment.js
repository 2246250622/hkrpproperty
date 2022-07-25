var appointment = `[{
  "name": "Happy Garden",
  "district": "Tuen Mun",
  "user": "James Wong",
  "phone": "12345678",
  "agent": "Ameila@gmail.com",
  "src": "./img/estate1.jpeg",
  "agentName": "Amelia Lai",
  "status": "non-confirm",
  "date" : "2020-11-19",
  "month" : "2020-11",
  "time" : "10:30"
},
{
  "name": "Kowloon Garden",
  "district": "Kowloon City",
  "user": "James Wong",
  "phone": "12345678",
  "agent": "Agen51t@gmail.com",
  "src": "./img/estate3.jpeg",
  "month" : "2020-11",
  "agentName": "Joseph Lee",
  "status": "confirm",
  "url": "confirmed-appointment1.html",
  "date" : "2020-11-10",
  "time" : "17:20"
}]`;

var appointment2 = `[{
  "name": "Happy Garden",
  "district": "Tuen Mun",
  "user": "James Wong",
  "phone": "12345678",
  "agent": "Ameila@gmail.com",
  "src": "./img/estate1.jpeg",
  "agentName": "Amelia Lai",
  "status": "non-confirm",
  "date" : "2020-11-19",
  "month" : "2020-11",
  "time" : "10:30"
},
{
  "name": "Kowloon Garden",
  "district": "Kowloon City",
  "user": "James Wong",
  "phone": "12345678",
  "agent": "Agen51t@gmail.com",
  "src": "./img/estate3.jpeg",
  "month" : "2020-11",
  "agentName": "Joseph Lee",
  "status": "confirm",
  "url": "confirmed-appointment1.html",
  "meetingPlace": "Office",
  "date" : "2020-11-10",
  "time" : "17:20"
},
{
    "name": "Cool Garden",
    "district": "Wan Chai",
    "user": "John Wick",
    "phone": "54654843",
    "agent": "Agen5214t@gmail.com",
    "src": "./img/estate1.jpeg",
    "month" : "2020-08",
    "agentName": "Franky Chu",
    "meetingPlace": "Estate",
    "status": "confirm",
    "url": "confirmed-appointment1.html",
    "date" : "2020-08-05",
    "time" : "12:25"
  }]`;


function appendAgentInfo(){
  if(window.location.href.includes("confirmed-appointment1.html")){
    var data = JSON.parse(appointment);
    var agentData = JSON.parse(agents);
    var targetEmail = data[1].agent;
    var agent;
    $.each(agentData, function(keys, value){
      if(targetEmail = value.email){
        agent = value;
        return;
      }
    });
    console.log(agent);
  }
}

function appendArrangedAppointment(){
  var target = $(".appointment-table");
  var content = "";
  var data = JSON.parse(appointment2);
  $.each(data, function(keys, value){
    if(value.status == "confirm"){
      content += "<tr>" + "<td>" +  value.agentName + "</td>"
          + "<td>" + value.name + "</td>"
          + "<td>" + value.date + "</td>"
          + "<td>" + value.status + "</td>"
          + "<td><button class='btn detailsBtn' style='margin-left: 5px;padding: 5px; font-size: 15px;'>Details</button>";
    }
  });
  target.find("tr").after(content);
}

function getArrangedAppointmentDetails(x, y){
  var data = JSON.parse(appointment2);
  $.each(data, function(keys, value){
    if(value.agentName == x && value.date == y){
      $("#estate-name1").val(value.name);
      $("#agent-name").val(value.agentName);
      $("#place").val(value.meetingPlace);
      $("#fullname1").val(value.user);
      $("#phone1").val(value.phone);
      $("#date1").val(value.date);
      $("#datetime1").val(value.time);
    }
  });
}

function filterResult(x, y){
  var target = $(".appointment-table");
  var content = `<table class="appointment-table" >
  <tr>
      <th>Agent</th>
      <th>Estate Name</th>
      <th>Appointment Date</th>
      <th>Status</th>
      <th class="details"></th>
  </tr>`;
  var data = JSON.parse(appointment2);
  $(".appointment-table").html('');
  if(x == "" && y == "all"){
    $.each(data, function(keys, value){
      if(value.status == "confirm"){
        content += "<tr>" + "<td>" +  value.agentName + "</td>"
            + "<td>" + value.name + "</td>"
            + "<td>" + value.date + "</td>"
            + "<td>" + value.status + "</td>"
            + "<td><button class='btn detailsBtn' style='margin-left: 5px;padding: 5px; font-size: 15px;'>Details</button>";
      }
    });
    content += "</table>";
  } else if(x == "" && y != "all") {
    $.each(data, function(keys, value){
      if(value.status == "confirm" && value.agentName == y){
        content += "<tr>" + "<td>" +  value.agentName + "</td>"
            + "<td>" + value.name + "</td>"
            + "<td>" + value.date + "</td>"
            + "<td>" + value.status + "</td>"
            + "<td><button class='btn detailsBtn' style='margin-left: 5px;padding: 5px; font-size: 15px;'>Details</button>";
      }
    });
  } else if(x != "" && y == "all"){
    $.each(data, function(keys, value){
      if(value.status == "confirm" && value.date == x){
        content += "<tr>" + "<td>" +  value.agentName + "</td>"
            + "<td>" + value.name + "</td>"
            + "<td>" + value.date + "</td>"
            + "<td>" + value.status + "</td>"
            + "<td><button class='btn detailsBtn' style='margin-left: 5px;padding: 5px; font-size: 15px;'>Details</button>";
      }
    });
  } else {
    $.each(data, function(keys, value){
      if(value.status == "confirm" && value.date == x && value.agentName == y){
        content += "<tr>" + "<td>" +  value.agentName + "</td>"
            + "<td>" + value.name + "</td>"
            + "<td>" + value.date + "</td>"
            + "<td>" + value.status + "</td>"
            + "<td><button class='btn detailsBtn' style='margin-left: 5px;padding: 5px; font-size: 15px;'>Details</button>";
      }
    });
  }
  $(".appointment-table").html(content);
  console.log(x);
}
