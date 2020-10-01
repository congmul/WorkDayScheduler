$(document).ready(function () {

    // Display current day.
    $("#currentDay").text(moment().format('h:mm a, dddd, MMMM Do YYYY'));

    // Add <table> in Container
    var tableEl = $("<table>");
    $(".container").append(tableEl);
    
    for (let j = 0; j < 9; j++) {
         // Add <tr> in table
        var trEl = $("<tr>");
        tableEl.append(trEl);
        
        // Add td in tr
        for (let i = 0; i < 3; i++) {
            var tdEl = $("<td>");
            switch (i) {
                case 0: tdEl.attr("class", "hour");
                    tdEl.css({ "width": "10%", "text-align": "right", "padding": "10px" });
                    tdEl.text("9:00 AM");   // Put Time ex) 9:00 AM , 10:00AM... tdEl.text();
                    break;
                case 1:
                    var textareaEl = $("<textarea>");
                    tdEl.attr("class", "row");
                    tdEl.css("width", "100%");
                    //If statament depend on Hour
                    tdEl.css("background", "lightgray");
                    tdEl.css("background", "rgb(255,150,150)");
                    tdEl.css("background", "lightblue");
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

    // var tdEl = $("<td>");
    // var tdEl1 = $("<td>");
    // var tdEl2 = $("<td>");

    // var saveBtnEl = $("<button>");
    // var iEl = $("<i>");

    // var textareaEl = $("<textarea>");
    // textareaEl.attr("class","row");

    // iEl.attr("class","fas fa-save");

    // tdEl.text("9 AM");

    // tdEl.attr("class", "hour");
    // tdEl1.attr("class","row");

    // saveBtnEl.attr("class","saveBtn");


    // trEl.append(tdEl);
    // trEl.append(tdEl1);
    // trEl.append(tdEl2);

    // tdEl1.append(textareaEl);
    // tdEl2.append($(saveBtnEl));
    // saveBtnEl.append(iEl);










});