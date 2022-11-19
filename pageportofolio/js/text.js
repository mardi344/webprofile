var i = 0 ,text;
text = `Hey, you can scroll down or click on the navigation above to immediately view the portfolio. ^__^ `;

function typing() {
  if(i < text.length){
    document.getElementById('text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,40);
  }
}

typing();