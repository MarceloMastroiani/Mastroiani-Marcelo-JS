
// SIMULADOR //

let listaDatos = [];
let resultadoPrestamo = 0;
let resultadoPorMes = 0;

function guardarDatos(){

let monto = document.getElementById("montoPrestamo");
let cuotas = document.getElementById("cuotasPrestamo");

let datos = {
    monto:monto.value ,
    cuotas:cuotas.value
};
listaDatos.push(datos);


//JSON
let listaJson = JSON.stringify(listaDatos);
localStorage.setItem("listaDatos" , listaJson);

calcular()
}

//MOSTRAR LOS DATOS DEL PRESTAMO PARA VISUALIZAR EL RESULTADO 
function mostrarDatos(){


    let table = document.getElementById("tbody");


    for(let datos of listaDatos){

        let fila = document.createElement("tr");
        fila.innerHTML =`<td><p>${datos.monto}</p></td>
                    <td><p>${datos.cuotas}</p></td>
                    <td><p>${resultadoPorMes }</p></td>
                    <td><p>${resultadoPrestamo }</p></td>`

    table.append(fila)

    }
    

}


//FUNCION PARA CALCULAR EL INTERES DEL PRESTAMO//
function calcular(){

let lista = localStorage.getItem("listaDatos");
let monto = document.getElementById("montoPrestamo").value;
let cuotas = document.getElementById("cuotasPrestamo").value;

lista = JSON.parse(lista);

monto = parseFloat(monto);
cuotas = parseInt(cuotas);

//let prestamoFinal = 0 

if(monto > 0 && cuotas == 3){
    resultadoPrestamo = monto + (monto * 0.25);
    return resultadoPrestamo
}
else if(monto > 0 && cuotas == 6){
    resultadoPrestamo = monto + (monto * 0.60);
    return resultadoPrestamo
}
else if(monto > 0 && cuotas == 12){
    resultadoPrestamo = monto + (monto * 1);
    return resultadoPrestamo
}
else if(monto > 0 && cuotas == 24){
    resultadoPrestamo = monto + (monto * 1.80);
    return resultadoPrestamo
}

alert("las cuotas permitidas son de 3 , 6 ,12 ,24 ");
}

//FUNCION PARA SACAR LAS CUOTAS QUE SE DEVEN PAGAR POR MES//
function calPorMes(){

let lista = localStorage.getItem("listaDatos");
let monto = document.getElementById("montoPrestamo").value;
let cuotas = document.getElementById("cuotasPrestamo").value;

lista = JSON.parse(lista);

monto = parseFloat(monto);
cuotas = parseInt(cuotas);

    if(monto > 0 && cuotas == 3){
        resultadoPorMes = (monto + (monto * 0.25)) / cuotas;
        return  resultadoPorMes
    }
    else if(monto > 0 && cuotas == 6){
        resultadoPorMes = (monto + (monto * 0.60)) / cuotas;
        return  resultadoPorMes
    }
    else if(monto > 0 && cuotas == 12){
        resultadoPorMes = (monto + (monto * 1)) / cuotas;
        return  resultadoPorMes
    }
    else if(monto > 0 && cuotas == 24){
        resultadoPorMes = (monto + (monto * 1.80)) / cuotas;
        return  resultadoPorMes
    }
    alert("se ingreso incorectamente el monto o las cuotas")

}
