function test(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coordinates = "X coordinates: " + x + " Y coordinates: " + y;
  console.log(coordinates);
}


function slider(slider, Bef, Aft, total_width) {
  var slider_value = document.getElementById(slider).value;
  console.log("slider_value: " + slider_value);
  var width1 = slider_value;
  var width1_px = width1 + "px";
  var width2 = total_width - width1;
  var width2_px = width2 + "px";
    // if (width1 < 10) {
    //   width1_px = 10 + "px";
    //   width2_px = total-width - 10 + "px";
    // }
    // if (width2 < 10) {
    //   width2_px = 10 + "px";
    //   width1_px = total_width - 10 + "px";
    // }

  // var width2 = total_width - width1;
  document.getElementById(Bef).style.width = width1_px;
  document.getElementById(Aft).style.width = width2_px;
  // document.getElementById("value").innerHTML = this.value;
}

function showSlider(slider) {
  var all_sliders = ["ForestFireSlider", "DroughtSlider", "ATTSlider", "MiamiSlider"]
  var index = all_sliders.indexOf(slider);
  all_sliders.splice(index, 1);
  if (document.getElementById(slider).style.display === "block") {
    document.getElementById(slider).style.display = "none";
  }
  else {
    document.getElementById(slider).style.display = "block";
    for (var i = 0; i < 3; i++) {
      var id_name = all_sliders[i];
      document.getElementById(id_name).style.display = "none";
    }
  }
}
