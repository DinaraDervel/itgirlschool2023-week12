const form = document.querySelector('#form');
const chat = document.querySelector('#chat');

form.addEventListener('submit', function (evt) {
    // cancel default behavior
    evt.preventDefault();

    //get value of input with name and check its spelling
    let name = document.querySelector('#name').value;
    name = checkName(name);
    //get value of input with url
    const link = document.querySelector('#picture').value;
    //get value of textarea with comment and check it for spam
    let comment = document.querySelector('#comment').value;
    comment = checkSpam(comment);

    //create div 'card' - container for comment, and add it to chat
    const card = document.createElement('div');
    card.className = 'card';
    chat.append(card, document.createElement('hr'));

    //create element paragraph
    const paragraphWithName = document.createElement('p');
    paragraphWithName.innerHTML = name;
    paragraphWithName.className = 'card__name';

    //create element img
    const img = document.createElement('img');
    img.src = link;
    img.className = 'card__img';

    //create element paragraph
    const paragraphWithComment = document.createElement('p');
    paragraphWithComment.innerHTML = comment;
    paragraphWithComment.className = 'card__comment';

    //add created elements inside div 'card'
    card.append(img, paragraphWithName, paragraphWithComment);
});

function checkName(str) {
    let name = str.toLowerCase();
    const firstLetter = name[0].toUpperCase();
    name = firstLetter + name.slice(1);
    return name;
}

function checkSpam(str) {
    const spam1 = /viagra/ig;
    const spam2 = /xxx/ig;
    str = str.replace(spam1, '***');
    str = str.replace(spam2, '***');
    return str;
}