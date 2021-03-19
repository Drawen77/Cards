
const cardDeck = [
    {
        name: 'six ♦;',
        value: '6',
        suit: 'Images/diamond.svg'

    },
    {
        name: 'seven ♦;',
        value: '7',
        suit: 'Images/diamond.svg'

    },
    {
        name: 'eight ♦;',
        value: '8',
        suit: 'Images/diamond.svg'

    },
    {
        name: 'nine ♦;',
        value: '9',
        suit: 'Images/diamond.svg'

    },
    {
        name: 'ten ♦;',
        value: '10',
        suit: 'Images/diamond.svg'

    },
    {
        name: 'valet ♦;',
        value: 'V',
        suit: 'Images/diamond.svg'

    },
    {
        name: 'dama ♦;',
        value: 'D',
        suit: 'Images/diamond.svg'

    },
    {
        name: 'king ♦;',
        value: 'K',
        suit: 'Images/diamond.svg'

    },
    {
        name: 'tuz ♦;',
        value: 'T',
        suit: 'Images/diamond.svg'

    },
    {
        name: 'six ♣',
        value: '6',
        suit: 'Images/cross.svg'

    },
    {
        name: 'seven ♣',
        value: '7',
        suit: 'Images/cross.svg'

    },
    {
        name: 'eight ♣',
        value: '8',
        suit: 'Images/cross.svg'

    },
    {
        name: 'nine ♣',
        value: '9',
        suit: 'Images/cross.svg'

    },
    {
        name: 'ten ♣',
        value: '10',
        suit: 'Images/cross.svg'

    },
    {
        name: 'valet ♣',
        value: 'V',
        suit: 'Images/cross.svg'

    },
    {
        name: 'dama ♣',
        value: 'D',
        suit: 'Images/cross.svg'

    },
    {
        name: 'king ♣',
        value: 'K',
        suit: 'Images/cross.svg'

    },
    {
        name: 'tuz ♣',
        value: 'T',
        suit: 'Images/cross.svg'

    },
    {
        name: 'six ♥',
        value: '6',
        suit: 'Images/heart.svg'

    },
    {
        name: 'seven ♥',
        value: '7',
        suit: 'Images/heart.svg'

    },
    {
        name: 'eight ♥',
        value: '8',
        suit: 'Images/heart.svg'

    },
    {
        name: 'nine ♥',
        value: '9',
        suit: 'Images/heart.svg'

    },
    {
        name: 'ten ♥',
        value: '10',
        suit: 'Images/heart.svg'

    },
    {
        name: 'valet ♥',
        value: 'V',
        suit: 'Images/heart.svg'

    },
    {
        name: 'dama ♥',
        value: 'D',
        suit: 'Images/heart.svg'

    },
    {
        name: 'king ♥',
        value: 'K',
        suit: 'Images/heart.svg'

    },
    {
        name: 'tuz ♥',
        value: 'T',
        suit: 'Images/heart.svg'

    },
    {
        name: 'six ♠',
        value: '6',
        suit: 'Images/sword.svg'

    },
    {
        name: 'seven ♠',
        value: '7',
        suit: 'Images/sword.svg'

    },
    {
        name: 'eight ♠',
        value: '8',
        suit: 'Images/sword.svg'

    },
    {
        name: 'nine ♠',
        value: '9',
        suit: 'Images/sword.svg'

    },
    {
        name: 'ten ♠',
        value: '10',
        suit: 'Images/sword.svg'

    },
    {
        name: 'valet ♠',
        value: 'V',
        suit: 'Images/sword.svg'

    },
    {
        name: 'dama ♠',
        value: 'D',
        suit: 'Images/sword.svg'

    },
    {
        name: 'king ♠',
        value: 'K',
        suit: 'Images/sword.svg'

    },
    {
        name: 'tuz ♠',
        value: 'T',
        suit: 'Images/sword.svg'

    }
];



function showRandomCardValue() {
    let a = Math.floor(Math.random() * cardDeck.length);
    document.querySelector('#v1').innerHTML = `${cardDeck[a].value}`;
    document.querySelector('#v2').innerHTML = `${cardDeck[a].value}`;
    document.querySelector('#v3').innerHTML = `${cardDeck[a].value}`;
    document.querySelector('#v4').innerHTML = `${cardDeck[a].value}`;
    console.log(cardDeck[a].name);
    document.querySelector('.cardSuit').setAttribute('src', cardDeck[a].suit);

}

document.querySelector('.cards').ondblclick = function showCard() {
    document.querySelector('.card-front').style.transform = 'rotateY(360deg)';
    document.querySelector('.card-shirt').style.transform = 'rotateY(180deg)';
    showRandomCardValue();
}

document.querySelector('.cards').onclick = function hideCard() {
    document.querySelector('.card-front').style.transform = 'rotateY(180deg)';
    document.querySelector('.card-shirt').style.transform = 'rotateY(360deg)';
}

