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

//Тоглоомыг анх эхлэх үед шоог алга болгох
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1-6 доторх санамсарүй нэг тоо гаргаж авна
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шооны зургийг веб дээр гаргаж ирнэ
  diceDom.style.display = "block";

  // Буусан санамсаргүй тоонд харгалзах зургийг гаргах
  diceDom.src = "dice-" + diceNumber + ".png";

  if (diceNumber !== 1) {
    // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглолгчийн ээлжийн оноог нэмэгдүүлнэ
    // 1 ээс ялгаатай тоо буулаа. Тоглолгчийн ээлжийн оноог цуглуулах
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    eeljSolih();
    //diceDom.style.display = "none";
  }
});

// Тоглогч оноогоо хадгалах эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function() {
  scores[activePlayer] = scores[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 15) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    eeljSolih();
  }
});

// Тоглоомыг шинээр эхлэх эвент листенер
document.querySelector(".btn-new").addEventListener("click", function() {
  activePlayer = 0;
  scores[0] = 0;
  scores[1] = 0;
  roundScore = 0;
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  diceDom.style.display = "none";
});

function eeljSolih() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;

  // Улаан цэгийг шилжүүлэх
  // document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
  // toggle функц нь active player-т active гэсэн класс байвал устгах. Байхгүй бол нэмэх
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");

  // Тоглогчийн ээлжийг солих
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
}
