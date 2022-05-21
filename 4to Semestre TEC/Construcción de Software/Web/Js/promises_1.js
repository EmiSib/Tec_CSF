let done = true;

const isDone = new Promise((resolve, reject)=>
{

    if (done)
    {
        resolve("Trabajo hecho!")
    }

    else
    {
        reject("Trabajo no hecho!")
    }
})

const checkIfDone = () => {
    isDone.then(ok =>{

        console.log(ok)
    }).catch(err  =>{
        console.error(err)
    })

}

checkIfDone()