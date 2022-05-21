

function main() {


    //Ejercicio 1
    // Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite


    function NoRep() {

        console.log("Ejercicio 1 <br>")
        let palabra = "abacddbec"
        let contador = 0

        for (let i = 0; i < palabra.length; i++) {

            for (let j = 0; j < palabra.length; j++) {

                if (palabra.charAt(i) == palabra.charAt(j)) {
                    contador++
                }
            }

            if (contador == 1) {
                console.log("La letra que no se repite es: " + palabra.charAt(i))

            }

            else {
                contador = 0

            }


        }


    }


    //Ejercicio 2
    // Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.

    function BubbleSort() {
        console.log("<br>")
        console.log("<br> Ejercicio 2 <br>")

        let numeros = [5, 1, 4, 2, 8]
        let temp = []
        console.log("Lista desordenada: " + numeros)

        for (let i = 0; i < numeros.length; i++) {
            for (let j = 0; j < numeros.length; j++) {
                if (numeros[j] > numeros[j + 1]) {
                    temp = numeros[j];
                    numeros[j] = numeros[j + 1];
                    numeros[j + 1] = temp;
                }
            }


        }


        console.log("<br>")
        console.log("Lista ordenada: " + numeros)




    }

    //Ejercicio 3
    // Escribe una función que implemente el algoritmo 'merge-sort' para ordenar una lista de números.

    function MergeSort() {
        console.log("<br>")
        console.log("<br> Ejercicio 3 <br>")

        // let numeros = [5, 1, 4, 2, 8]
        // let left_lis = []
        // let right_lis = []

        // let len = numeros.length

        // let left = left_lis / 2
        // let right = right_lis - left
        // let merge = left + (right - 1) / 2


        // for (let i = 0; i < numeros.length; i++) {

        //     for (let j = 0; j < numeros.length; j++) {



        //     }


        // }





    }

    //Ejercicio 4
    // Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.

    function Reverse(list) {
        console.log("<br>")
        console.log("<br> Ejercicio 4 <br>")

        let rev = []

        for (let i = 0; i < list.length; i++) {

        }


    }

    function Reverse2(newlist) {
        let temp = 0
        let tam = newlist.length

        for (let i = 0; i < tam; i++) {
            temp = newlist[i]
            newlist.splice(i, 1)
            newlist.unshift(temp)
            temp = 0
        }

        document.write(newlist)

    }



    //Ejercicio 5
    // Usando la definición de clase de Javascript ES6, crea una clase que se llame 'Vector' que represente un vector de 3 dimensiones. La clase debe de poder sumar y restar vectores, obtener su magnitud, obtener el vector unitario, y multiplicar por un escalar.

    //Ejercicio 6
    // Escribe una función que calcule el máximo común divisor de dos números.

    function MCD() {
        console.log("<br>")
        console.log("<br> Ejercicio 6 <br>")

    }

    //Ejercicio 7
    // Usando ojetos de tu clase 'Vector', crea una función que reciba dos vectores, y que indique si esos vectores son ortogonales o no.

    //Ejercicio 8
    // Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

    function HackerSpeak() {

        console.log("<br>")
        console.log("<br> Ejercicio 8 <br>")
        let pal = "Javascript es divertido"
        let hack = ""

        console.log("Palabra normal: ")
        console.log(pal)
        console.log("<br>Palabra cambiada: ")


        hack = pal.replaceAll("a", "4").replaceAll("s", "5").replaceAll("i", "1").replaceAll("e", "3").replaceAll("o", "0")

        console.log(hack)


    }

    //Ejercicio 9
    // Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].

    function factoriza(num) {
        console.log("<br>")
        console.log("<br> Ejercicio 9 <br>")

        let factor = []
        let cont = 1

        while (cont < num) {

            factor.push(num / (1 + cont))
            cont++
        }

    }

    //Ejercicio 10
    // Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]

    function quitaDuplicados() {
        console.log("<br>")
        console.log("<br> Ejercicio 10 <br>")

        let numeros = [1, 0, 1, 1, 0, 0]
        let cont = 0
        let sinDup = []

        numeros.forEach((item) => {

            if (!sinDup.includes(item)) {
                sinDup.push(item);
            }
        })

        console.log("Lista con Duplicados: " + numeros)
        console.log("<br>Lista sin Duplicados: " + sinDup)

    }



    NoRep()

    BubbleSort()

    MergeSort()


    Reverse([1, 4, 2, 5, 7])

    Reverse2([1, 4, 2, 5, 7])

    HackerSpeak()

    factoriza()

    quitaDuplicados()

}

main()