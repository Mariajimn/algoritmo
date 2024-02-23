function saludo(){
    alert("Hello World")


 }


function suma () {


    alert("Algoritmo que realiza una suma entre 2 valores ingresados por el usuario")
    
    //explicacion de algoritmo al usuario 



    let a = 0;
    let b = 0;
    let s = 0;

    //declaracion de variables necesarias 

    a= parseInt(prompt("INGRESE EL PRIMER VALOR"));
    b= parseInt(prompt("INGRESE EL SEGUNDO VALOR"));

    //captura de datos 

    s= a+b ;

    //operacion de los datos

        alert ("El resultado de la operacion es : " + s )

    //capturamos el resultado o respuesta de la operacion
}

function operaciones_basicas(){

    alert ("El algoritmo realiza operaciones basicas  ( + , - , * , / ) con los dos numeros ingresados por el usuario" )

     //explicacion de algoritmo al usuario 

    let a = 0;
    let b = 0;
    let s = 0;
    let r = 0;
    let d = 0;
    let m = 0;
    //declaracion de variables necesarias 

    a= parseInt(prompt("INGRESE EL PRIMER VALOR"));
    b= parseInt(prompt("INGRESE EL SEGUNDO VALOR"));

     //captura de datos 


    s=a+b ;

    r=a-b ;

    m=a*b ;

    d=a/b ;

    //operacion de los datos

    alert ( "El resultado de la suma de los dos digitos es : " + s )
    alert ( "El resultado de la resta de los dos digitos es : " + r )
    alert ( "El resultado de la multiplicacion de los dos digitos es : " + m )
    alert ( "El resultado de la division de los dos digitos es : " + d )


    //capturamos el resultado o respuesta de la operacion


}

function nCuadrado(){
    //Explicación del algoritmo 
    alert ("Algoritmo que calcula el cuadrado de un numero ingresado")
    //Declaración de variable
    let  N,C = 0;
    //Capturanos los datos 
    N=parseInt(prompt("INGRESE EL PRIMER VALOR"));
    
    
    //Realizamos operación 
    C=N*N;
    //Mostramos el resultado
    alert ( "El resultado de: " + N + " es "  +C);
}

function aTriangulo(){
    alert ("El algorito que calcula el area del triagulo ingresando la base y la altura:")

    let b = 0;
    let a = 0;
    let r = 0; 

    b= parseInt(prompt("Ingrese la base"));
    a= parseInt(prompt("Ingrese la altura"));

    r=(b*a/2) ;

    alert ("El area del tringulo es: " + r)


}

function conversion(){
    //explicacion 
    alert ("algoritmo para covertir medidas dadas en metros");
    //declaracion de variables 
    let m,pg,k,ml=0;
    //captamos datos 

    m=parseInt(prompt("Ingrese el valor en Metros"));
    //Realizamos operacion
    pg=39.3*m;
    k=m/1000;
    ml=1000*m;
     //Mostramos resultados
    alert ("La conversion de " + m + " metros a kilometros es: " + k + ", a pulgadas es: " + pg + " y a milimetros es: " + ml); 

}

function numeroMayor(){
    //Explicación del algoritmo 
    alert ("Algoritmo que determina el mayor de dos numeros ingresados")
    //Declaración de variable
    let  N1,N2 = 0;
    //Capturanos los datos 
    N1=parseInt(prompt("INGRESE EL PRIMER NUMERO"));
    N2=parseInt(prompt("INGRESE EL SEGUNDO NUMERO"));
    //REALIZAMOS LA OPERACIÓN
    if(N1==N2){
        alert ("Los valores ingresados con iguales, no sea pato");

    }else if (N1>N2) { 
        alert (N1 + " Es mayor que " + N2);
    }else {
        alert(N2 + " Es mayor que " + N1);
    }
    
}

function numeroMenorTres(){
    //Explicación del algoritmo 
    alert ("Algoritmo que determina el mayor de dos numeros ingresados")
    //Declaración de variable
    let  N1,N2,N3 = 0;
    //Capturanos los datos 
    N1=parseInt(prompt("INGRESE EL PRIMER NUMERO"));
    N2=parseInt(prompt("INGRESE EL SEGUNDO NUMERO"));
    N3=parseInt(prompt("INGRESE EL TERCER NUMERO"));
    //REALIZAMOS LA OPERACIÓN
    if((N1==N2) && (N1==N3)){
        alert ("Los valores ingresados con iguales, no sea pato");

    }else if ((N1<N2) && (N1<N3)) { 
        alert (N1 + " Es menor que " + N2 + " "  + N3 );
    }else if ((N2<N1) && (N2<N3)){
        alert(N2 + " Es menor que " + N1 + N3);
    }else if ((N3<N1) && (N3<N2)){
        alert(N3 + " Es menor que " + N1 + N2);
}
}

function Notas(){
    
    alert("Algoritmo que calcula el promedio de notas:");

    
    let N1, N2, N3, N4, N5, N6, N7 = 0;
    let promedio = 0;

    // Captura de datos
    N1 = parseInt(prompt("INGRESE LA PRIMERA NOTA"));
    N2 = parseInt(prompt("INGRESE LA SEGUNDA NOTA"));
    N3 = parseInt(prompt("INGRESE LA TERCERA NOTA"));
    N4 = parseInt(prompt("INGRESE LA CUARTA NOTA"));
    N5 = parseInt(prompt("INGRESE LA QUINTA NOTA"));
    N6 = parseInt(prompt("INGRESE LA SEXTA NOTA"));
    N7 = parseInt(prompt("INGRESE LA SEPTIMA NOTA"));

    // Realización de la operación
    promedio = (N1 + N2 + N3 + N4 + N5 + N6 + N7) / 7;

    // Mostramos el resultado
    alert("El promedio de las notas ingresadas es: " + promedio);
}


function Dcompras(){
    //explicacion
    alert ("Algoritmo para saber el descuento de compras");
    alert ("el precio por kilo es de 5000");
    // declaracion de variables
    let Ck;
    // capturamos datos
    Ck=parseInt(prompt("ingrese la cantidad de kilos"));

    // realizamos operacion
    p=Ck*5000;
    descuento0=(P);
    descuento1=(10/100)*p;
    descuento2=(15/100)*p;
    descuento3=(20/100)*p;

    // mostramos resultados
    if (Ck<=2){
        alert ("Lo siento, no tienes descuento. Debes pagar:" + descuento0);
    }else if(Ck>=3 <6){
        alert("tienes un 10% de descuento, debes pagar:" + descuento1);
    }else if(Ck>=6 <=10){
        alert("tienes un 15% de descuento, debes pagar:" + descuento2);
    }else {
        alert("Tienes un 20% de descuento, debes pagar" + descuento3);
    }
    }

    //


    function Dcompras(){
        //explicacion
        alert ("Algoritmo para saber el descuento de compras");
        alert ("el precio por kilo es de 5000");
        // declaracion de variables
        let Ck;
        // capturamos datos
        Ck=parseInt(prompt("ingrese la cantidad de kilos"));
    
        // realizamos operacion
        p=Ck*5000;
        descuento0=(P);
        descuento1=(10/100)*p;
        descuento2=(15/100)*p;
        descuento3=(20/100)*p;
    
        // mostramos resultados
        if (Ck<=2){
            alert ("Lo siento, no tienes descuento. Debes pagar:" + descuento0);
        }else if(Ck>=3 <6){
            alert("tienes un 10% de descuento, debes pagar:" + descuento1);
        }else if(Ck>=6 <=10){
            alert("tienes un 15% de descuento, debes pagar:" + descuento2);
        }else {
            alert("Tienes un 20% de descuento, debes pagar" + descuento3);
        }
        }
    
        //

    function calcularSalario(semanaTrabajada) {
        const salarioPorHoraNormal = 12500;
        const salarioPorHoraExtra = 18000;
        const horasNormales = 40;
    
        let horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas trabajadas en la semana:"));
    
        let salarioSemana = 0;
    
        if (horasTrabajadas <= horasNormales) {
            salarioSemana = horasTrabajadas * salarioPorHoraNormal;
        } else {
            let horasExtra = horasTrabajadas - horasNormales;
            salarioSemana = (horasNormales * salarioPorHoraNormal) + (horasExtra * salarioPorHoraExtra);
        }
    
        alert("El salario semanal del obrero es: $" + salarioSemana);
    }
  


    