//Keeping Track Of All Variables 

var Hour;
var TenMin;
var Min;

var PM;
var AM;

$(document).ready(function () {
  //Knobs record the Hour, TenMin, and Min through the release function
  $('.dial-hour').knob({
    'min': 0,
    'max': 12,
    'width': 300,
    'height': 300,
    'displayInput': true,
    'fgColor': "#FFFFFF",
    'release': function (v) {
      Hour = v
    }
  });

  $('.dial-tenmin').knob({
    'min': 0,
    'max': 12,
    'width': 300,
    'height': 300,
    'displayInput': true,
    'fgColor': "#FFFFFF",
    'release': function (v) {
      TenMin = v
    }
  });

  $('.dial-min').knob({
    'min': 0,
    'max': 12,
    'width': 300,
    'height': 300,
    'displayInput': true,
    'fgColor': "#FFFFFF",
    'release': function (v) {
      Min = v
    }
  });

  //Handles when AM and PM is clicked. Adds fancy animation. 
  $('#AM').click(function () {
    AM = "True"
    PM = "False"
    $("#AM").css("color", "yellow");
    $("#PM").css("color", "white");
  })

  $('#AM').hover(
    function () {
      $("#AM").css("font-weight", "bold");
    },
    function () {
      $("#AM").css("font-weight", "normal");
    }
  )

  $('#PM').click(function () {
    PM = "True"
    AM = "False"
    $("#AM").css("color", "white");
    $("#PM").css("color", "yellow");
  })

  $('#PM').hover(
    function () {
      $("#PM").css("font-weight", "bold");
    },
    function () {
      $("#PM").css("font-weight", "normal");
    }
  )

  $('#Start').hover(
    function () {
      $("#Start").css("font-weight", "bold");
    },
    function () {
      $("#Start").css("font-weight", "normal");
    }
  )

  $('#Reset').hover(
    function () {
      $("#Reset").css("font-weight", "bold");
    },
    function () {
      $("#Reset").css("font-weight", "normal");
    }
  )


  //Timer logic is located here 
  $('#Start').click(function () {

    //Aesthetic Color Change 
    $("#Reset").css("color", "white");
    $("#Start").css("color", "yellow");

    //Grabs Current Time 




  })

  //Force Resets
  $('#Reset').click(function () {
    $("#Start").css("color", "white");
    $("#Reset").css("color", "yellow");
  })




})