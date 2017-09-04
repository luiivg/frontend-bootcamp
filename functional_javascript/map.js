function doubleAll(numbers){
 	
 	return numbers.map(function(x){
 		return x * 2;
 	})
}
module.exports = doubleAll;
//solucion oficial 
/*
    module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }


*/