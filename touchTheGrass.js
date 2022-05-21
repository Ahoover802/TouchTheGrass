function bruhMoment(x)
{
  new Audio('Vine boom.mp3').play();
  var image = document.getElementById("image");
  var text = document.getElementById("text");
  if(x == 1)
  {
  text.classList.add("fontalicious");
  text.classList.add("shakeit");
  image.classList.add("twister");
  document.getElementById("input").innerHTML = "<input id = 'foul' type = 'button' value = 'Foul Switch' onclick = 'bruhMoment(2)'>";
  document.getElementById("foul").style.backgroundColor = "green";
  }
  if(x == 2)
  {
    text.classList.remove("fontalicious");
    text.classList.remove("shakeit");
    image.classList.remove("twister");
    document.getElementById("input").innerHTML = "<input id = 'foul' type = 'button' value = 'Foul Switch' onclick = 'bruhMoment(1)'>";
    document.getElementById("foul").style.backgroundColor = "red";
  }
}
