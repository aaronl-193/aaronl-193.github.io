let img = document.querySelector('.destination-page-top-img');
let imgs = ["/Images/Alun-alun-Bandung (1).jpg", "/Images/Dago_Dreampark-transformed.jpeg", "/Images/Dusun Bambu.jpeg", "/Images/farm house.PNG", "/Images/Grafika Cikole.jpeg", "/Images/kawah putih.jpeg", "/Images/Kawah Rengganis.jpeg", "/Images/Lembang_Park___Zoo-transformed.webp", "/Images/Orchid Forest Cikole.png", "/Images/Taman Hutan Raya.jpeg", "/Images/Tebing Keraton.jpeg", "/Images/The Great Asia Africa.webp"];


setInterval(function() {
  let random = Math.floor(Math.random() * 12);
  img.src = imgs[random];

}, 1500);

document.getElementById('img1').addEventListener('click', function() {
  document.location.href = "DestinationPageKP.html";
});

document.getElementById('img2').addEventListener('click', function() {
  document.location.href = "DestinationPageFH.html";
});

document.getElementById('img3').addEventListener('click', function() {
  document.location.href = "DestinationPageTGAA.html";
});

document.getElementById('img4').addEventListener('click', function() {
  document.location.href = "DestinationPageDD.html";
});

document.getElementById('img5').addEventListener('click', function() {
  document.location.href = "DestinationPageLPZ.html";
});

document.getElementById('img6').addEventListener('click', function() {
  document.location.href = "DestinationPageOF.html";
});

document.getElementById('img7').addEventListener('click', function() {
  document.location.href = "DestinationPageAAB.html";
});

document.getElementById('img8').addEventListener('click', function() {
  document.location.href = "DestinationPageTHR.html";
});

document.getElementById('img9').addEventListener('click', function() {
  document.location.href = "DestinationPageGC.html";
});

document.getElementById('img10').addEventListener('click', function() {
  document.location.href = "DestinationPageTK.html";
});

document.getElementById('img11').addEventListener('click', function() {
  document.location.href = "DestinationPageDB.html";
});

document.getElementById('img12').addEventListener('click', function() {
  document.location.href = "DestinationPageKR.html";
});