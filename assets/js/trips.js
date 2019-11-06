//initialize trips that can are available (this way jqeuery can loop through build vs huge html file
var trips =
{
  "trips":[
    {
      "name": "Wining & Dining",
      "image": "../images/trips/wine.jpg",
      "details": ""
    },
    {
      "name": "Castles & Culture",
      "image": "../images/trips/castles.jpg",
      "details": ""
    },
    {
      "name": "Nature Nut",
      "image": "../images/trips/nature.jpg",
      "details": ""
    },
    {
      "name": "Beach Life",
      "image": "../images/trips/beach.jpg",
      "details": ""
    }
  ]
};
//wait until page is ready
$(document).ready(function() {
	// Toggle the visibility of the paragraph when a button is hovered
	$(".split-img-wrapper").mouseenter(function(){
		$(this).next().slideToggle('slow');
	});
	$(".split-img-wrapper").mouseleave(function(){
		$(this).next().slideToggle('slow');
	});

});


