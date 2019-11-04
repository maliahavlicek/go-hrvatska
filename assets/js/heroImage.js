/*
    Hero Image Changes image every 3 seconds
 */
var myIndex = 0;
var myView = 1;
setTimeout(function(){ carousel(myIndex) }, 3000);



function carousel(myIndex){
  var directory = "assets/images/hero/lg/";

  var images=[
  {image: directory+"split.jpg", alt: "Split downtown coast at night."},
  {image: directory+"klis.jpg", alt: "Klis fortress."} ,
  {image: directory+"mljet.jpg", alt:"Mljet national park, blue cove beach."},
  {image: directory+"pula.jpg",alt:"Pula amplitheater."},
  {image: directory+"krka.jpg",alt:"The magical waterfalls of Krka National Park."},
  {image: directory+"trakoscan.jpg",alt:"13th Century Castle Troakoscan in the northern part of Croatia."},
  {image: directory+"dugi-otok.jpg",alt:"The cliffs at the edge of Dugi Otok where on a clear day you supposedly can see Italy."},
  {image: directory+"01-split.jpg",alt:"Diocletian's Palace, built for the Roman emperor in AD 305."},
  {image: directory+"hidden-bay_Dubrovnik.jpg",alt:"Hidden bay off the beaten path in Dubrovnik."},
  {image: directory+"plitvice-lakes-np.jpg",alt:"Plitvice Lakes National park is full of waterfalls, clear lakes of stunning blues and nature trails."},
   {image: directory+"zadar.jpg",alt:"Zadar is a city rich in history."},
 {image: directory+"istria.jpg",alt:"Stunning sunset over a coastal town in the Istria region."}

  ];


  var image_url = images[myIndex].image;
  var alt_text = images[myIndex].alt;

  $("#carasouleImg").css("background-image", "url(" + image_url + ")");


  myIndex++;
  if (myIndex >= images.length) {
    myIndex = 0
  }
  setTimeout(function(){ carousel(myIndex) }, 3000);
}
