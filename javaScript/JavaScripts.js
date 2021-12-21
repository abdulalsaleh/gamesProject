let divContainer = document.querySelector(".div-container");

let gameArray = [{'name':'snake', 'imgSrc':'https://picsum.photos/601/801', 'gameDesc':'Snake is a game bla bla bla' ,link:'https://www.google.com'},
{name:'mario',imgSrc:'https://picsum.photos/602/802',gameDesc:'mario is a game',link:'https://www.google.com'},
{name:'battleshipes','imgSrc':'https://picsum.photos/600/800', gameDesc:'battleShipes is i game',link:'https://www.google.com'}];

for(let a of gameArray){
    console.log(a.name)
    let cardDiv=document.createElement('div');
    cardDiv.classList.add('card');

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');
    cardDiv.appendChild(imgContainer);
    let cardHeader = document.createElement('h2');
    cardHeader.innerText=a.name;
    cardDiv.appendChild(cardHeader);
    let cardImg = document.createElement('img');
    cardImg.setAttribute('src',a.imgSrc);
    cardImg.setAttribute('alt','this an image');
    imgContainer.appendChild(cardImg)

    let cardPara = document.createElement('p');
    cardPara.innerText = a.gameDesc;
    cardDiv.appendChild(cardPara);
    let btn=document.createElement('a');
    btn.classList.add('link');
    btn.setAttribute('href',a.link);
    btn.innerText = 'go to the game';
    cardDiv.appendChild(btn);
    divContainer.appendChild(cardDiv);

}
divContainer.style.backgroundColor='green';

