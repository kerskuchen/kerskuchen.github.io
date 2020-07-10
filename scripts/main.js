// Set heading content
{
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

}

// Change logo image on click
{
    const image = document.querySelector('img');
    image.onclick = function (event) {
        event.stopPropagation();

        if (image.getAttribute('src') === 'images/image.png') {
            image.setAttribute('src', 'images/image_alternative.png');
        }
        else {
            image.setAttribute('src', 'images/image.png');
        }
    }

}

// Add list elements
{
    const list = document.querySelector('ul');
    const html = document.querySelector('html');
    list.onclick = function () {
        const list_item = document.createElement('li');
        const item_content = prompt('Enter item content:');
        list_item.textContent = item_content;
        list.appendChild(list_item);

        list_item.onclick = function (event) {
            event.stopPropagation();
            const item_content = prompt('Enter new item content:');
            this.textContent = item_content;
        }
    }

}

// Guess the number game
{
    let random_number = Math.floor(Math.random() * 100) + 1;
    let guess_count = 1;
    let reset_button;

    const guesses = document.querySelector('.guesses');
    const last_result = document.querySelector('.last_result');
    const low_or_high = document.querySelector('.low_or_hight');

    const guess_submit = document.querySelector('.guess_submit');
    const guess_field = document.querySelector('.guess_field');


    function reset_game() {
        guess_count = 1;

        const reset_paragraphs = document.querySelectorAll('.result_paragraphs p');
        for (let i = 0; i < reset_paragraphs.length; i++) {
            reset_paragraphs[i].textContent = '';
        }

        reset_button.parentNode.removeChild(resetButton);

        guess_field.disabled = false;
        guess_submit.disabled = false;
        guess_field.value = '';
        guess_field.focus();

        last_result.style.backgroundColor = 'white';

        random_number = Math.floor(Math.random() * 100) + 1;
    }

    function set_game_over() {
        guess_field.disabled = true;
        guess_submit.disabled = true;
        reset_button = document.createElement('button');
        reset_button.textContent = 'Start new game';
        document.body.append(reset_button);
        reset_button.addEventListener('click', reset_game);
    }

    function check_guess() {
        let user_guess = Number(guess_field.value);
        if (guess_count === 1) {
            guesses.textContent = 'precious guesses: ';
        }
        guesses.textContent += user_guess + ' ';

        if (user_guess == random_number) {
            last_result.textContent = 'YAAAY';
            last_result.style.backgroundColor = 'green';
            low_or_high.textContent = '';
            set_game_over();
        } else if (guess_count === 10) {
            last_result.textContent = 'GAME OVER';
            set_game_over();
        }
        else {
            last_result.textContent = 'NOOO';
            last_result.style.backgroundColor = 'yellow';
            if (user_guess < random_number) {
                low_or_high.textContent = 'too low';
            }
            else {
                low_or_high.textContent = 'too high';
            }
        }

        guess_count += 1;
        guess_field.value = '';
        guess_field.focus();
    }


    guess_submit.addEventListener('click', check_guess);
}


// WebGL
function main() {
    const canvas = document.querySelector('#gl_canvas');
    const gl = canvas.getContext('webgl');

    if (gl === null) {
        alert('unable to init WebGL - Your browser or machine may not support it');
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

}

window.onload = main;