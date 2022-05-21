function main() {


    Coor()
    getFormvalue()
    newKitten()


}

function Coor() {
    window.addEventListener("mousemove", event => {

        let x = event.clientX
        let y = event.clientY
        let coor = "X: " + x + ", Y: " + y
        document.getElementById('mousePosition').innerHTML = coor
    })

}

function getFormvalue() {

    let txtName = document.getElementById("fname");
    let txtName2 = document.getElementById("lname");

    let label1 = document.getElementById("Name");
    let label2 = document.getElementById("Last");


    label1.innerHTML = txtName.value;
    label2.innerHTML = txtName2.value;

}

function insertRow() {

    let table = document.getElementById("sampleTable");

    const rows = table.rows.length;
    const cols = table.rows[0].cells.length

    let row = document.createElement('tr')

    for (let i = 0; i < cols; i++) {

        let col = document.createElement('td')
        col.innerText = 'Row ' + (rows + 1) + ' column ' + (i + 1);
        row.appendChild(col);

    }
    table.appendChild(row)

}

function insertColumn() {

    // Find a <table> element with id="myTable":
    let table = document.getElementById("sampleTable");

    const rows = table.rows.length;
    const cols = table.rows[0].cells.length

    let row = document.createElement('tr')

    for (let i = 0; i < rows; i++) {

        let rowact = table.rows[i]
        let col = document.createElement('td')
        col.innerText = 'Row ' + (i + 1) + ' column ' + (cols + 1);
        rowact.appendChild(col);

    }



}

function changeContent() {


    let loc = document.getElementById("location").value;
    let spl = loc.split(", ");
    let R = spl[0];
    let C = spl[1];

    let text = document.getElementById("tex").value;

    let table = document.getElementById("myTable").rows[R].cells[C].innerHTML = text;





}

function addColor() {

    let select = document.getElementById("colorSelect");
    let col = document.getElementById("color").value;
    const newOption = document.createElement("option");
    newOption.appendChild(document.createTextNode(col));
    select.appendChild(newOption);



}

function removeColor() {
    let select = document.getElementById("colorSelect");
    const index = select.index;

    select.remove(select.options[index]);

}



function newKitten() {
    const min = 300;
    const max = 600;
    let width = Math.floor(Math.random() * max) + min;
    let height = Math.floor(Math.random() * max) + min;

    document.getElementById("cat").src = "http://placekitten.com/" + String(width) + "/" + String(height);;


}
