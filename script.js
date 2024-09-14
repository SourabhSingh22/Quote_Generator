const quoteText = document.getElementById("quote-text");
const authorName = document.getElementById("author-name");
const changeQuote = document.getElementById("chnage-quote");

const api_url = "http://api.quotable.io/random";


async function getUrl(url) {
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    quoteText.innerHTML = data.content;
    authorName.innerHTML = data.author;
}
getUrl(api_url);


function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quoteText.innerHTML + " --- by " + authorName.innerHTML, "Tweet Window", width = "600, height =300");
}
