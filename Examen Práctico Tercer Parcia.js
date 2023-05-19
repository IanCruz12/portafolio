function formulario(){
    var nom = document.getElementById("nom").value;
    var fech = document.getElementById("fec").value;

    var cum = new Date(fech);
    var mes = cum.getMonth() + 1;

    if(mes === 1){

        document.getElementById("imagen").style.display = "block";
        document.getElementById("mensaje").innerHTML = "Felicidades Obtuviste un 2*1";

    }else{
        
        document.getElementById("imagen").style.display = "none";
        document.getElementById("mensaje").innerHTML = "No obtuviste descuento, suerte para la próxima!"
    }
}