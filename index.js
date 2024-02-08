const body = document.querySelector('#body');

const title = document.createElement('h1');
title.innerHTML = 'Wanna go out with me?';

body.appendChild(title);

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

    const yayText = document.createElement('h1');
    yayText.innerHTML = 'Yay, pick you up at 8pm';

    body.appendChild(yayText);
}

yesButton.addEventListener('mouseover', growButton);
noButton.addEventListener('mouseover', moveButton);
yesButton.addEventListener('mouseout', shrinkButton);
yesButton.addEventListener('click', acceptRequest);