  // function repByZip() {
//   var zipcode = document.getElementById("repByZip").value;
//   console.log(zipcode);
//   var query = "https://whoismyrepresentative.com/getall_mems.php?zip=" + zipcode + "&output=json";
//   console.log(query);
//
//   repRequest = new XMLHttpRequest();
//   repRequest.open("GET", query, true);
//   repRequest.onload = processRepRequest;
//   repRequest.send();
// }
//
// function processRepRequest () {
//   var repInfo = JSON.parse(repRequest.responseText)
//   console.log(repInfo)
//
//
// }
// function test() {
//   console.log("test = true")
// }

function repByZip() {
  var zipcode = document.getElementById("repByZip").value;
  console.log(zipcode);
  var query = "https://whoismyrepresentative.com/getall_mems.php?zip=" + zipcode + "&output=json";
  // var query = "https://congress.api.sunlightfoundation.com"
  console.log(query);

  var repRequest = new XMLHttpRequest();
  repRequest.open("GET", query, true);
  // repRequest.onload = processRepRequest();
  repRequest.onreadystatechange=function() {
    if(this.readyState ==4 && this.status ==200) {
      var responseText = repRequest.responseText;
      var repInfo = JSON.parse(responseText);
      document.getElementById('repStats').innerHTML = "";
      document.getElementById('repStats').innerHTML = "<h2 style = 'color:black'>Representatives</h2>";
      repInfo.results.forEach(function (element) {
        var div = document.createElement('div');
        div.innerHTML = "<li><strong>" + element.name + ": </strong> <ul> Party: " + element.party + "</ul> <ul> State, District: " + element.state + ", " + element.district + "</ul> <ul> Phone Number: " + element.phone + "</ul> <ul> Website: <a href = '" + element.link + "' style = 'color:blue' target = '_blank'>" + element.link + "</a> </u></li>" ;
        document.getElementById('repStats').appendChild(div);
      });
    }
  }
  repRequest.send();
}


function test() {
  console.log("test = true")
}
