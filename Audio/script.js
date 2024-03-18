const button_state = document.getElementById('play-pause');
const title = document.getElementById("capitulo");
const next_button = document.getElementById('proximo');
const previous_button = document.getElementById('anterior');
const audio = document.getElementById('audio-capitulo')

let i = 1;

next_button.addEventListener('click', () => {
    i++;
    let state = audio.paused;
    if (i == 11) 
    {
        i = 1;    
    } 
    audio.setAttribute("src", `./books/dom-casmurro/${i}.mp3`)
    title.innerHTML = `Capítulo ${i}`;
    if(!state)
    {
        audio.play();
    }
});

previous_button.addEventListener("click", () => {
    i--;
    let state = audio.paused;
    if (i == 0) 
    {
        i = 10;    
    }
    audio.setAttribute("src", `./books/dom-casmurro/${i}.mp3`)
    title.innerHTML = `Capítulo ${i}`;
    if(!state)
    {
        audio.play();
    }
});

button_state.addEventListener("click", () => {
    if(!audio.paused)
    {
        audio.pause();
        button_state.setAttribute("class", "bi bi-play-circle-fill");
    }
    else
    {
        audio.play();
        button_state.setAttribute("class", "bi bi-pause-circle-fill")
    }
});
