$(document).ready(function () {

    // Display current day.
    $("#currentDay").text(moment().format('h:mm a, dddd, MMMM Do YYYY'));
    var currentTime = moment().format('LT');
    var time01 = '1:00 AM';
    var time02 = '10:00 AM';
    // console.log(currentTime);
    // console.log( parseInt(currentTime));
    console.log(moment().format('k'));
    console.log(moment().format('k') < 3);
    // if(currentTime ){

    // }else{

    // }
    // Add <table> in Container
    var tableEl = $("<table>");
    $(".container").append(tableEl);
    
    // Declare to add timeIndex
    var timeCount = 9;

    // Add <tr> in table - 9:00AM to 5:00PM ( 9-rows )
    for (let j = 0; j < 9; j++) {
         // Add <tr> in table
        var trEl = $("<tr>");
        tableEl.append(trEl);

        // Add td in tr - time / textArea / saveButton ( 3 - column )
        for (let i = 0; i < 3; i++) {
            var tdEl = $("<td>");
            switch (i) {
                case 0: tdEl.attr("class", "hour");
                    tdEl.attr("time-index", timeCount);
                    tdEl.css({ "width": "10%", "text-align": "right", "padding": "10px" });
                    // Display Time ex) 9:00 AM , 10:00AM... 
                    if(timeCount < 13){
                        tdEl.text(timeCount+":00 AM");   
                    }else{
                        tdEl.text((parseInt(timeCount)-12)+":00 PM"); 
                    }               
                    timeCount++;
                    // Take timeName to use it as Key of localStorage 
                    var timeIndex = tdEl.text();
                    break;
                case 1:
                    var textareaEl = $("<textarea>");
                    tdEl.attr("class", "row description");
                    tdEl.css("width", "100%");
                    //If statament depend on Hour , moment().format('k') - 24 hours format
                    if(timeCount < moment().format('k')){
                        tdEl.css("background", "lightgray");
                        console.log(timeIndex);
                    }else if(timeCount === moment().format('k')){
                        tdEl.css("background", "rgb(255,150,150)");
                    }else{
                        tdEl.css("background", "lightblue");
                    }
                    // Save Description of Plan depanding on Keys
                    textareaEl.val(localStorage.getItem(timeIndex));
                    tdEl.append(textareaEl);
                    break;
                case 2:
                    var saveBtnEl = $("<button>");
                    var iEl = $("<i>");
                    saveBtnEl.attr("class", "saveBtn");
                    tdEl.css("width", "10%");
                    iEl.attr("class", "fas fa-save");
                    tdEl.append(saveBtnEl);
                    saveBtnEl.append(iEl);
                    break;
            }
            trEl.append(tdEl);
        }
    }

    // SaveButton
    $(".saveBtn").on("click", function(){
        // Take theTime of Plan ; ex) 9:00 AM , 10:00 AM , ...
        var scheduleTime = $(this).parent().parent().children().text();
        // Take Description of Plan ; ex) Meeting, ....
        var scheduleDescription = $(this).parent().parent().children().children().val();

        // Save data in localStorage
        localStorage.setItem(scheduleTime,scheduleDescription);
    });

});