// variables
var timeNow = moment().format("MMM Do YY");
var taskTime = $(".input-group-text").text();
var hourNow = moment().format("HH");
//var hourNow = "13"; // for testing purposes

// Today part

$("#currentDay").text(timeNow);

// Store in local storage the tasks and hour

$(".save-button").on("click", function (event) {
  var tasks = $(event.target).parent().siblings().last();
  var hour = $(event.target).parent().siblings().first();
  localStorage.setItem(hour.text().trim(), tasks.val());
});

//changing background color for past/present/future

$(".input-group-text").each(function () {
  if ($(this).data("time") === parseInt(hourNow, 10)) {
    $(this).parent().siblings().first().css("background-color", "red"); // coloring of present
  } else if ($(this).data("time") > parseInt(hourNow, 10)) {
    $(this).parent().siblings().first().css("background-color", "#77dd77"); // coloring of future
  } else if ($(this).data("time") < parseInt(hourNow, 10)) {
    $(this).parent().siblings().first().css("background-color", "#d3c6c6"); // coloring of past
    //   console.log($(".input-group-text").text()););
  }
});

var test = localStorage.getItem("hour");
console.log(test);

// function to get data from local storage
$(".input-group-text").each(function () {
  var hour = $(this).text().trim();
  var taskList = localStorage.getItem(hour);
  if (taskList === null) {
    //console.log("Cannot get from the local storage");
    return;
  } else {
    $(this).parent().siblings().first().val(taskList);
  }
  console.log(taskList + " for the slot " + hour);
});
