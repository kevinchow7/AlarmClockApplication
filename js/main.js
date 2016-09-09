//Keeping Track Of All Variables 
//CurrentNum - In this way the number doesn't keep incrementing upwards 
var Hour_Slider
var Min_Slider

//Hour/Min/Sec of desired time 
var Hour;
var Min;

//Hour/Min/Sec of current time 
var currentHour;
var currentMin;

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
    'fgColor': "#FFFFFF",
    'release': function (v) {
      Hour_Slider = v

    }
  });

  $('.dial-min').knob({
    'min': 0,
    'max': 59,
    'width': 300,
    'height': 300,
    'displayInput': true,
    'fgColor': "#FFFFFF",
    'release': function (v) {
      Min_Slider = v
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
    //Reset Hour and Min 
    Hour = Hour_Slider
    Min = Min_Slider

    //Aesthetic Color Change 
    $("#Reset").css("color", "white");
    $("#Start").css("color", "yellow");

    //Grabs Current Time 
    var currentDate = new Date()
    currentHour = currentDate.getHours() //grabs hour in the 24 hours
    currentMin = currentDate.getMinutes()

    //Determine whether Current Time is AM or PM 
    if (currentHour > 12) {
      currentPM = "True"
      currentAM = "False"
    } else {
      currentPM = "False"
      currentAM = "True"
    }

    //Convert Hours into the 24 Hours Format 
    if (PM == "True") {
      Hour = Hour + 12
    }

    //Start the calculation in order to find the appropriate millisecond to set the time 

    //Subtract between the Desired_Time with the Current 

    diff_Hour = Hour - currentHour
    diff_Min = Min - currentMin
      //Situation 1: Both Current and Desired Time have the same Meridian
    if (currentPM == PM || currentAM == AM) {
      //if the difference is positive
      if (diff_Hour > 0) {
        calcMillisecond = diff_Hour * convert_Hour
        calcMillisecond = calcMillisecond + (diff_Min * convert_Min)
      } else {
        calcMillisecond = (diff_Hour + 24) * convert_Hour
        calcMillisecond = calcMillisecond + (diff_Min * convert_Min)
      }
      alert(calcMillisecond);

    } else {
      //Situation 2: Both Current and Desired Time have different Merdian 
      if (diff_Hour > 0) {
        calcMillisecond = (diff_Hour + 12) * convert_Hour
        calcMillisecond = calcMillisecond + (diff_Min * convert_Min)
      }
      alert(calcMillisecond);
    }

    //Set the timer action 
    /*
    var TimeSetter = setTimeOut(myFunction, calcMillisecond);
    myFunction would just be a function that triggers an alarm that sets off 
    */
    //Below is a rough idea on how to set the proximity sensor API written in pseudocode 
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