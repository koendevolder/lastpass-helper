/* global $ */

$(document).ready(function () {
	$("#winscpButton").click(function() {
		var hostname = $("#hostname").val();
		var username = $("#username").val();
		var password = $("#password").val();
		
		window.location = "sftp://" + username + ":" + password + "@" + hostname;
	});
	
	$("#rdpFitButton").click(function() {
		var hostname = $("#hostname").val();
		var username = $("#username").val();
		var password = $("#password").val();

		window.location = "rdp://" + hostname + "/u=" + username + "&p=" + password + "&fit";
	});
	
	$("#rdpFullButton").click(function() {
		var hostname = $("#hostname").val();
		var username = $("#username").val();
		var password = $("#password").val();

		window.location = "rdp://" + hostname + "/u=" + username + "&p=" + password + "&f";
	});	
});