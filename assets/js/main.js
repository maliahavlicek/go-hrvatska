/*
    Go Hrvatska is a single page application where the view is controlled via Javascript.
    If you want to expand the application you must add to the views array object.
    If the order of page/view matters, set mustFollow to true.
 */
let views = [
    {name: "hero-image", view : 0, mustFollow: false},
    {name: "adventure", view: 1, mustFollow: true},
    {name: "room", view: 2, mustFollow: true },
    {name: "itinerary", view: 3, mustFollow: true},
    {name: "about", view: 10, mustFollow: false},
    {name: "language", view: 11, mustFollow: false}
];

let myIndex = 0;
let pauseHero = false;
let myView = "hero-image";
// initialize application to main view/hero image
changeView('hero-image');

/*
    Hero Image Changes image every 3 seconds.
    Don't have all hero imagery in html or css to reduce load time of application
    Last image in array (istria.jpg) is the one coded in CSS and HTML
 */
function carousel(myIndex){
    if(!pauseHero) {
        let directory = "assets/images/hero/lg/";

        let images = [
            {image: directory + "split.jpg", alt: "Split downtown coast at night is beautiful."},
            {image: directory + "klis.jpg", alt: "Klis fortress has served as a stronghold for Romans, Royal Croatians, Knights of Templar, and the Ottomans."},
            {image: directory + "mljet.jpg", alt: "Mljet national park, is home to many secluded beaches including the famous blue cove beach."},
            {image: directory + "pula.jpg", alt: "Pula amphitheater is a close rival to those found in Italy and is the host to many concerts and festivals."},
            {image: directory + "krka.jpg", alt: "The magical waterfalls of Krka National Park."},
            {
                image: directory + "trakoscan.jpg",
                alt: "13th Century Castle Troakoscan in the northern part of Croatia is rich in history."
            },
            {
                image: directory + "dugi-otok.jpg",
                alt: "The cliffs at the edge of Dugi Otok provides a spectacular view where on a clear day you supposedly can see Italy."
            },
            {image: directory + "01-split.jpg", alt: "Diocletian's Palace, built for the Roman emperor in AD 305 is a must see destination in Split."},
            {image: directory + "hidden-bay_Dubrovnik.jpg", alt: "Hidden bay: a quaint inlet off the beaten path in Dubrovnik."},
            {
                image: directory + "plitvice-lakes-np.jpg",
                alt: "Plitvice Lakes National park is full of waterfalls, clear lakes of stunning blues and nature trails."
            },
            {image: directory + "zadar.jpg", alt: "Zadar is a coastal city rich in history from Romans to Turks."},
            {image: directory + "istria.jpg", alt: "Stunning sunsets over coastal villages in the Istria region will help rebalance your soul."}
        ];


        let image_url = images[myIndex].image;
        let alt_text = images[myIndex].alt;

        //Swap out the  image and accessibility label
        $("#carasouleImg").css("background-image", "url(" + image_url + ")");
        $('#carasouleImg').attr('aria-label',alt_text);

        //reset to beginning of image array if going past bounds
        myIndex++;
        if (myIndex >= images.length) {
            myIndex = 0
        }
        setTimeout(function () {
            carousel(myIndex)
        }, 3000);
    }
}

/*
    Hides all other views except current,
    default logic to go to main page if somehow view is not found or rules of mustFollow are broken
 */
function changeView(view){
    //see if the view is one of the expected and different from current
    let newView = findView(view,views);
    let currView =  findView(myView,views);
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
        else if(newView.name =="room"){
            buildRoomContent();
        }
        else if(newView.name =="itinerary"){
            buildMapContent();
        }
    }
    myView=newView.name;

}

//generic finder for list with key of name
function findView(name,list){
    let foundItem = false
    list.forEach(function(item){
        if(item.name == name){
            foundItem = item;
        }
    });
    return foundItem;
}

/*
    Initialize the map,
    default is zoom over Croatia
 */
function initMap() {
    try {
        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: {
                lat: 44.4467472,
                lng: 16.4064762
            }
        });
    }
    catch(mapError){
        console.log("Mapping error: " + mapError.message);
    }

}