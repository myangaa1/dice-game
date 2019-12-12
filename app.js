// Яг одоо идэвхитэй байгаа тоглогчийг хадгалах хувьсагч.
var activePlayer;

// 2 тоглолгчийн оноог хадгалах хувьсагч.
var scores;

// Тухайн тоглогчийн ээлжийн оноог хадгалах хувьсагч.
var roundScore;

// Шооны зургийг үзүүлэх элементийг DOM-оос хайж олоод энд хадгалья.
var diceDom = document.querySelector(".dice");

// Тоглоомыг шинээр эхлүүлэх функцыг дууудах.
initGame();

// Тоглоомыг шинээр эхлэхэд бэлтгэнэ.
function initGame() {
  // Тоглогчийн ээлжийг хадгалах хувьсагч. 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч.
  scores = [0, 0];

  // Тоглогчдын ээлжин д цуглуулсан оноог хадгалах хувьсагч.
  roundScore = 0;

  // Програм эхлэхэд бэлтгэе.
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Тоглогчдын нэрийг өгч байна.
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// ROLL товчны эвент листенер.
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1 - 6 гэсэн тоог санамсаргүйгээр үүсгэнэ.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шооны зурагийг харуулна.
  diceDom.style.display = "block";

  // Санамсаргүйгээр үүсгэсэн тооны дагуу шооны зурагийг зааж өгнө.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Ð‘ÑƒÑƒÑÐ°Ð½ Ñ‚Ð¾Ð¾ Ð½ÑŒ 1 ÑÑÑ ÑÐ»Ð³Ð°Ð°Ñ‚Ð°Ð¹ Ð±Ð¾Ð» Ð¸Ð´ÑÐ²Ñ…Ñ‚ÑÐ¹ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð¹Ð½ Ð¾Ð½Ð¾Ð¾Ð³ Ð½ÑÐ¼ÑÐ³Ð´Ò¯Ò¯Ð»Ð½Ñ.
  if (diceNumber !== 1) {
    // 1-ÑÑÑ ÑÐ»Ð³Ð°Ð°Ñ‚Ð°Ð¹ Ñ‚Ð¾Ð¾ Ð±ÑƒÑƒÐ»Ð°Ð°. Ð‘ÑƒÑƒÑÐ°Ð½ Ñ‚Ð¾Ð¾Ð³ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð´ Ð½ÑÐ¼Ð¶ Ó©Ð³Ð½Ó©
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 Ð±ÑƒÑƒÑÐ°Ð½ Ñ‚ÑƒÐ» Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð¹Ð³ ÑÐ½Ñ Ñ…ÑÑÑÐ³Ñ‚ ÑÐ¾Ð»ÑŒÐ¶ Ó©Ð³Ð½Ó©.
    switchToNextPlayer();
  }
});

// HOLD товчны эвент листенер.
document.querySelector(".btn-hold").addEventListener("click", function() {
  // Идвэхтэй байгаа тоглогчийн цуглуулсан ээлжийн оноог түүний үндсэн оноо дээр нэмэх .
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // Идвэхтэй байгаа тоглогчийн цуглуулсан үндэсэн оноог дэлгэц дээр гаргах.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Тухайн толголч ялагч болсон эсэхийг шалгах
  if (scores[activePlayer] >= 10) {
    // Тухайн тоглолгчийн нэрийг winnner болгож өөрчлөх.
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Дараагийн тоглогчруу шилжих .
    switchToNextPlayer();
  }
});

// New Game товчны эвент листенер
document.querySelector(".btn-new").addEventListener("click", initGame);

// Тоглогчийн ээлжийг шилжүүлэх функц.
function switchToNextPlayer() {
  // Энэ тоглогчиин ээлжиндээ цуглуулсан оноод 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Тоглогчийн  ээлжийг нөгөө тоглогчруу шулжүүлнэ.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлнэ.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр алга болгоно.
  diceDom.style.display = "none";
}
