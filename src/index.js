
exports.min = function min (array) {
  if(typeof array != "undefined" && array.length != 0)  {
    let x = array[0];
	  for(y = 0; y < array.length; y++) {
		  if(x > array[y])
			  x = array[y];
	  }
	  return x;
  }
	return 0;
}

exports.max = function max (array) {
  if(typeof array != "undefined" && array.length != 0)  {
    let x = array[0];
	  for(y = 0; y < array.length; y++) {
		  if(x < array[y])
			  x = array[y];
	  }
	  return x;
  }
	return 0;
}

exports.avg = function avg (array) {
  if(typeof array != "undefined" && array.length != 0)  {
    let x = 0;
	  for(y = 0; y < array.length; y++) {
	     x += array[y];
	  }
	  return x / array.length;
  }
	return 0;
}
