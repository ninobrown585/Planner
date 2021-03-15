

$(document).ready(function() {
    //function that displays current time and date//
    function timeDate () {
        $("#currentDay").text(moment().format("MMMM Do YYYY h:mm:ss a"));
    };
   
    //click function that stores time and input to local storage//
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(time, text);

        localStorage.setItem(time, text);
        
    });

    //receives info from local storage and places it into each hour//
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    //checks for past, present, and future times which are then color-coded//
    $('.time-block').each(function() {
        var currentHour = moment().hour();
        var myHour = parseInt($(this).attr('id').split("hour")[1]);
        if(myHour === currentHour ){
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
        } 
        else if(myHour < currentHour ){
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
        }  else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
        }
    });   
    
    //updates time every second
    setInterval(timeDate, 1000);  

})