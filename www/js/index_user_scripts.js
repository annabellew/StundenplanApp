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
     
        /* button Tag */
     $(document).on("click", "#tag", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         
         /* Tabelle Kurse */
         /* To do: nur Kurse des gewählten Tages ausgeben */
        var request1=new XMLHttpRequest();
        request.open('GET', "http://localhost/api/getKurs.php");
        request.onreadystatechange = function() {
        if ((request.readyState === 4) && (request.status === 200)) {
            //alert(request.responseText);
            var items = JSON.parse(request.responseText) ;
            //alert(items.length);
            var output = '<p>Kurse</p><table border="1"><tr><th>Aufgabe</th><th>Datum</th><th>Kurs</th><th>Kategorie>';
            for (var key in items) {
                output += '<tr><td>' + items[key].idKurs + '</td><td>' + items[key].bezeichnung + '</td><td>' + items[key].Dozent_idDozent + '</td></tr>';   
            }
            output += '</table>';
            document.getElementById('vorlesungen_tabelle').innerHTML = output;
            }
 
    }
             
    /* Tabelle Aufgaben */
     /* To do: nur Aufgaben des gewählten Tages ausgeben */
     var request2=new XMLHttpRequest();
        request.open('GET', "http://localhost/api/getAufgaben.php");
        request.onreadystatechange = function() {
        if ((request.readyState === 4) && (request.status === 200)) {
            alert(request.responseText);
            var items = JSON.parse(request.responseText) ;
            alert(items.length);
            var output = '<p>Aufgaben</p><table border="1"><tr><th>Aufgabe</th><th>Datum</th><th>Kurs</th><th>Kategorie>';
            for (var key in items) {
                output += '<tr><td>' + items[key].titel + '</td><td>' + items[key].datum + '</td><td>' + items[key].Kurs_idKurs + '</td><td>' + items[key].kategorie_idkategorie + '</td></tr>';   
            }
            output += '</table>';
            document.getElementById('aufgaben_tabelle').innerHTML = output;
            }
 
    }
    request1.send();
    request2.send();
    });
    
        /* button  #Aufgaben_neue_aufgaben */
    $(document).on("click", "#Aufgaben_neue_aufgaben", function(evt)
    {
        var request=new XMLHttpRequest();
        request.open('GET', "http://localhost/api/getAufgaben.php");
        request.onreadystatechange = function() {
        if ((request.readyState === 4) && (request.status === 200)) {
            alert(request.responseText);
            var items = JSON.parse(request.responseText) ;
            alert(items.length);
            var output = '<table border="1"><tr><th>Aufgabe</th><th>Datum</th><th>Kurs</th><th>Kategorie>';
            for (var key in items) {
                output += '<tr><td>' + items[key].titel + '</td><td>' + items[key].datum + '</td><td>' + items[key].Kurs_idKurs + '</td><td>' + items[key].kategorie_idkategorie + '</td></tr>';   
            }
            output += '</table>';
            document.getElementById('aufgabenuebersicht').innerHTML = output;
            }
 
    }
    request.send();
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

//Aktuell gewähltes Datum im Header von Tagesansicht anzeigen
//Default ist das aktuelle Datum

var ansichtsdatum = new Date();

function Tagesdatum() {
    var year = ansichtsdatum.getFullYear();
    var day = ansichtsdatum.getDate();
    var month = new Array();
    month[0] = "Januar";
    month[1] = "Februar";
    month[2] = "März";
    month[3] = "April";
    month[4] = "Mai";
    month[5] = "Juni";
    month[6] = "Juli";
    month[7] = "August";
    month[8] = "September";
    month[9] = "Oktober";
    month[10] = "November";
    month[11] = "Dezember";
    var n = month[ansichtsdatum.getMonth()]; 
    document.getElementById("currentDate").innerHTML = day + ". " + n +" " + year;
};
window.onload=Tagesdatum;

 /* button  #next_day */
    $(document).on("click", "#next_day", function(evt)
    {
         ansichtsdatum = ansichtsdatum + 1;
        window.onload=Tagesdatum;
    });
