
// FUNCION //
// FUNCIONES //


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


















/*
class planPrestamo{

    constructor( plan , monto , cuotas , total , mes){
        this.plan = plan;
        this.monto = monto;
        this.cuotas = cuotas;
        this.total = total;
        this.mes = mes;
    }

    get_datos(){
        console.log("Tipo de plan: ", this.plan);
        console.log("Monto pedido: ", this.monto)
        console.log("Cuotas: ", this.cuotas);
        console.log("Total a pagar: ", this.total);
        console.log("Cuota por mes: ",this.mes);
        console.log("");
    }
    get_interes(){
        this.monto = parseFloat(this.monto);
        this.cuotas = parseInt(this.cuotas)

        if( this.cuotas == 6 && this.monto > 0 ){
            this.total = this.monto + (this.monto * 0.50);
            return this.total
        }
        else if( this.cuotas == 12 && this.monto > 0 ){
            this.total = this.monto + (this.monto * 1);
            return this.total
        }
        else if( this.cuotas == 24 && this.monto > 0 ){
            this.total = this.monto + (this.monto * 2);
            return this.total
        }
        if( this.cuotas == 36 && this.monto > 0 ){
            this.total = this.monto + (this.monto * 3);
            return this.total
        }
    }  
    get_mes(){
        this.mes = this.total / this.cuotas;
    return this.mes 
    }
}

let montoEleguido = prompt("Ingrese el monto del prestamo que desee pedir");

//ARRAY DE LOS PLANES
let listaDePlanes = [];

listaDePlanes.push( new planPrestamo("PLAN 1" , montoEleguido , 6 ,  this.total , this.mes))
listaDePlanes.push( new planPrestamo("PLAN 2" , montoEleguido , 12 , this.total , this.mes));
listaDePlanes.push( new planPrestamo("PLAN 3" , montoEleguido , 24 , this.total , this.mes));
listaDePlanes.push( new planPrestamo("PLAN 4" , montoEleguido , 36 , this.total , this.mes));

//OPERACION PARA CALCULAR EL INTERES DEL PRESTAMO
for(let sumaInteres of listaDePlanes){

    sumaInteres.get_interes();
}

//OPERACION PARA SACAR LAS CUOTAS QUE SE DEVEN PAGAR POR MES
for(let porMes of listaDePlanes){

    porMes.get_mes();
}

//DATOS DE LOS PLANES
console.log("LISTA DE PLANES");

for(let planPrestamo of listaDePlanes){

    planPrestamo.get_datos();
}

// ELECCION DE PLAN //
function buscarPlan( planPrestamo ){

    return planPrestamo.plan == eleguiPlan

}

let eleguiPlan = "";

while( eleguiPlan != "FIN"){
    eleguiPlan = prompt("Ingrese el nombre del plan que desee eleguir o FIN");

    if( eleguiPlan != "FIN"){
        
        let resultado_find = listaDePlanes.find( buscarPlan );

        if(resultado_find != undefined ){

            console.log("Muchas gracias, usted eliguio:");
            resultado_find.get_datos();

        }
        else{
            console.log("No contamos con ese plan");
        }
    }  
}
*/