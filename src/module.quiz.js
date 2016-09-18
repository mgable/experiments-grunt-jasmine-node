(function(){
	function quiz(objArray){
		var temp = {i:null, e:Number.MAX_VALUE};
		for (i = 0, limit = objArray.length; i < limit; i++){
			temp = (objArray[i].e < temp.e) ? objArray[i] : temp;
		}

		return (temp.i);
	}

	module.exports = quiz;
})();