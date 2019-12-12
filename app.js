// Тоглогчийн ээлжийг  хадгалах хувьсагч
var activePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлж дээр цуглуулсан оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалаx хувьсагч (1-6 хүртэлх тоог энэ хувьсагчид санамсаргүйгээр олгож өгнө)

// Программ эхлэхэд бэлдэх
// document.querySelector("#score-0").textContent = 0;
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
  // ------------------------------------------------------------------------------------
  roundScore = roundScore + diceNumber;
  if (diceNumber === 1) roundScore = 0;

  document.getElementById("current-" + activePlayer).textContent = roundScore;
});
