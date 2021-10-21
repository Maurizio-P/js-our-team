/*
1 - creo un array di oggetti, che contengono le informazioni delle persone
    1.1 le informazioni sono: nome, ruolo e foto
*/ 

const btnAdd = document.getElementById("addMemberButton")
const teamContainer = document.querySelector(".team-container")

const utenti = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },
]
   
console.log(utenti)

arrayStamp()

btnAdd.addEventListener("click", function(){
    const name = document.getElementById("name").value
    const role = document.getElementById("role").value
    const image = document.getElementById("image").value

    console.log("name: " + name)
    console.log("role: " + role)
    console.log("image: " + image)

    const utente = {
        name: name,
        role: role,
        image: image
    }
    utenti.push(utente)
    console.log(utenti)

    cardStamp(utente)


})

function arrayStamp(){
    teamContainer.innerHTML = ""

    for( i = 0; i < utenti.length; i++){
        const utenteSingolo = utenti[i]
        console.log(utenteSingolo)
        cardStamp(utenteSingolo)
    }
}


function cardStamp(utenteSingolo){


    teamContainer.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img
                    src="img/${utenteSingolo.image}"
                    alt="${utenteSingolo.name}"
                >
            </div>
            <div class="card-text">
                <h3>${utenteSingolo.name}</h3>
                <p>${utenteSingolo.role}</p>
            </div>
        </div>`
}