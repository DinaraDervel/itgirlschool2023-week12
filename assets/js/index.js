const form = document.querySelector('#form');
form.addEventListener('submit', function (evt) {
    // cancel default behavior
    evt.preventDefault();

    //get value of input with name
    const name = document.querySelector('#name').value;
    //get value of input with url
    const link = document.querySelector('#picture').value;
    //get value of textarea with comment
    const comment = document.querySelector('#comment').value;
    //create element paragraph
    const paragraphWithName = document.createElement('p');
    paragraphWithName.innerHTML = name;
    //add element paragraph inside div #chat
    chat.append(paragraphWithName);

    //create element img
    const img = document.createElement('img');
    img.src = link;
    //add element img inside div #chat
    chat.append(img);

    //create element paragraph
    const paragraphWithComment = document.createElement('p');
    paragraphWithComment.innerHTML = comment;
    //add element paragraph inside div #chat
    chat.append(paragraphWithComment);

});