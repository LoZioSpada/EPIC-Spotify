// Funzione che fa apparire le foto degli album nel body
const getMusic = (artist, id) => {
    const section = document.querySelector(`#${id}`);
    const row = document.querySelector(`#${id}Section`);
    console.log(row);

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist)
        .then(response => response.json())
        .then(body => {
            // qui da utilizzare bootstrap per far apparire gli album nel body
            let musica = body.data
            section.classList.remove("d-none")
            for (let i = 0; i < musica.slice(0, 4).length; i++) {
                const elemento = musica[i]
                row.innerHTML += `<div class="col col-3"> <img class="w-100" src='${elemento.album.cover_xl}'/> </div>`
            }
        })
        .catch((err) => console.log(err))
}


window.onload = () => {
    getMusic("eminem", "eminem")
    getMusic("queen", "queen")
    getMusic("metallica", "metallica")
}

// Funzione che fa apparire i titoli degli album nel modale
function getTitles(artist) {
    const modal = document.querySelector("#exampleModal");
    const albumList = document.querySelector(".modal-body");
    albumList.innerHTML = ""; // Cancella eventuali elementi precedenti

    // Effettua una richiesta API per ottenere i titoli degli album
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`, {
        method: "GET"
    })
        .then(response => response.json())
        .then(data => {


            // Aggiungi i titoli degli album alla lista
            data.data.forEach(album => {
                const listItem = document.createElement("li");
                listItem.textContent = album.title;
                albumList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Si è verificato un errore nella richiesta API:", error);
        });
}