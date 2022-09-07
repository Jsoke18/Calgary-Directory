function pubArt() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("display").innerHTML = xhr.responseText;
      pageSetup("art");
    }
  };
  xhr.open("GET", "part1.html", true);
  xhr.send();
  boo = true;
}

function getEvent() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("display").innerHTML = xhr.responseText;
      pageSetup("eve");
    }
  };
  xhr.open("GET", "part1(2).html", true);
  xhr.send();
  boo = true;
}

function getBus() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("display").innerHTML = xhr.responseText;
      pageSetup("bus");
    }
  };
  xhr.open("GET", "part.(3).html", true);
  xhr.send();
  boo = true;
}

var xhr = new XMLHttpRequest(); //XMLHTTPRequest object
var parsedrecord; //parsed JSON file
//load pageSetup
//  "https://data.calgary.ca/resource/2kp2-hsy7.json",

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
          "<a href=https://" + record.website + ">Website</a>";

        output += "</td></tr>";
      }
      document.getElementById("searchresults").innerHTML = output;
    }
    if (ad == "") {
       document.getElementById("searchresults").innerHTML = "";
  }
}
}

function searchByTab(ta) {
  //set up table
  var output =
  "<tr><th>Address</th><th>Title</th><th>Tab Name</th><th>Latitude</th><th>Longitude</th><th>Description</th><th>View Map</th><th>View Website (If Applicable)</th></trth></tr>";
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
    if (ta == "") {
      document.getElementById("searchresults").innerHTML = "";
    }
  }
}

var xhr = new XMLHttpRequest(); //XMLHTTPRequest object
var parsedrecord; //parsed JSON file
//load pageSetup

//"https://data.calgary.ca/resource/n625-9k5x.json",
  function searchByTitle(da) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        parsedrecord = JSON.parse(xhr.responseText);

        //set up table
        var output =
        "<tr><th>Event Title</th><th>Date</th><th>Event Type</th><th>Information</th><th>Longitude</th><th>Latitude</th><th>View Map</th><th>View Website (If Applicable)</th></tr></tr>";
        var title;
        var gmap; //creates hyperlink
        //modify bp to include
        var position = ""; //Use this to enter latitude and longitude and add this as a value to the Select radio button
        //begin search
        for (var i = 0; i < parsedrecord.length; i++) {
          var record = parsedrecord[i];
          //check
          title = record.title; //assign
          if (title.toLowerCase().startsWith(da.toLowerCase())) {
            //partial match on string
            output += "<tr><td>";
            output += record.title;
            output += "</td><td>";
            output += record.event_type;
            output += "</td><td>";
            output += record.notes;
            output += "</td><td>";
            output += record.address;
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
            if (record.more_info_url != null) {
              output +=
                "<a href=https://" +
                record.more_info_url +
                ">" +
                record.more_info_url +
                "</a>";

              output += "</td></tr>";
            }
            document.getElementById("searchresults").innerHTML = output;
          }
        }
      }
    };
    xhr.open("GET", "https://data.calgary.ca/resource/n625-9k5x.json", true);
    xhr.send();
  };

function searchByEvent(ev) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      parsedrecord = JSON.parse(xhr.responseText);

  //set up table
  var output =
  "<tr><th>Event Title</th><th>Date</th><th>Event Type</th><th>Information</th><th>Longitude</th><th>Latitude</th><th>View Map</th><th>View Website (If Applicable)</th></tr></tr>";
  var borough;
  var gmap; //creates hyperlink
  //modify bp to include
  var position = ""; //Use this to enter latitude and longitude and add this as a value to the Select radio button
  //begin search
  for (var i = 0; i < parsedrecord.length; i++) {
    var record = parsedrecord[i];
    //check
    borough = record.address; //assign
    if (borough.toLowerCase().startsWith(ev.toLowerCase())) {
            //partial match on string
            output += "<tr><td>";
            output += record.title;
            output += "</td><td>";
            output += record.event_type;
            output += "</td><td>";
            output += record.address;
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
            if (record.more_info_url != null) {
              output +=
                "<a href=https://" +
                record.more_info_url +
                ">" +
                record.more_info_url +
                "</a>";

              output += "</td></tr>";
            }
            document.getElementById("searchresults").innerHTML = output;
          }
        }
      }
    };
    xhr.open("GET", "https://data.calgary.ca/resource/n625-9k5x.json", true);
    xhr.send();
  };

var xhr = new XMLHttpRequest(); //XMLHTTPRequest object
var parsedrecord; //parsed JSON file
//load pageSetup

function pageSetup(val) {
  //event listener

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      parsedrecord = JSON.parse(xhr.responseText);
      //displayData(r);
    }
  };
  if (val == "bus") {
    xhr.open("GET", "https://data.calgary.ca/resource/vdjc-pybd.json", true);
  }
  if (val == "art") {
    xhr.open("GET", "https://data.calgary.ca/resource/2kp2-hsy7.json", true);
  }
  if (val == "eve") {
    xhr.open("GET", "https://data.calgary.ca/resource/n625-9k5x.json", true);
  }
  xhr.send();
}

function searchByTrade(li) {


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

function searchByEvType(ev) {
  parsedrecord = JSON.parse(xhr.responseText);

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
    borough = record.licencetypes; //assign
    if (borough.toLowerCase().startsWith(ev.toLowerCase())) {
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
      document.getElementById("searchresults").innerHTML = output;
    }
    if (ci == "") {
      document.getElementById("searchresults").innerHTML = "";
    }
  }
}
