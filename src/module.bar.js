(function(){
	"use strict";

	var m = require("./module.foo");


	function bar (text){
		var data = text + " " + m.foo();
		return data;
	}

	module.exports.bar = bar;
})();