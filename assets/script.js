// display current date on page load
var updateDate = function () {
    document.getElementById("currentDay")
    .innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a")
}
setInterval(updateDate, 1000);

$(document).ready(function() {
    //assign past, present, or future to timeblocks
    function scheduleTime() {
        var hour = moment().hours()
        
        $(".time-block").each(function() {
            var workTime = $(this).attr("id")

            if (workTime < hour) {
                // $(this).removeClass("future")
                // $(this).removeClass("present")
                $(this).addClass("past")
            } else if (workTime == hour) {
                // $(this).removeClass("future")
                $(this).removeClass("past")
                $(this).addClass("present")
            } else {
                $(this).removeClass("present")
                // $(this).removeClass("past")
                $(this).addClass("future")
            }
        })
    }
    
    //save to local storage
    $(".saveBtn").click(function() {
        var time = $(this).parent().attr("id")
        var task = $(this).siblings(".description").val()
        
        localStorage.setItem(time, task)
    })

    scheduleTime()
})

// data from event persists when page refreshed
$("#9 .description").val(localStorage.getItem("8"))
$("#10 .description").val(localStorage.getItem("9"))
$("#11 .description").val(localStorage.getItem("10"))
$("#12 .description").val(localStorage.getItem("11"))
$("#13 .description").val(localStorage.getItem("12"))
$("#14 .description").val(localStorage.getItem("13"))
$("#15 .description").val(localStorage.getItem("14"))
$("#16 .description").val(localStorage.getItem("15"))
$("#17 .description").val(localStorage.getItem("16"))