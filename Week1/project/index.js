// your code goes in here

'use strict'


let favoriteQuotes = [{
    quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    author: '-Mother Teresa'
},
{
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    author: '-Franklin D. Roosevelt'
},
{
    quote: 'Always remember that you are absolutely unique. Just like everyone else.',
    author: '-Margaret Mead'
},
{
    quote: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
    author: '-Robert Louis Stevenson'
},
{
    quote: 'The future belongs to those who believe in the beauty of their dreams.',
    author: '-Eleanor Roosevelt'
},
{
    quote: 'It is during our darkest moments that we must focus to see the light.',
    author: '-Aristotle'
}
];

let myFavoriteQuote = document.getElementById('quote');

let myFavoriteAuthor = document.getElementById('author');

let clickForNewQuote = document.getElementById('clickHere');

clickForNewQuote.onclick = function (){

    let randomQuote = Math.floor(Math.random() * favoriteQuotes.length);
       
    myFavoriteQuote.innerText = favoriteQuotes[randomQuote].quote;
    
    myFavoriteAuthor.innerText = favoriteQuotes[randomQuote].author;
} 

// Design....

clickForNewQuote.classList.add('clickHereButton');
document.getElementById('emptySpace').classList.add('emptySpaceStyle');
document.getElementById('icons').classList.add('iconsStyle');

