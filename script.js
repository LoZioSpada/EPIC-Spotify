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
