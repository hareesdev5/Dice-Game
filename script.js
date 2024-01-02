let img = [
  "img/one.svg",
  "img/two.svg",
  "img/three.svg",
  "img/four.svg",
  "img/five.svg",
  "img/six.svg",
];

let dice1 = document.querySelector("img");

let roll1 = document.getElementById("P1");

let roll2 = document.getElementById("P2");

function btn1(p1) {
  roll2.disabled = false;
  let dieonevalue = Math.floor(Math.random() * 6);
  document.getElementById("P2").style.backgroundColor = "green"
  document.querySelector("#die-1").setAttribute("src", img[dieonevalue]);
  document.querySelector("#span1").innerHTML = (dieonevalue+1) + parseInt(document.querySelector("#span1").innerHTML);

  if (p1 === "p1") {
    roll1.disabled = true ;
    document.getElementById("h1").innerHTML = "Player-2 To Play"
    document.getElementById("P1").style.backgroundColor = "grey"
}

  var val1 = parseInt(document.querySelector("#span1").innerHTML);

  if(val1 >= 30){
    document.getElementById("wins").innerHTML= "Player-1 is winning";
    roll1.disabled = true;
    document.getElementById("P1").style.backgroundColor = "grey"
    roll2.disabled = true;
    document.getElementById("P2").style.backgroundColor = "grey"
  }
  
}

let dice2 = document.querySelector("img");

function btn2(p2) {
  roll1.disabled = false;
  let dietwovalue = Math.floor(Math.random() * 6);
  document.getElementById("P1").style.backgroundColor = "green"
  document.querySelector("#die-1").setAttribute("src", img[dietwovalue]);
  document.querySelector("#span2").innerHTML = (dietwovalue + 1)+parseInt(document.querySelector("#span2").innerHTML);

  if (p2 === "p2") {
    roll2.disabled = true;
    document.getElementById("h1").innerHTML = "Player-1 To Play";
    document.getElementById("P2").style.backgroundColor = "grey"  
  }

  var val2 = parseInt(document.querySelector("#span2").innerHTML)
  
  if(val2 >= 30){
    document.getElementById("wins").innerHTML= "Player-2 is winning";
    roll1.disabled = true;
    document.getElementById("P1").style.backgroundColor = "grey"
    roll2.disabled = true;
    document.getElementById("P2").style.backgroundColor = "grey"
  }
}
function reset(){
    location.reload();
}

function darkmode(){
  let element =document.getElementsByTagName('button')
  element.classList.add('active')
}

