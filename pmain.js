nombre_invitado_array = [];
    
function submit()
{
    var ver_invitado_array = [];
    var nombre_invitado = document.getElementById("nombre_invitado").value;
    nombre_invitado_array.push(nombre_invitado);
    console.log(nombre_invitado_array);

    var longitud_nombre_invitado_array = nombre_invitado_array.length;
    console.log(longitud_nombre_invitado_array);

    for (var k = 0; k < longitud_nombre_invitado_array; k++) 
    {
        ver_invitado_array.push(" "+nombre_invitado_array[k]);
        console.log(ver_invitado_array);
    }
    document.getElementById("ver_nombre_con_comas").innerHTML = ver_invitado_array;
    document.getElementById("nombre_invitado").value="";
}

function showNames(){
    var remover_comas = nombre_invitado_array.join("\n");
    console.log(remover_comas);
    document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas;
    document.getElementById("botón_ordenar").style.display = "inline-block";
}

function sorting()
{
    nombre_invitado_array.sort();
    console.log(nombre_invitado_array);

    var ver_invitado_array_ordenar = [];

    var longitud_nombre_invitado_array = nombre_invitado_array.length;
    console.log(longitud_nombre_invitado_array);

    for (var k = 0; k < longitud_nombre_invitado_array; k++) 
    {
        ver_invitado_array_ordenar.push("<h4>NOMBRE - " + nombre_invitado_array[k] + "</h4>");
        console.log(ver_invitado_array_ordenar);
    }

    var remover_comas = ver_invitado_array_ordenar.join(" ");
    console.log(remover_comas);
    document.getElementById("ver_nombre_ordenado").innerHTML = remover_comas;
}

function search(){
    var busqueda=document.getElementById("nombreBusqueda").value;
    var f=0;
    for(var j=0;j<nombre_invitado_array.length;j++){
        if(busqueda==nombre_invitado_array[j]){
            
        }
        
    }
}