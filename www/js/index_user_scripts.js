/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Start */
    $(document).on("click", ".uib_w_64", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  Aufgabe hinzufügen */
    $(document).on("click", ".uib_w_66", function(evt)
    {
         /*global activate_page */
         activate_page("#Aufgabe_erstellen"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

//Aktuelles Datum im Header von Tagesansicht anzeigen
//document.getElementById("current_date").innerHTML = getDay().getMonth().getFullYear();
var d = new Date();
var year = d.getFullYear();
var day = d.getDate();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()]; 
document.getElementById("currentDate").innerHTML = day + "." + n +"." + year;