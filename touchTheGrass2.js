function bruhMoment(x)
{
  new Audio("Vine boom.mp3").play();
  var image = document.getElementById("image");
  var image2 = document.getElementById("image2");
  var image3 = document.getElementById("image3");
  var image4 = document.getElementById("image4");
  var image5 = document.getElementById("image5");
  var image6 = document.getElementById("image6");
  var image7 = document.getElementById("image7");
  var image8 = document.getElementById("image8");
  var image9 = document.getElementById("image9");
  var image10 = document.getElementById("image10");
  var image11 = document.getElementById("image11");
  var image12 = document.getElementById("image12");
  var text = document.getElementById("text");
  var text2 = document.getElementById("text2");
  var text3 = document.getElementById("text3");
  var text4 = document.getElementById("text4");
  var text5 = document.getElementById("text5");
  var text6 = document.getElementById("text6");
  var text7 = document.getElementById("text7");
  var text8 = document.getElementById("text8");
  var text9 = document.getElementById("text9");
  if(x == 1)
  {
  text.classList.add("fontalicious");
  text2.classList.add("fontalicious");
  text3.classList.add("fontalicious");
  text4.classList.add("fontalicious");
  text5.classList.add("fontalicious");
  text6.classList.add("fontalicious");
  text7.classList.add("fontalicious");
  text8.classList.add("fontalicious");
  text9.classList.add("fontalicious");
  text.classList.add("shakeit");
  text2.classList.add("shakeit");
  text3.classList.add("shakeit");
  text4.classList.add("shakeit");
  text5.classList.add("shakeit");
  text6.classList.add("shakeit");
  text7.classList.add("shakeit");
  text8.classList.add("shakeit");
  text9.classList.add("shakeit");
  image.classList.add("twister");
  image2.classList.add("twister");
  image3.classList.add("twister");
  image4.classList.add("twister");
  image5.classList.add("twister");
  image6.classList.add("twister");
  image7.classList.add("twister");
  image8.classList.add("twister");
  image9.classList.add("twister");
  image10.classList.add("twister");
  image11.classList.add("twister");
  image12.classList.add("twister");
  document.getElementById("input").innerHTML = "<input id = 'foul' type = 'button' value = 'Foul Switch' onclick = 'bruhMoment(2)'>";
  document.getElementById("foul").style.backgroundColor = "green";
  }
  if(x == 2)
  {
    text.classList.remove("fontalicious");
    text2.classList.remove("fontalicious");
    text3.classList.remove("fontalicious");
    text4.classList.remove("fontalicious");
    text5.classList.remove("fontalicious");
    text6.classList.remove("fontalicious");
    text7.classList.remove("fontalicious");
    text8.classList.remove("fontalicious");
    text9.classList.remove("fontalicious");
    text.classList.remove("shakeit");
    text2.classList.remove("shakeit");
    text3.classList.remove("shakeit");
    text4.classList.remove("shakeit");
    text5.classList.remove("shakeit");
    text6.classList.remove("shakeit");
    text7.classList.remove("shakeit");
    text8.classList.remove("shakeit");
    text9.classList.remove("shakeit");
    image.classList.remove("twister");
    image2.classList.remove("twister");
    image3.classList.remove("twister");
    image4.classList.remove("twister");
    image5.classList.remove("twister");
    image6.classList.remove("twister");
    image7.classList.remove("twister");
    image8.classList.remove("twister");
    image9.classList.remove("twister");
    image10.classList.remove("twister");
    image11.classList.remove("twister");
    image12.classList.remove("twister");
    image.classList.remove("twister");
    document.getElementById("input").innerHTML = "<input id = 'foul' type = 'button' value = 'Foul Switch' onclick = 'bruhMoment(1)'>";
    document.getElementById("foul").style.backgroundColor = "red";
  }
}
