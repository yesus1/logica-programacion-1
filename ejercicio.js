let contador;

const NUMBER=[];

function getNumber() {

 for (contador=0 ;contador < 3; contador ++)  {
      NUMBER.push(prompt("ingresa un numero"));

    } 

    console.log(NUMBER);
}

function compareNumber(){

  if (NUMBER[0] ===NUMBER[1] && NUMBER[0]===NUMBER[2] && NUMBER[1]=== NUMBER[2] ) {
   Document.write(`sus numeros ${NUMBER} : son iguales`)

} else {
     document.write(`Orden asendente de us numeros ${(NUMBER.sort((a, b)=> a - b))}`);
     document.write(`Orden asendente de us numeros ${(NUMBER.sort((a, b)=> b - a))}`);
  }

}

getNumber();
compareNumber();
