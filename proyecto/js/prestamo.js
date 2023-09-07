
// FUNCION //
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