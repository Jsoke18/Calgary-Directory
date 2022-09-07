

var xhr = new XMLHttpRequest(); //XMLHTTPRequest object
var parsedrecord; //parsed JSON file
//load pageSetup
window.onload = pageSetup;

function pageSetup() {
  //event listener
  document.getElementById("add").addEventListener(
    "keyup",
    function () {
      searchByStore(this.value);
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
    "https://data.calgary.ca/resource/2kp2-hsy7.json",
    true
  );
  xhr.send();
  document.getElementById("tab").addEventListener(
    "keyup",
    function () {
      searchByAddress(this.value);
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
    "https://data.calgary.ca/resource/2kp2-hsy7.json",
    true
  );
  xhr.send();
}



function searchByStore(ad) {
  //set up table
  var output =
    "<tr><th>Address</th><th>Title</th><th>Tab Name</th><th>Latitude</th><th>Longitude</th><th>Description</th><th>View Map</th><th>View Website (If Applicable)</th></trth></tr>";
  var address;
  parsedrecord = JSON.parse(xhr.responseText);

  var gmap; //creates hyperlink
  //modify bp to include
  var position = ""; //Use this to enter latitude and longitude and add this as a value to the Select radio button
  //begin search
  for (var i = 0; i < parsedrecord.length; i++) {
    var record = parsedrecord[i];
    //check
    address = record.address; //assign
    if (address.toLowerCase().startsWith(ad.toLowerCase())) {
      //partial match on string
      output += "<tr><td>";
      output += record.address;
      output += "</td><td>";
      output += record.title;
      output += "</td><td>";
      output += record.tab_name;
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
      output += record.short_desc;
      output += "</td><td>";

      //create hyperlink gmap
      gmap =
        "<a href=https://www.google.com/maps/search/?api=1&query=" +
        position +
        " target=_blank>Click here to see map</a> ";
      output += gmap;
      output += "</td><td>";
      if (record.website != null) {
        output +=
          "<a href=https://" + record.website + ">" + record.website + "</a>";

        output += "</td></tr>";
      }
      document.getElementById("searchresults").innerHTML = output;
    }
    // if (ad == "") {
    //   document.getElementById("searchresults").innerHTML = "";
      }
}

function searchByAddress(ta) {
  //set up table
  var output =
    "<tr><th>Store Name</th><th>Address</th><th>Latitude</th><th>Longitude</th><th>Type</th><th>View Map</th><th>View Website (If Applicable)</th></trth></tr>";
  var tabName;
  var gmap; //creates hyperlink
  //modify bp to include
  var position = ""; //Use this to enter latitude and longitude and add this as a value to the Select radio button
  //begin search
  for (var i = 0; i < parsedrecord.length; i++) {
    var record = parsedrecord[i];
    //check
    tabName = record.tab_name; //assign
    if (tabName.toLowerCase().startsWith(ta.toLowerCase())) {
      //partial match on string
      output += record.address;
      output += "</td><td>";
      output += record.title;
      output += "</td><td>";
      output += record.tab_name;
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
      output += record.short_desc;
      output += "</td><td>";
      //create hyperlink gmap
      gmap =
        "<a href=https://www.google.com/maps/search/?api=1&query=" +
        position +
        " target=_blank>Click here to see map</a> ";
      output += gmap;
      output += "</td><td>";
      if (record.website != null) {
        output +=
          "<a href=https://" + record.website + ">" + record.website + "</a>";

        output += "</td></tr>";
      }
      document.getElementById("searchresults").innerHTML = output;
    }
    if (ta == "") {
      document.getElementById("searchresults").innerHTML = "";
    }
  }
}
