// El objetivo de este ejercicio es poder encontrar el segundo numero mayor de el array que tenemos.


var numbers = [8, 4, 6, 10, 9, 11];

var first = numbers[0];

var second = 0;

function secondLargestNumber (numbers) {

/*Cuando creamos el ciclo for, en los parametros creamos una variable donde le decimos que la variable "i" sera igual a 0, mientras que "i" sea menor a la longitud de el array 
"numbers" (para determinar esta longitud utilizamos el metodo ".length" despues de declarar el arreglo que queremos recorrer), entonces "i" se debera incrementar en 1 unidad cada que recorra 
la funcion */    

     for (var i = 0; i < numbers.length; i++) {

        if (numbers[i] > first) {
            
            second = first;
            first = numbers[i];

        }
        else if (numbers[i] > second && numbers[i] < first) {
            
            second = numbers[i];
        }

    }

    return second;
         
}

document.write(secondLargestNumber(numbers));


