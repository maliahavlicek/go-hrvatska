/*
    Hero Image Changes image every 2 seconds
 */
var myIndex = 0;
setTimeout(function(){ carousel(myIndex) }, 2000);



function carousel(myIndex){
  var images=[
  {image: "assets/images/hero/1_web_novigrad-kod-zadra--ivan-coric_0.jpg", alt: "Stunning image of Novigrad near Zadar at night."},
  {image: "assets/images/hero/01-DSC_2891_Sakarun_A.Gospic.jpg", alt: "People on Holiday enjoying Sakraun Beach."} ,
  {image: "assets/images/hero/01-split_-ivan-coric-2013.jpg", alt:"People gathering at St. Nikolas cathederal at dusk in Split."}

  ]

  var x = document.getElementById("carasoule");
  var image_tag =`<img class="slide" src='${images[myIndex].image}' alt = '${images[myIndex].alt}'/>`;
  x.innerHTML=image_tag;

  myIndex++;
  if (myIndex >= images.length) {
    myIndex = 0
  }
  setTimeout(function(){ carousel(myIndex) }, 2000);
}