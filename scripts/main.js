
// Set heading content
const button = document.querySelector('button');
const heading = document.querySelector('h1');

function change_username() {
    let username = prompt('Please enter name:');
    if (!username) {
        change_username();
    }
    else {
        localStorage.setItem('name', username);
        heading.textContent = 'Hello ' + username + '!';
    }
}

let username = localStorage.getItem('name');
if (username) {
    heading.textContent = 'Hello ' + username + '!';
}
else {
    change_username()
}

button.onclick = function () {
    change_username()
}



// Change logo image on click
const image = document.querySelector('img');
image.onclick = function () {
    if (image.getAttribute('src') === 'images/image.png') {
        image.setAttribute('src', 'images/image_alternative.png');
    }
    else {
        image.setAttribute('src', 'images/image.png');
    }
}
