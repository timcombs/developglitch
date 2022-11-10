const glitch = document.getElementById('glitch');

const thumbs = document.getElementsByClassName('thumb');

for(let thumb of thumbs) {
  thumb.addEventListener('click', selectGlitch);

}

function selectGlitch(e) {
  glitch.src = e.target.src;
  glitch.alt = e.target.alt;

  console.log(glitch);
}