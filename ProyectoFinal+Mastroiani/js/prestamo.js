
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


    let tablaPrestamo = document.getElementById("tbodyPres");


    for(let datos of listaDatos){

        let filaPres = document.createElement("tr");
        filaPres.innerHTML =`<td><p>${datos.monto}</p></td>
                    <td><p>${datos.cuotas}</p></td>
                    <td><p>${resultadoPorMes }</p></td>
                    <td><p>${resultadoPrestamo }</p></td>`

    tablaPrestamo.append(filaPres)

    }
    

}

//BORRAR LOS DATOS DEL LOCALSTORAGE
function borrardatos(){

    localStorage.clear("listaDatos");
}


//FUNCION PARA CALCULAR EL INTERES DEL PRESTAMO//
function calcular(){

JSON.parse(localStorage.getItem("listaDatos"));
let monto = document.getElementById("montoPrestamo").value;
let cuotas = document.getElementById("cuotasPrestamo").value;

monto = parseFloat(monto);
cuotas = parseInt(cuotas);



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
Swal.fire({
    title:"ERROR",
    text:"LAS CUOTAS PERMITIDAS SON DE (3 , 6 ,12 ,24) BORRE LOS DATOS ANTERIORES Y VUELVA A INTRODUCIRLOS",
    icon:"error",
})

}

//FUNCION PARA SACAR LAS CUOTAS QUE SE DEVEN PAGAR POR MES//
function calPorMes(){

JSON.parse(localStorage.getItem("listaDatos"));
let monto = document.getElementById("montoPrestamo").value;
let cuotas = document.getElementById("cuotasPrestamo").value;

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

    Swal.fire({
        title:"ERROR",
        text:"SE INGRESO INCORECTAMENTE EL MONTO O LAS CUOTAS, BORRE LOS DATOS ANTERIORES Y VUELVA A INTRODUCIRLOS",
        icon:"error",
    })

}

//API

function mostrarDatosApi( posicion ){
    
    let tablaClima = document.getElementById("tbodyApi");
    let filaClima = document.createElement("tr");
    let key = "9c6c4d7f7406696b66b3eb3d35033b60";
    let lat = posicion.coords.latitude;
    let lon = posicion.coords.longitude;; 


    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=es`)
    .then( response => response.json() )
    .then( data =>{ console.log(data);
                        filaClima.innerHTML =`<td><p>${data.main.temp}</p></td>
                                            <td><p>${data.main.humidity}</p></td>
                                            <td><p>${data.weather[0].description }</p></td>
                                            <td><p>${data.name}</p></td>`

        tablaClima.append(filaClima)
    } )

}

navigator.geolocation.getCurrentPosition(mostrarDatosApi );    
