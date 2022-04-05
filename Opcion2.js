/*
Hamburguesas:
-Sencillas --->$20
-doble --->$25
-Triples --->$28

Tarjeta de crédito --->+ 5% sobre la compra
*/

let n=+prompt("Cuantas hamburguesas desea?");//numero de haburguesas
let ti=prompt("Digite correctamente el tipo de hamburguesa: sencilla, doble, triple ");
let tp=prompt("Digite el tipo de pago: efectivo o tarjeta"); //tipo de pago
let pa=0;  //precio de la hamburguesa
const ca=0.05; //cargo
let to=0; //total sin cargo
let tot=0; //total con cargo


switch(ti){
    case 'sencilla':
        pa=20;
        total=n*pa;
        if(tp==="tarjeta"){                    
            tot=(total*ca)+total;                
            console.log(`Precio de hamburguesa: ${pa}, total con cargo ${tot}`);
        }else if(tp==="efectivo"){            
            to=total;           
            console.log(`Precio de hamburguesa: ${pa}, total sin cargo ${to}`);
        }else{
            alert("no eligió una opcion de pago");
        }        
        break;
    
    case 'doble':
        pa=25;
        total=n*pa;
        if(tp==="tarjeta"){                    
            tot=(total*ca)+total;                
            console.log(`Precio de hamburguesa: ${pa}, total con cargo ${tot}`);
        }else if(tp==="efectivo"){            
            to=total;           
            console.log(`Precio de hamburguesa: ${pa}, total sin cargo ${to}`);
        }else{
            alert("no eligió una opcion de pago");
        }        
        break;

     case 'triple':
        pa=28;
        total=n*pa;
        if(tp==="tarjeta"){                    
            tot=(total*ca)+total;                
            console.log(`Precio de hamburguesa: ${pa}, total con cargo ${tot}`);
        }else if(tp==="efectivo"){            
            to=total;           
            console.log(`Precio de hamburguesa: ${pa}, total sin cargo ${to}`);
        }else{
            alert("no eligió una opcion de pago");
        }        
        break;          

        default:
            console.log("No se realizó ninguna compra")
}









