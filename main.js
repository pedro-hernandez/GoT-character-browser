const mainElem = document.querySelector('main');

let pageCount = 1;
let pageTurn = 1;
let nextPage;
let previousPage;

window.onload = async function gamesChars(pageCount) {
    console.log(pageTurn);
    const thronesChars = await fetch(`https://www.anapioficeandfire.com/api/characters?page=${pageCount}`);
    const thronesCharsJson = await thronesChars.json();

    let charList = document.createElement('div');
    mainElem.appendChild(charList);

    // generate GoT characters list
    for (i = 0; i < thronesCharsJson.length; i++) {

        const divElem = document.createElement('div');
        divElem.setAttribute('class', 'name')

        if (thronesCharsJson[i].name) {
            divElem.innerHTML = thronesCharsJson[i].name;
        } else {
            divElem.innerHTML = thronesCharsJson[i].aliases[0];
        }
        charList.appendChild(divElem);
    }

    // add buttons 

    const nextButton = () => {
        nextPage = document.createElement('button');
        nextPage.setAttribute('class', 'button');
        nextPage.innerHTML = `Next >>`;
        charList.appendChild(nextPage);

        nextPage.addEventListener('click', getNextPage);

        function getNextPage(event) {
            pageTurn = pageTurn + 1;
            pageCount = pageTurn;
            console.log(pageCount);
            charList.parentNode.removeChild(charList);
            gamesChars(pageCount);
        }
    }

    nextButton();

    const prevButton = () => {
        let previousPage = document.createElement('button');
        previousPage.setAttribute('class', 'button');
        previousPage.innerHTML = `<< Previous`;
        charList.insertBefore(previousPage, nextPage);

        previousPage.addEventListener('click', getPreviousPage);

        function getPreviousPage(event) {
            pageTurn = pageTurn - 1;
            pageCount = pageTurn;
            console.log(pageCount);
            charList.parentNode.removeChild(charList);
            gamesChars(pageCount);
        }
    }

    if (pageCount > 1){
        prevButton();
    }
}


