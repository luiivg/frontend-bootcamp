/*
*/
var balance = 1000; 

function imprimirBalance(balance){
	return balance;
}

function retirarDinero(dinero){
    //paso por referencia balance a auxBalance
	var auxBalance = JSON.parse(JSON.stringify(balance)); 
	if(dinero <= auxBalance){
		auxBalance = auxBalance - dinero;
		console.log("quedas con un saldo de : ", auxBalance)
	}
	else(dinero > auxBalance){
		console.log("los fondos son insuficientes")
	}
}
// variable global,
var balance2 = 0;
//transferir balance a otro balance
function transferir(balance,balance2){
//cargo lo que tengo en balance2 y le sumo el valor a transferir 
	balance2 = JSON.parse(JSON.stringify(balance2)) + balance
	console.log("El valor transferido es de " + balance);
}



function imprimirBalance2(balance2){
	var closure = function(x){
		return function(){
			console.log("El valor balance2 es de :" +balance2);
		}
	}
	setTimeout(closure, 2000);
   
}

//retirar de 100 en 100
function retirarTodoMiDinero(){
	

	if(balance > 0){
	    while(balance >= 0){
		balance -= 100;
	    }
	}else{
       console.log("Sin amor en el alma, Ni dinero en el bolsillo :( ")
	}	
}
//-----------------------------
var closure = function(x){
	return function(){
		console.log(x);
	}
}
for(var i = 0; i < 10; i++){
	setTimeout(closure(i),1000);
}
//----------------------
