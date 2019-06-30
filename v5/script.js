/* global $ */

document.write('<body>LastPass: <input type="text" id="name"/><br><br>' +
'Hostname: <input type="text" id="hostname"/><br><br>' +
'Username: <input type="text" id="username"/><br><br>' +
'Password: <input type="password" id="password"/><br><br>' +
'<input type="submit" value="Ignore this button" id="ignoreButton">' +
'<input type="submit" value="Open RDP (Fit screen)" id="rdpFitButton">' +
'<input type="submit" value="Open RDP (Full screen)" id="rdpFullButton">' +
'<input type="submit" value="Open WinSCP" id="winscpButton"></body>');
	
const inputPasswordElements = document.querySelectorAll('input[type=password]');
const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'type') {
            mutation.target.value = '';
        }
    });
});
Array.from(inputPasswordElements).forEach(function (input) {
    observer.observe(input, {attributes: true});
});

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