let $ = require('jquery');
require('popper.js');
require('bootstrap');
require('skitter-slider');


$("body").addClass("thin");
// If user has Javascript disabled, the thick scrollbar is shown
$("body").mouseover(function () {
		$(this).removeClass("thin");
});
$("body").mouseout(function () {
		$(this).addClass("thin");
});
$("body").scroll(function () {
		$("body").addClass("thin");
});
