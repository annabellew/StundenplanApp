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
     $(document).on("click", "#startseite_tag", function(evt)
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
    
        /* button  #Woche_neue-aufgaben */
    $(document).on("click", "#Woche_neue-aufgaben", function(evt)
    {
         /*global activate_page */
         activate_page("#Aufgabe_erstellen"); 
    });
    
        /* button  #zurueck */
    $(document).on("click", "#zurueck", function(evt)
    {
         /*global activate_page */
         activate_page("#Startseite"); 
    });
    
        /* button  #einstellungen */
    $(document).on("click", "#einstellungen", function(evt)
    {
         /*global activate_page */
         activate_page("#Einstellungen"); 
    });
    
        /* button  #monat */
    $(document).on("click", "#monat", function(evt)
    {
         /*global activate_page */
         activate_page("#Monatsansicht"); 
    });
    
        /* button  #Aufgaben_neueAufgaben */
    $(document).on("click", "#Aufgaben_neueAufgaben", function(evt)
    {
         /*global activate_page */
         activate_page("#Aufgabe_erstellen"); 
    });
    
        /* button  #wochenansicht_zurueck */
    $(document).on("click", "#wochenansicht_zurueck", function(evt)
    {
         /*global activate_page */
         activate_page("#Startseite"); 
    });
    
        /* button  #wochenansicht_einstellungen */
    $(document).on("click", "#wochenansicht_einstellungen", function(evt)
    {
         /*global activate_page */
         activate_page("#Einstellungen"); 
    });
    
        /* button  #wochenansicht_neueAufgabe */
    $(document).on("click", "#wochenansicht_neueAufgabe", function(evt)
    {
         /*global activate_page */
         activate_page("#Aufgabe_erstellen"); 
    });
    
        /* button  #monatsansicht_neueAufgabe */
    $(document).on("click", "#monatsansicht_neueAufgabe", function(evt)
    {
         /*global activate_page */
         activate_page("#Aufgabe_erstellen"); 
    });
    
        /* button  #monatsansicht_woche */
    $(document).on("click", "#monatsansicht_woche", function(evt)
    {
         /*global activate_page */
         activate_page("#Wochenansicht"); 
    });
    
        /* button  #monatsansicht_tag */
    $(document).on("click", "#monatsansicht_tag", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  #monatsansicht_einstellungen */
    $(document).on("click", "#monatsansicht_einstellungen", function(evt)
    {
         /*global activate_page */
         activate_page("#Einstellungen"); 
    });
    
        /* button  #monatsansicht_zurueck */
    $(document).on("click", "#monatsansicht_zurueck", function(evt)
    {
         /*global activate_page */
         activate_page("#Startseite"); 
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
    var currentDate = day + ". " + n +" " + year;
    return currentDate;
    //return day + ". " + n +" " + year;
    //document.getElementById("currentDay").innerHTML = day + ". " + n +" " + year;
}
function Tagesdatum_msql (ansichtsdatum){
    var currentDate_msql="";
    var month=ansichtsdatum.getMonth();
    month++;
    month=month.toString();
    
    if (1<(month.length)){
         var currentDate_msql=currentDate_msql+ansichtsdatum.getFullYear()+"-"+month+"-";
    }
    else {
    month="0"+month;    
    var currentDate_msql=currentDate_msql+ansichtsdatum.getFullYear()+"-"+month+"-";
    }
    
    var Tag=ansichtsdatum.getDate().toString();
    
    if (1<(Tag.length)){
         var currentDate_msql=currentDate_msql+ansichtsdatum.getDate();
    }
    else {
    Tag="0"+Tag;
    var currentDate_msql=currentDate_msql+Tag;
    }
    
    return currentDate_msql;
}

//window.onload=Tagesdatum;
window.onload = function () {
    document.getElementById("currentDay").innerHTML = Tagesdatum();
}

 /* button  #tag_danach */
   $(document).on("click", "#tag_danach", function(evt)
		{
            ansichtsdatum = ansichtsdatum.setDate(ansichtsdatum.getDate() + 1);
            ansichtsdatum = new Date(ansichtsdatum);
            document.getElementById("currentDay").innerHTML = Tagesdatum();
       
            alert(Tagesdatum_msql(ansichtsdatum));
       
            //hole Aufgaben für diesen Tag
            var request=new XMLHttpRequest();
            request.open('GET', "http://localhost/api/getAufgabeTag.php?ansichtsdatum="+Tagesdatum_msql(ansichtsdatum));
            request.onreadystatechange = function() {
            if ((request.readyState === 4) && (request.status === 200)) {
                alert(request.responseText);
                var items = JSON.parse(request.responseText) ;
                alert(items.length);
                var output = '<table border="1"><tr><th>Aufgabe</th><th>Datum</th><th>Kurs</th><th>Kategorie</th>';
                for (var key in items) {
                    output += '<tr><td>' + items[key].titel + '</td><td>' + items[key].datum + '</td><td>' + items[key].Kurs_idKurs + '</td><td>' + items[key].kategorie_idkategorie + '</td></tr>';   
                }
            output += '</table>';
            document.getElementById('mainpage_aufgaben').innerHTML = output;
            }
 
            }
        request.send();
       
		});

/* button  #tag_davor */
    $(document).on("click", "#tag_davor", function(evt)
    {
            ansichtsdatum = ansichtsdatum.setDate(ansichtsdatum.getDate() - 1);
            ansichtsdatum = new Date(ansichtsdatum);
            document.getElementById("currentDay").innerHTML = Tagesdatum();
    });

//Aufgaben auf #Aufgaben anzeigen
function aufgabenLaden(){
     var request=new XMLHttpRequest();
        request.open('GET', "http://localhost/api/getAufgaben.php");
        request.onreadystatechange = function() {
        if ((request.readyState === 4) && (request.status === 200)) {
            //alert(request.responseText);
            var items = JSON.parse(request.responseText) ;
            //alert(items.length);
            var output = '<table border="1"><tr><th>Aufgabe</th><th>Datum</th><th>Kurs</th><th>Kategorie>';
            for (var key in items) {
                output += '<tr><td>' + items[key].titel + '</td><td>' + items[key].datum + '</td><td>' + items[key].Kurs_idKurs + '</td><td>' + items[key].kategorie_idkategorie + '</td></tr>';   
            }
            output += '</table>';
            document.getElementById('Aufgaben_aufgaben').innerHTML = output;
            }
 
    }
    request.send();
}

//Kategorien in Auswahlmenü annzeigen
function kategorienLaden(){
     var request=new XMLHttpRequest();
        request.open('GET', "http://localhost/api/getKategorien.php");
        request.onreadystatechange = function() {
        if ((request.readyState === 4) && (request.status === 200)) {
            //alert(request.responseText);
            var items = JSON.parse(request.responseText) ;
            //alert(items.length);
            var output = "";
            for (var key in items) {
                output += '<option value='+ items[key].idkategorie + '>' + items[key].kategorieName + '</option>';   
            }
    
            document.getElementById('AufgabeErstellen_kategorie').innerHTML = output;
            }
 
    }
    request.send();
}

function BenutzerkurseLaden(){
     var request=new XMLHttpRequest();
        request.open('GET', "http://localhost/api/getBenutzerkurse.php");
        request.onreadystatechange = function() {
        if ((request.readyState === 4) && (request.status === 200)) {
            alert(request.responseText);
            var items = JSON.parse(request.responseText) ;
            alert(items.length);
            var output = "";
            for (var key in items) {
                output += '<option value='+ items[key].idkategorie + '>' + items[key].kategorieName + '</option>';   
            }
    
            document.getElementById('AufgabeErstellen_kurs').innerHTML = output;
            }
 
    }
    request.send();
}
