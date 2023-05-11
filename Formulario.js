var total;
function califica()
    {var total=0;
    	for (var x=1;x<=4;x++)
    	{
        var res=0;
        var nom="r"+x;
        var resul=document.getElementsByName(nom);
        for(var i=0;i<resul.length;i++)
        {
            if(resul[i].checked==true)
                res=parseInt(resul[i].value);
        }
        total=total+res;
        document.getElementById("total").innerHTML="Puntos obtenidos: "+total+" Puntos";
        }
        if(total==20)
        	document.getElementById("comentario").innerHTML="Te la rifate Fernando!!!";
        else
        	if(total==15)
        	document.getElementById("comentario").innerHTML="Hechale ganas pa ta sencillo!!";
        else
        	if(total<=15)
        	document.getElementById("comentario").innerHTML="Ni como ayudarte mi brou";
    }
