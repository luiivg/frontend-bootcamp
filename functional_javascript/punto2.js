function repeat(operation, num){
	return function operation(){
		return num;
	}
}
module.exports = repeat;
/* solucion oficial 

   function repeat(operation, num) {
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }
    
    module.exports = repeat


*/