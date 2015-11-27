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
    
    
        /* button  Aufgabe hinzufügen */
    
    
        /* button  #Aufgaben_neue_aufgaben */
    $(document).on("click", "#Aufgaben_neue_aufgaben", function(evt)
    {
 
    });
    
        /* button  #Woche_neue-aufgaben */
    $(document).on("click", "#Woche_neue-aufgaben", function(evt)
    {
         /*global activate_page */
         activate_page("#Aufgabe_erstellen"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

//Aktuelles Datum im Header von Tagesansicht anzeigen
//document.getElementById("current_date").innerHTML = getDay().getMonth().getFullYear();

function Tagesdatum() {
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
};
window.onload=Tagesdatum;
