/*
1 - creo un array di oggetti, che contengono le informazioni delle persone
    1.1 le informazioni sono: nome, ruolo e foto
*/ 

const btnAdd = document.getElementById("addMemberButton")
const teamContainer = document.querySelector(".team-container")

const utenti = []
console.log(utenti)

btnAdd.addEventListener("click", function(){
    const name = document.getElementById("name").value
    const role = document.getElementById("role").value
    const image = document.getElementById("image").value

    console.log("name: " + name)
    console.log("role: " + role)
    console.log("image: " + image)

    // utenti.push(name.value)
    // console.log("riga 21" + name.value)


    utenti.push({
        nome: name,
        ruolo: role,
        img: image
    })
    console.log(utenti)

    cardStamp(name, role, image)


})

function cardStamp(nome, ruolo, immagine){
    teamContainer.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img
                    src="${immagine}"
                    alt="${nome}"
                >
            </div>
            <div class="card-text">
                <h3>${nome}</h3>
                <p>${ruolo}</p>
            </div>
        </div>`
}