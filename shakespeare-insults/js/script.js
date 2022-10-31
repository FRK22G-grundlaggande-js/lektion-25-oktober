const quotes = [
    { insult: "Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?", play: "Macbeth" },
    { insult: "Never hung poison on a fouler toad.", play: "Richard III"},
    { insult: "He thinks too much: such men are dangerous.", play: " Julius Ceasar." }, 
    { insult: "Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.", play: "The Merchant of Venice" }
];

document.querySelector('button')
.addEventListener('click', function() {
    if(quotes.length >= 0){
    const randPos = Math.floor(Math.random()*quotes.length);
    console.log(quotes.length)
    const quote = quotes.splice(randPos, 1)[0];
    console.log(quotes.length)
    
    document.querySelector('blockquote').innerHTML = `
    ${quote.insult} 
    <span> - ${quote.play}</span>`
    } else {
        alert('Tom!')
    }
})