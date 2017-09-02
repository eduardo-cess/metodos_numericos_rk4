var h = 0.1;
var x = [0, 0.1, 0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
var y = [-1];
var precisaoNumerica = 5; //numero de casas decimais depois da virgula

function Y(yi, k1, k2, k3, k4){
	result = yi+(h/6)*(k1 + 2*k2 + 2*k3 + k4);
	return result;
}
function yLinha(x, y){
	YLinha = Math.pow(Math.E, x)*(Math.pow(x, 2))+y;
	return YLinha;
}

function k1(xi, yi){
	return yLinha(xi, yi);
}

function k2(xi, yi){
	xi = xi+(h/2);
	yi = yi+(h/2) * k1(xi, yi);

	return yLinha(xi, yi);
}

function k3(xi, yi){
	xi = xi+(h/2);
	yi = yi+(h/2)*k2(xi, yi);

	return yLinha(xi, yi);
}

function k4(xi, yi){
	xi = xi + h;
	yi = yi + h*k3(xi, yi)

	return yLinha(xi, yi);
}

for(let i in x){
	console.log("iteração "+i);
	var K1 = k1(x[i], y[i]);
	console.log("k1: "+K1);
	var K2 = k2(x[i], y[i]);
	console.log("k2: "+K2);
	var K3 = k3(x[i], y[i]);
	console.log("k3: "+K3);
	var K4 = k4(x[i], y[i]);
	console.log("k4: "+K4);

	y.push(Y(y[i], K1, K2, K3, K4));
	var j = parseInt(i)+1;
	console.log("y"+j+" = "+y[j]);
}







