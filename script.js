var currentDate = dayjs();
$("#currentDay").text(currentDate.format("dddd, DD MMMM YYYY"));

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

$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});

$(".time-block").each(function () {
    var time = $(this).attr("id");
    console.log(time);
    var value = localStorage.getItem(time);
    $(this).children(".description").val(value);
});