//get div #chat
const chat = document.querySelector('#chat');

//function for adding elements to div #chat
const postComment = () => {
    //get value of input with name
    const name = document.querySelector('#name').value;
    //create element paragraph
    const paragraphWithName = document.createElement('p');
    paragraphWithName.innerHTML = name;
    //add element paragraph inside div #chat
    chat.append(paragraphWithName);

    //get value of input with url
    const link = document.querySelector('#picture').value;
    //create element img
    const img = document.createElement('img');
    img.src = link;
    //add element img inside div #chat
    chat.append(img);

    //get value of textarea with comment
    const comment = document.querySelector('#comment').value;
    //create element paragraph
    const paragraphWithComment = document.createElement('p');
    paragraphWithComment.innerHTML = comment;
    //add element paragraph inside div #chat
    chat.append(paragraphWithComment);
}