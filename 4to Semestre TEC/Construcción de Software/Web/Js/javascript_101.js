let palabra = "abacddbec"

function NoRep() {

    for (let i = 0; i < palabra.length; i++) {

        for (let j = 0; j < palabra.length; j++) {


            console.log(palabra.charAt(i))


        }
    }
}

NoRep()