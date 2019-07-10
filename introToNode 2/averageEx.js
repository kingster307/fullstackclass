function average(arr){
	var total=0;
	arr.forEach(function(num){
		total +=num;
	});
	var averagee = total/arr.length; 
	return Math.round(averagee);
}

var arr = [1,2,3,4];
console.log(average(arr));

