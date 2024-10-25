const sounds = {
    C: new Audio('sounds/C.wav'),
    D: new Audio('sounds/D.wav'),
    E: new Audio('sounds/E.wav'),
    F: new Audio('sounds/F.wav'),
    G: new Audio('sounds/G.wav'),
    A: new Audio('sounds/A.wav'),
    B: new Audio('sounds/B.wav')
};

function playSound(note) {
    if (sounds[note]) {
        sounds[note].currentTime = 0;
        sounds[note].play();

        const keyElement = document.getElementById(note);
        keyElement.classList.add('active');
        setTimeout(() => keyElement.classList.remove('active'), 100); 
    }
}

document.querySelectorAll('.key').forEach((key) => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-sound');
        playSound(note);
    });
});

document.addEventListener('keydown', (event) => {
    const note = event.key.toUpperCase();
    if (sounds[note]) {
        playSound(note);
    }
});
