/* global $ */

$(document).ready(function () {
	$("#winscpButton").click(function() {
		var hostname = $("#hostname").val();
		var username = $("#username").val();
		var password = $("#password").val();
		
		window.location = "sftp://" + username + ":" + password + "@" + hostname;
	});
	
	$("#rdpButton").click(function() {
		var hostname = $("#hostname").val();
		var username = $("#username").val();
		var password = $("#password").val();

		window.location = "rdp://" + hostname + "/u=" + username + "&p=" + password + "&fit";
	});
});