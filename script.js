const glitch = document.getElementById('glitch');

const thumbs = document.getElementsByClassName('thumb');

for(let thumb of thumbs) {
  thumb.addEventListener('click', selectGlitch);

}

pickFirstGlitch();

function pickFirstGlitch() {
  const pick = Math.floor(Math.random() * (12 - 0 + 1) + 0);
  glitch.src = thumbs[pick].src;
  glitch.alt = thumbs[pick].alt;
}

function selectGlitch(e) {
  glitch.src = e.target.src;
  glitch.alt = e.target.alt;

  console.log(glitch);
}