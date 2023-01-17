var i = 0,
  text;
text = "Hello..! welcome to my website please click open portfolio";

function typing() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 60);
  }
}

typing();
