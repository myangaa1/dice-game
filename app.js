// Тоглогчийн ээлжийг  хадгалах хувьсагч
var activePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлж дээр цуглуулсан оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалаx хувьсагч (1-6 хүртэлх тоог энэ хувьсагчид санамсаргүйгээр олгож өгнө)
var dice = Math.floor(Math.random() * 6) + 1;

// Программ эхлэхэд бэлдэх
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Shoo :" + dice);
