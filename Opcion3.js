
let total=0;
let cantToner=0;
let cantCabezal=0;
let cantTinta=0;
let bool=true;

while(bool===true){
    let operacion=+prompt("Elije una operacion 1.Ingrese cantidad de productos, 2.Informe final,  3. Salir");
    if(operacion===1){
        let cantidad=+prompt("Ingrese la cantidad de productos")
        let prod=+prompt("Ingrese el numero de producto, 1.Toner, 2. Cabezal, 3. Tinta");

        switch(prod){
            case 1:
                cantToner=cantToner+cantidad;
                break;
            case 2:
                cantCabezal=cantCabezal+cantidad;
                break;
            case 3:
                cantTinta=cantTinta+cantidad;
                break
        }
        

    }if(operacion===2){

        console.log(`La cantidad de Toner es: ${cantToner}`);
        console.log(`La cantidad de Cabezal es: ${cantCabezal}`);
        console.log(`La cantidad de Tinta es: ${cantTinta}`);

    }if(operacion===3){
        bool=false;
        alert("Acabas de salir del sistema");
    }    
}

