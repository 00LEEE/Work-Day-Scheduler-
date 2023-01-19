// Handler for .ready
window.onload = function() {
    // Save button listener
    $(".saveBtn").on("click", function () {
        var userText = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        // local storage saves
        localStorage.setItem(time, userText)
   })

   // Gets timeblock value from local storage using for loop
   let hours = ["07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
for (let i = 0; i < hours.length; i++) {
    $(`#hour${hours[i]} .description`).val(localStorage.getItem(`hour${hours[i]}`));
}

   function timeChecker() {

    var currentTime = dayjs().hour()

    // Loops through each hour
    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("id").split("hour")[1])

        if (currentHour < currentTime) {
            $(this).addClass("past")
            $(this).removeClass("present")
            $(this).removeClass("future")
        }
        else if (currentHour === currentTime) {
            $(this).removeClass("past")
            $(this).addClass("present")
            $(this).removeClass("future")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
}
timeChecker()
};
 

// Displays today's date
var currentDate = dayjs().format('dddd, MMMM DD YYYY')
$("#currentDay").html(currentDate)