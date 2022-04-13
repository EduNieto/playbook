// Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0) 
//se envian los argumentos de acumulador acc y element y de suman en el return
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)

/*
La función reductora recibe cuatro argumentos:
- Acumulador (acc)
- Valor Actual (cur)
- Índice Actual (idx)
- Array (src)
El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.
*/