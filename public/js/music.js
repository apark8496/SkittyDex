const { Howl, Howler } = require('howler');

var music = {
pokemon: new Howl({
    src: ["https://archive.org/search.php?query=source%3A%22https%3A%2F%2Fwww.televisiontunes.com%2Fuploads%2Faudio%2FPokemon%2520-%2520Instrumental.mp3%22"],
    volume: 0.5
    })
};


(function () {

document.querySelector(".play-music").addEventListener("click", () => {
    if (!music.pokemon.playing()) {
        music.pokemon.play();
    }
})
        document.querySelector(".stop-music").addEventListener("click", () => {
            music.pokemon.pause();
        })

    })();