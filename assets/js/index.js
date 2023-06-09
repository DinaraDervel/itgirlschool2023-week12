const form = document.querySelector('#form');
const chat = document.querySelector('#chat');
const nameInput = document.querySelector('#name');
const nameShowYes = document.querySelector('#yes');
const nameShowNo = document.querySelector('#no');

nameShowYes.addEventListener('change', () => {
    nameInput.style.visibility = 'visible';
});

nameShowNo.addEventListener('change', () => {
    nameInput.style.visibility = 'hidden';
    nameInput.value = '';
});

form.addEventListener('submit', function (evt) {
    // cancel default behavior
    evt.preventDefault();

    //get value of input with name and check its spelling
    let name = nameInput.value;
    name = name ? checkName(name) : 'Username';
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
    img.src = link ? link : `assets\\images\\image${Math.ceil(Math.random() * 5)}.jpeg`;
    img.className = 'card__img';

    //create element paragraph
    const paragraphWithComment = document.createElement('p');
    paragraphWithComment.innerHTML = comment;
    paragraphWithComment.className = 'card__comment';

    //create element paragraph for date and time
    const paragraphWithDate = document.createElement('p');
    paragraphWithDate.innerHTML = parseDate(new Date());
    paragraphWithDate.className = 'card__date';

    //add created elements inside div 'card'
    card.append(img, paragraphWithName, paragraphWithDate, paragraphWithComment);

    //restore form elements default values
    form.reset();
    nameInput.style.visibility = 'visible';
});

function checkName(str) {
    let name = (str.toLowerCase()).split(' ');
    for (let i = 0; i < name.length; i++) {
        name[i] = name[i].replaceAll(' ', '');
        const firstLetter = name[i] ? name[i][0].toUpperCase() : '';
        name[i] = firstLetter + name[i].slice(1);
    }
    name = name.join(' ');
    return name;
}

function checkSpam(str) {
    return str.replace(/viagra|xxx/ig, '***');
}

function parseDate(newDate) {
    let day = '';
    switch (newDate.getDay()) {
        case 0:
            day = 'Sun';
            break;
        case 1:
            day = 'Mon';
            break;
        case 2:
            day = 'Tue';
            break;
        case 3:
            day = 'Wen';
            break;
        case 4:
            day = 'Thu';
            break;
        case 5:
            day = 'Fri';
            break;
        case 6:
            day = 'Sat';
            break;
        default:
            day = 'unknown';
    }
    let month = '';
    switch (newDate.getMonth()) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
        default:
            month = 'unknown';
    }
    return `${day}, ${newDate.getDate()} ${month} ${newDate.getFullYear()} at ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
}