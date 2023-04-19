function suma()
{
    /*parseInt(); paresFloat();*/
    var numero1, numero2, result;
    numero1 = prompt("Escribe 1 numero", "");
    numero2 = prompt("Escribe otro numero", "");
    result =  parseInt (numero1)+parseInt (numero2);
    alert("La suma es "+result);
}

function resta()
{
    var numero1, numero2, result;
    numero1 = prompt("Escribe 1 numero", "");
    numero2 = prompt("Escribe otro numero", "");
    result =  parseInt (numero1)-parseInt (numero2);
    alert("La Resta es "+result);
}

function multi(){
    var numero1, numero2, result;
    numero1 = prompt("Escribe 1 numero", "");
    numero2 = prompt("Escribe otro numero", "");
    result =  parseInt (numero1)*parseInt (numero2);
    alert("La Multiplicacion es "+result);
}

function divi(){
    var numero1, numero2, result;
    numero1 = prompt("Escribe 1 numero", "");
    numero2 = prompt("Escribe otro numero", "");
    result =  parseInt (numero1)/parseInt (numero2);
    alert("La Division es "+result);
} 

function evalu(){
    var num;
    num = prompt("Escribe un numero", "");
    if (num < 0){
        alert("El número es neagtivo");
    }else{
        if(num > 1){
            alert("El número es positivo");
        }
    }

}