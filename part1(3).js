

var xhr = new XMLHttpRequest(); //XMLHTTPRequest object
var parsedrecord; //parsed JSON file
//load pageSetup
window.onload = pageSetup;

function pageSetup() {
  //event listener
  document.getElementById("trade").addEventListener(
    "keyup",
    function () {
      searchByName(this.value);
    },
    false
  );
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      parsedrecord = JSON.parse(xhr.responseText);
      //displayData(r);
    }
  };
  xhr.open(
    "GET",
    "https://data.calgary.ca/resource/vdjc-pybd.json",
    true
  );
  xhr.send();
  document.getElementById("addy").addEventListener(
    "keyup",
    function () {
      searchByCity(this.value);
    },
    false
  );
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      parsedrecord = JSON.parse(xhr.responseText);
      //displayData(r);
    }
  };
  xhr.open(
    "GET",
    "https://data.calgary.ca/resource/vdjc-pybd.json",
    true
  );
  xhr.send();
}

function searchByName(li) {
  //set up table
  var output =
  "<tr><th>Business Name</th><th>License Type</th><th>Address</th><th>Information</th><th>Longitude</th><th>Latitude</th><th>View Map</th><th>View Website (If Applicable)</th></trth></tr>";
  var lisc;
  var gmap; //creates hyperlink
  //modify bp to include
  var position = ""; //Use this to enter latitude and longitude and add this as a value to the Select radio button
  //begin search
  for (var i = 0; i < parsedrecord.length; i++) {
    var record = parsedrecord[i];
    //check
    lisc = record.tradename; //assign
    if (lisc.toLowerCase().startsWith(li.toLowerCase())) {
      //partial match on string
      output += "<tr><td>";
      output += record.tradename;
      output += "</td><td>";
      output += record.licencetypes;
      output += "</td><td>";
      output += record.address;
      output += "</td><td>";
      output += record.comdistnm;
      output += "</td><td>";
      output += record.latitude;
      //add latitude to postition
      position = record.latitude;
      position += ",";
      output += "</td><td>";
      output += record.longitude;
      //add longitude to position
      position += record.longitude;
      output += "</td><td>";


      //create hyperlink gmap
      gmap =
        "<a href=https://www.google.com/maps/search/?api=1&query=" +
        position +
        " target=_blank>Click here to see map</a> ";
      output += gmap;
      output += "</td><td>";
      position += record.jobcreated;
      output += "</td><td>";
      document.getElementById("searchresults").innerHTML = output;
    }
   
  }
}

function searchByCity(ci) {
  //set up table
  var output =
  "<tr><th>Date</th><th>Event Title</th><th>Event Type</th><th>Information</th><th>Longitude</th><th>Latitude</th><th>View Map</th><th>View Website (If Applicable)</th></trth></tr>";
  var borough;
  var gmap; //creates hyperlink
  //modify bp to include
  var position = ""; //Use this to enter latitude and longitude and add this as a value to the Select radio button
  //begin search
  for (var i = 0; i < parsedrecord.length; i++) {
    var record = parsedrecord[i];
    //check
    borough = record.event_type; //assign
    if (borough.toLowerCase().startsWith(ci.toLowerCase())) {
      //partial match on string
      output += "<tr><td>";
      output += record.all_dates;
      output += "</td><td>";
      output += record.title;
      output += "</td><td>";
      output += record.event_type;
      output += "</td><td>";
      output += record.notes;
      output += "</td><td>";
      output += record.latitude;
      //add latitude to postition
      position = record.latitude;
      position += ",";
      output += "</td><td>";
      output += record.longitude;
      //add longitude to position
      position += record.longitude;
      output += "</td><td>";
      //create hyperlink gmap
      gmap =
        "<a href=https://www.google.com/maps/search/?api=1&query=" +
        position +
        " target=_blank>Click here to see map</a> ";
      output += gmap;
      output += "</td><td>";
      document.getElementById("searchresults").innerHTML = output;
    }
    if (ci == "") {
      document.getElementById("searchresults").innerHTML = "";
    }
  }
}