	var heart = document.getElementById("s");


  
  TweenMax.fromTo(heart,.6,
    {
      visible:true,
      scale: 1
    },
    {
      scale:1.05,
      repeat: -1,
      ease: RoughEase.ease,
      ease: Elastic.easeOut,
      ease: Elastic.easeOut.config(0.75, 1),
      yoyo: true
  });
  

//////////////////////////////////////////
// 
function kleur() {
  TweenMax.to(".st4", 1, {fill:randomKleur(), stroke:randomKleur(), delay:1, onComplete:kleur});
}
kleur();

function randomKleur() {
  return "rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) +")";
}

function random(min, max) {
  return min + Math.floor( Math.random() * (max - min));
}