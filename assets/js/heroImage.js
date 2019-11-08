/*
    Hero Image Changes image every 3 seconds
 */
var myIndex = 0;
var pauseHero = false;
var myView = "hero-image";

var views = [
    {name: "hero-image", view : 0, mustFollow: false},
    {name: "adventure", view: 1, mustFollow: true},
    {name: "room", view: 2, mustFollow: true },
    {name: "itineray", view: 3, mustFollow: true},
    {name: "about", view: 10, mustFollow: false},
    {name: "language", view: 11, mustFollow: false}
];

changeView('hero-image');

function carousel(myIndex){
    if(!pauseHero) {
        var directory = "assets/images/hero/lg/";

        var images = [
            {image: directory + "split.jpg", alt: "Split downtown coast at night."},
            {image: directory + "klis.jpg", alt: "Klis fortress."},
            {image: directory + "mljet.jpg", alt: "Mljet national park, blue cove beach."},
            {image: directory + "pula.jpg", alt: "Pula amplitheater."},
            {image: directory + "krka.jpg", alt: "The magical waterfalls of Krka National Park."},
            {
                image: directory + "trakoscan.jpg",
                alt: "13th Century Castle Troakoscan in the northern part of Croatia."
            },
            {
                image: directory + "dugi-otok.jpg",
                alt: "The cliffs at the edge of Dugi Otok where on a clear day you supposedly can see Italy."
            },
            {image: directory + "01-split.jpg", alt: "Diocletian's Palace, built for the Roman emperor in AD 305."},
            {image: directory + "hidden-bay_Dubrovnik.jpg", alt: "Hidden bay off the beaten path in Dubrovnik."},
            {
                image: directory + "plitvice-lakes-np.jpg",
                alt: "Plitvice Lakes National park is full of waterfalls, clear lakes of stunning blues and nature trails."
            },
            {image: directory + "zadar.jpg", alt: "Zadar is a city rich in history."},
            {image: directory + "istria.jpg", alt: "Stunning sunset over a coastal villiage in the Istria region."}
        ];


        var image_url = images[myIndex].image;
        var alt_text = images[myIndex].alt;

        $("#carasouleImg").css("background-image", "url(" + image_url + ")");


        myIndex++;
        if (myIndex >= images.length) {
            myIndex = 0
        }
        setTimeout(function () {
            carousel(myIndex)
        }, 3000);
    }
}

function changeView(view){

    //see if the view is one of the expected and different from current
    var newView = findView(view,views);
    var currView =  findView(myView,views);
    if(!newView){
        console.log("ERROR: unexpected view encountered: " + view.name);
        newView =findView('hero-image',views);
    }
    if(newView.mustFollow && (newView.view != currView.view +1)){
        console.log("ERROR: view mustFollow violation encountered: newView: "+newView.name +" view value: " + newView.view +" current view: " +currView.name +" view value: "+ currView.value + ".");
        newView = findView('hero-image',views);
    }

    //potential errors dealt with, swap the view
    if(newView.name !== currView.name){
       //hide currView
        $('[data-view = '+currView.name +']').toggle();
       //show newView
        $('[data-view = '+newView.name +']').toggle();
    }
    if(newView.name == 'hero-image'){
        pauseHero = false;
        setTimeout(function(){ carousel(myIndex) }, 3000);
    }
    else{
        pauseHero = true;
        if(newView.name =="adventure"){
            buildTripContent();
        }
    }
    myView=newView.name;

}

//generic finder for list with key of name
function findView(name,list){
    var foundItem = false
    list.forEach(function(item){
        if(item.name == name){
            foundItem = item;
        }
    });
    return foundItem;
}
