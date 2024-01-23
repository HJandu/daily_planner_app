
// display current date
var currentDate = dayjs();
$("#currentDay").text(currentDate.format("dddd, DD MMMM YYYY"));

// change color of time blocks based on current time
$(".time-block").each(function () {
    var currentHour = currentDate.hour();
    var blockHour = parseInt($(this).attr("id"));
    if (blockHour < currentHour) {
        $(this).addClass("past");
    } else if (blockHour === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});

// save button click listener
$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});

// load any saved data from localStorage
$(".time-block").each(function () {
    var time = $(this).attr("id");
    console.log(time);
    var value = localStorage.getItem(time);
    $(this).children(".description").val(value);
});

// clear past events
$("#clear").on("click", function () {
    alert("All events have been cleared!");
    localStorage.clear();
    $(".description").val("");

});

