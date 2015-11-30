function myFunction(){
request.open('GET', "http://localhost/api/getAufgaben.php");
request.onreadystatechange = function() {
	if ((request.readyState === 4) && (request.status === 200)) {
		alert(request.responseText);
		var items = JSON.parse(request.responseText) ;
		alert(items.length);
		var output = '<ul>';
		for (var key in items) {
			output += '<li>' + items[key].titel + '</li>';   
}
output += '</ul>';
document.getElementById('table').innerHTML = output;
}
}
// request.onload = getAjaxResults;
request.send();
};
