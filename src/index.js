// const ARTWORKS_URL = "https://api.artsy.net/api/tokens/xapp_token?client_id=6823a01cacfc8eb52c8b&client_secret=476506b96c59c125414d8ae951344725"
const ArtWork_Url = "http://localhost:3000/artworks"
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM LOADED")
    getArtwork()
    getGalleries()
})

const getArtwork = () => {
    fetch(ArtWork_Url)
    .then(res => res.json())
    .then(json => showArtwork(json))
}

const showArtwork = (artworksArray) => {
    artworksArray.forEach(artwork  => makeArtCard(artwork))
}

const makeArtCard = (artwork) => {
    let column = document.createElement("div")
    column.className = "col-sm"
    const div = document.createElement("div")
    div.className = "card"
    div.style = "width: 18rem"
    let img = document.createElement("img")
    img.src = artwork.image
    img.className = "card-img-top"

    let divBody = document.createElement("div")
    divBody.className = "card-body"
    let h5 = document.createElement("h5")
    h5.innerText = artwork.title
    h5.className = "card-title"
    let h6 = document.createElement("h6")
    h6.innerText = artwork.artist_name

    divBody.appendChild(h5)
    divBody.appendChild(h6)
    div.appendChild(img)
    div.appendChild(divBody)
    column.appendChild(div)

    let artContainer = document.querySelector(".row")
    artContainer.appendChild(column)
}

const getGalleries = () => {
    fetch('http://localhost:3000/galleries')
    .then(res => res.json())
    .then(json => allGalleries(json))
}

const allGalleries = (galleriesArray) => {
    let galleryDropdown = document.getElementById('inputGroupSelect01')
    galleriesArray.forEach( gallery => {
        let galleryOption = document.createElement('option')
        galleryOption.innerText = gallery.name
        galleryDropdown.appendChild(galleryOption)
    })
}




//------------------
// const addTrainer = (trainer) => {
//     const main = document.querySelector("main")
//     const div = makeTrainerCard(trainer)
//     main.appendChild(div)
// }

// const makeTrainerCard = (trainer) => {
//     let trainerDiv = document.createElement("div")
//     trainerDiv.className = "card"
//     trainerDiv.setAttribute("data-id", trainer.id)

//    let trainerP = document.createElement("p")
//    trainerP.textContent = `${trainer.name}`

//    let addButton = document.createElement("button")
//    addButton.setAttribute("data-trainer-id", trainer.id)
//    addButton.innerText = "Add Pokemon"

//    addButton.addEventListener("click", function(){
//         generatePokemon(trainer.id)
//         // pokeUl.innerHTML = ""
//         // getPokemon(trainer.id)
//    })

//     let pokeUl = document.createElement("ul")
//     pokeUl.id = trainer.id


//    trainerDiv.appendChild(trainerP)
//    trainerDiv.appendChild(addButton)
//    trainerDiv.appendChild(pokeUl)

// //    getPokemon(trainer.id)
//    showPokemons(trainer)
   
//    return trainerDiv
// }

// // const getPokemon = (trainerId) => {
// //     fetch(`http://localhost:3000/trainers/${trainerId}`)
// //     .then(res => res.json())
// //     .then(data => showPokemons(data.pokemons))
// // }

// const showPokemons = (trainer) => {
//     trainer.pokemons.map(pokemon => {
//         addPokemon(pokemon, trainer.id)
//     })
// }

// const addPokemon = (pokemon, trainerId) => {
//     let ul = document.getElementById(trainerId)
//     const li = makeLi(pokemon)
//     ul.appendChild(li)
// }

// const makeLi = (pokemon) => {
//     let li = document.createElement("li")
//     li.innerText = `${pokemon.nickname} (${pokemon.species})`

//     let releaseButton = document.createElement("button")
//     releaseButton.className = "release"
//     releaseButton.innerText = "Release"
//     releaseButton.setAttribute("data-pokemon-id", pokemon.id)

//     li.appendChild(releaseButton)
//     releaseButton.addEventListener("click", function(){
//         deletePokemon(pokemon.id)
//         li.remove()
//     })
//     return li
// }

// const deletePokemon = (pokemonId) => {
//    fetch(POKEMONS_URL + `/${pokemonId}`, {
//         method: "DELETE"
//     })
// }

// const generatePokemon = (trainerId) => {
//    fetch(POKEMONS_URL, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             trainer_id: trainerId
//         })
//     })
//     .then(res => res.json())
//     .then(data => {
//         // data.trainer_id = data.trainer.id
//         addPokemon(data)
//     })
// }