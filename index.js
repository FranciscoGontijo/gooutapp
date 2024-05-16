const body = document.querySelector('#body');

const title = document.createElement('h1');
title.className = 'main-title';
title.innerHTML = "Let's go out friday night?";

body.appendChild(title);

const askingGif = document.createElement('img');
askingGif.src = 'https://i.giphy.com/XCm6aoloWyUkwUuqkf.webp'
askingGif.className = 'gif-embed';

body.appendChild(askingGif);

const yesButton = document.createElement('button');
yesButton.className = 'yes-btn';
yesButton.innerHTML = 'Yes';

const noButton = document.createElement('button');
noButton.className = 'no-btn';
noButton.innerHTML = 'No';

body.appendChild(yesButton);
body.appendChild(noButton);

const moveButton = () => {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;

    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
}

const growButton = () => {
    yesButton.style.transform = 'scale(1.4)';
}

const shrinkButton = () => {
    yesButton.style.transform = 'scale(1)';
}

const acceptRequest = () => {
    body.removeChild(noButton);
    body.removeChild(yesButton);
    body.removeChild(title);
    body.removeChild(askingGif);

    const yayText = document.createElement('h1');
    yayText.className = "yay-text";
    yayText.innerHTML = "Yay! Can't wait to see you";

    const yayGif = document.createElement('img');
    yayGif.src = 'https://i.giphy.com/MeIucAjPKoA120R7sN.webp'
    yayGif.className = 'gif-embed';

    body.appendChild(yayText);
    body.appendChild(yayGif);
}

yesButton.addEventListener('mouseover', growButton);
noButton.addEventListener('mouseover', moveButton);
yesButton.addEventListener('mouseout', shrinkButton);
yesButton.addEventListener('click', acceptRequest);