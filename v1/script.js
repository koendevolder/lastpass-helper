/* global $ */

$(document).ready(function () {
    urlCreate();
});

var hostname = "";
var username = "";
var password = "";


function urlCreate() {
 	$("#submitButton").click(function() {
		hostname = $("#hostname").val();
		username = $("#username").val();
		password = $("#password").val();
    
    	var strLinkW = "sftp://" + username + ":" + password + "@" + hostname;
    	var strLinkR = "rdp://" + hostname + "/u=" + username + "&p=" + password + "&fit";
		
		if (document.getElementById("linkW")) {
			document.getElementById("linkW").parentNode.removeChild(document.getElementById("linkW"));
		}

		var aW = document.createElement("a");
		aW.appendChild(document.createTextNode("Open WinSCP"));
		aW.setAttribute("id", "linkW");
		document.getElementById("divW").appendChild(aW);
		document.getElementById("linkW").setAttribute("href",strLinkW);

		if (document.getElementById("linkR")) {
			document.getElementById("linkR").parentNode.removeChild(document.getElementById("linkR"));
		}
		
		var aR = document.createElement("a");
		aR.appendChild(document.createTextNode("Open RDP"));
		aR.setAttribute("id", "linkR");
		document.getElementById("divR").appendChild(aR);
		document.getElementById("linkR").setAttribute("href",strLinkR);
	});
}