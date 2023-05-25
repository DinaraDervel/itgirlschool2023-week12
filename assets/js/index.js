const form = document.querySelector('#form');
const chat = document.querySelector('#chat');

form.addEventListener('submit', function (evt) {
    // cancel default behavior
    evt.preventDefault();

    //get value of input with name
    const name = document.querySelector('#name').value;
    //get value of input with url
    const link = document.querySelector('#picture').value;
    //get value of textarea with comment
    const comment = document.querySelector('#comment').value;

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