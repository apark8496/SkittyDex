// variables
let i;
let j;
var chosen = [];

// load in sprites on page 
document.addEventListener("DOMContentLoaded", () => {
    for (i = 1; i < 49; i++) {
        fetchPokemon(i)
    };

    const spriteContainer = document.getElementById("sprite-container")
    const backBtn = document.getElementById("back-btn")
    const nextBtn = document.getElementById("next-btn")

    if (i === 49) {
        backBtn.disabled = true
    };

    // view more pokemon
    nextBtn.addEventListener("click", () => {
        let j = i
        spriteContainer.innerHTML = ""
        for (i = i; i < j + 48; i++) {
            fetchPokemon(i)
        }
        if (i !== 49) {
            backBtn.disabled = false
        }
        if (i > 898) {
            nextBtn.disabled = true
        }
    });

    // view previous pokemon
    backBtn.addEventListener("click", () => {
        let j = i - 96
        i = i - 48
        spriteContainer.innerHTML = ""
        for (j = j; j < i; j++) {
            fetchPokemon(j)
        }
        if (j === 49) {
            backBtn.disabled = true
        }
        if (i < 914) {
            nextBtn.disabled = false
        }
    });

    // search form
    const form = document.querySelector("form")
    form.addEventListener("submit", e => {
        e.preventDefault()
        let name = document.getElementById("'pokemon-name")
        let number = document.getElementById("pokedex-number")
        getCard(name.value, number.value)
        form.reset()
    });

});

// fetch pokemon by id through pokeapi
function fetchPokemon(id) {
    if (id <= 898) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(resp => resp.json())
            .then(json => {
                // pokemon image
                const spriteImg = document.createElement("img")
                spriteImg.src = json.sprites.front_default
                // allow user to click pokemon and append all sprites
                spriteImg.addEventListener("click", () => renderCard(json))
                document.getElementById("sprite-container").appendChild(spriteImg)
            })
    }
};

// pokemon user clicked on, bring up on individual card and show information
function renderCard(data) {
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = ""
    const newCard = document.createElement("div")
    newCard.id = "pokemon-card"
    newCard.className = "p-2"
    newCard.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name.toUpperCase()}">
    `
    for (const slots of data.types) {
        const types = document.createElement("p")
        types.innerText = slots.type.name
        types.id = slots.type.name
        newCard.appendChild(types)
    };

    const flavorText = document.createElement("p")

    getFlavorText(data.species.url).then((json) => {
        const englishEntries = json.flavor_text_entries.filter(entryObj => entryObj.language.name === "en")
        arrIndex = Math.floor(Math.random() * englishEntries.length)
        const respText = englishEntries[arrIndex].flavor_text
        flavorText.innerText = respText.replace("\f", " ")
        newCard.appendChild(flavorText)
    });

    // obtain more information
    const newText = document.createElement("button")
    newText.innerText = "Obtain More Info"
    newText.className = "btn btn-primary"
    newText.addEventListener("click", () => renderCard(data))

    // add to team div
    const teamBtn = document.createElement("button")
    teamBtn.id = "team-btn"
    teamBtn.className = "btn btn-primary mb-3"
    teamBtn.innerText = "Add to Team"
    teamBtn.addEventListener("click", () => {
        addTeamMember(data)
        window.scrollTo(0, 0)
    });

    // append buttons
    newCard.appendChild(newText)
    newCard.appendChild(document.createElement("br"))
    newCard.appendChild(document.createElement("br"))
    newCard.appendChild(teamBtn)
    cardContainer.appendChild(newCard)
};


function getFlavorText(textUrl) {
    return fetch(`${textUrl}`).then(resp => resp.json())
};

// ability to see team/remove from team
function addTeamMember(pokeData) {
    const memberSprite = document.createElement("img")
    const removeBtn = document.createElement("button")
    removeBtn.addEventListener("click", (e) => removeSprite(e.target))
    removeBtn.innerText = "Release"
    removeBtn.className = "btn btn-primary"
    memberSprite.src = pokeData.sprites.front_default
    memberSprite.alt = pokeData.name
    const mem1 = document.getElementById("member-1")
    const mem2 = document.getElementById("member-2")
    const mem3 = document.getElementById("member-3")
    const mem4 = document.getElementById("member-4")
    const mem5 = document.getElementById("member-5")
    const mem6 = document.getElementById("member-6")


    switch ("") {
        case mem1.innerHTML:
            mem1.appendChild(memberSprite)
            mem1.appendChild(removeBtn)
            highlightMember(memberSprite)
            break
        case mem2.innerHTML:
            mem2.appendChild(memberSprite)
            mem2.appendChild(removeBtn)
            highlightMember(memberSprite)
            break
        case mem3.innerHTML:
            mem3.appendChild(memberSprite)
            mem3.appendChild(removeBtn)
            highlightMember(memberSprite)
            break
        case mem4.innerHTML:
            mem4.appendChild(memberSprite)
            mem4.appendChild(removeBtn)
            highlightMember(memberSprite)
            break
        case mem5.innerHTML:
            mem5.appendChild(memberSprite)
            mem5.appendChild(removeBtn)
            highlightMember(memberSprite)
            break
        case mem6.innerHTML:
            mem6.appendChild(memberSprite)
            mem6.appendChild(removeBtn)
            highlightMember(memberSprite)
            break
        default:
            showTeamError()
    }
};

function removeSprite(removeBtn) {
    removeBtn.parentNode.innerHTML = ""
};

function getCard(name, number) {
    const dexNum = parseInt(number)
    if (typeof dexNum === "number" && dexNum <= 898) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${dexNum}/`)
            .then(resp => resp.json())
            .then(json => renderCard(json))
            .catch(() => {
                showSearchError()
            })
    } else if (typeof name === "string") {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`)
            .then(resp => resp.json())
            .then(json => {
                renderCard(json)
            })
            .catch(() => {
                showSearchError()
            })
    }
};

// TODO:save team function (BRUCE)


// TODO:post team to homepage (BRUCE)