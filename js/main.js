//Keeping Track Of All Variables 
//CurrentNum - In this way the number doesn't keep incrementing upwards 
var Hour_Slider;
var Min_Slider;

//Difference between desired and current time 
var diff_Hour;
var diff_Min;
var dif_Sec;

//PM/AM of desired time 
//Bool 
var PM;
var AM;

//PM/AM of current time 
//Bool
var currentPM;
var currentAM;

//Final Millisecond 
var calcMillisecond;

//Conversion
var convert_Hour = 3600000;
var convert_Min = 60000;

$(document).ready(function () {
  //Knobs record the Hour, TenMin, and Min through the release function
  $('.dial-hour').knob({
    'min': 0,
    'max': 12,
    'width': 300,
    'height': 300,
    'displayInput': true,
    'fgColor': "#FFFF00",
    'release': function (v) {
      Hour_Slider = v;

    }
  });

  $('.dial-min').knob({
    'min': 0,
    'max': 59,
    'width': 300,
    'height': 300,
    'displayInput': true,
    'fgColor': "#FFFF00",
    'release': function (v) {
      Min_Slider = v;
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
    //Hour/Min/Sec of desired time
    const DAY_MS = 86400000;
    var Hour;
    var Min;

    //Reset Hour and Min 
    Hour = Hour_Slider
    Min = Min_Slider

    //Aesthetic Color Change 
    $("#Reset").css("color", "white");
    $("#Start").css("color", "yellow");

    //Grabs Current Time 
    var currentTime = new Date();
    var desiredTime = new Date();
    if (AM && Hour == 12) Hour = 0;
    else if (PM && Hour != 12) Hour += 12;
    desiredTime.setHours(Hour, Min, 0);

    //Start the calculation in order to find the appropriate millisecond to set the time 
    diffTime = desiredTime.getTime() - currentTime.getTime();
    if (diffTime < 0) desiredTime.setTime(desiredTime.getTime() + DAY_MS);
    diffTime = desiredTime.getTime() - currentTime.getTime();

    console.log('time to wait (s): ' + diffTime);

    //Set the timer action 
    var TimeSetter = setTimeout(function () {
      alert('hi!');
    }, diffTime);

    /*
      When the proximity sensor is activated { 
        use the clearInterval(setTimeOut)
      }
    
    
    
    */


  })

  //Force Resets
  $('#Reset').click(function () {
    $("#Start").css("color", "white");
    $("#Reset").css("color", "yellow");
    location.reload();
  })




})