document.getElementById("b1")
.addEventListener('click', getText)

document.getElementById("b2")
.addEventListener('click', getUsers)



function getText(){
    fetch('sample.txt')
    .then(res => res.text())
    .then(res => {
            document.getElementById("text").innerHTML = res;
    })
}

function getUsers(){

    fetch('users.json')
    .then((res) => res.json())
    .then( (data) => {
        
        let output = " <h2> User objects </h2> "
        data.forEach(element => {
            output += `
               <p> ${element.name}
                </p>
            `
        });
        document.getElementById("user")
        .innerHTML = output;

    })

}

