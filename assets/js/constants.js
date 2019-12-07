/*
  Large data objects are located in this file to keep the core functionality files clean
*/

const TRIPS = [{
    "name": "wine",
    "label": "Wine & Dine",
    "details": "Enjoy the delights of regional food hot spots, local vineyards and to die for pastries.",
    "days": [{
        "name": "Pula",
        "lat": 44.8732299,
        "lng": 13.8480518,
        "places": [{
            "name": "Church of St. Euphemia, Rovinj",
            "lat": 45.0832203,
            "lng": 13.628919,
            "description": "The Church of St. Euphemia, often known as the Basilica of St. Euphemia (although it is not formally a basilica minor), is a Baroque church located in the heart of the historic part of Rovinj, Croatia, dominating the town.",
            "attribution": "https://en.wikipedia.org/wiki/Church_of_St._Euphemia,_Rovinj"
        }, {
            "name": "Vina Radovan",
            "lat": 45.2757258,
            "lng": 13.6899502,
            "description": "Radovan Winery started in 1994 on a 1.5 hectare vineyard. We began by renewing and planting new Malvasia vines and soon other varieties were introduced. In 1996, we planted our first cabernet sauvignon grape vines (vineyards).",
            "attribution": "http://vinaradovan.com/who-we-are/"
        }, {
            "name": "Konoba Dolina",
            "lat": 45.3753656,
            "lng": 13.8648394,
            "description": "The tavern Dolina, in the small Istrian village Gradinje, is an ideal place to enjoy a home-cooked Istrian cuisine. You can enjoy the truffles that grow in the surrounding forests prepared with meat, eggs or homemade pasta, such as fuzi, gnocchi and ravioli.",
            "attribution": "https://www.konobadolina.hr/en/"
        }]
    }, {
        "name": "Rijeka",
        "lat": 45.3330489,
        "lng": 14.4202891,
        "places": [{
            "name": "Bevanda Restaurant",
            "lat": 45.3395272,
            "lng": 14.2952159,
            "description": "Bevanda, a renowned restaurant, uses only fresh ingredients from the continent and the sea to create classic, but versatile dishes with a touch of modernity.",
            "attribution": "http://www.bevanda.hr/en/restoran/"
        }, {
            "name": "Restaurant Jist",
            "lat": 45.3475939,
            "lng": 14.3917946,
            "description": "J-I-S-T is a fine–dining restaurant located in Rijeka, Croatia that mainly serves Boškarin meat, a strain of long-horned cattle from the Istrian peninsula.",
            "attribution": "https://zambellidesign.com/portfolio/jist/"
        }, {
            "name": "Castillo de Trast",
            "lat": 45.3326798,
            "lng": 14.4553218,
            "description": "The Castle of Trsat, on the outskirts of Rijeka ,plays a triple role: it is a historical monument, a place of recreation and a privileged point of observation to the Gulf of Kvarner. Formerly there stood a Roman fortress, today its tourist destination with summer banquets being offered in the main courtyard.",
            "attribution": "https://www.rutasymapas.com/castillo-de-trast/"
        }]
    }, {
        "name": "Senj",
        "lat": 44.9912466,
        "lng": 14.9026532,
        "places": [{
            "name": "Restaurant Uskok",
            "lat": 44.9941219,
            "lng": 14.8915563,
            "description": "Local family restaurant with product from local farms. World champion cheese and honey in combination is in our menu. Friendly and welcoming staff, reasonable prices and excellent cuisine.",
            "attribution": "https://www.tripadvisor.com/ShowUserReviews-g776611-d14079535-r626549063-Restaurant_Uskok-Senj_Lika_Senj_County.html"
        }, {
            "name": "Nehaj Fortress",
            "lat": 45.0201921,
            "lng": 15.069873,
            "description": "The fortress represents a unique and exceptional example of fortification architecture from the transition from the middle ages to the Renaissance. The fortress represents, as an important strategic building for the defence against the Turks.",
            "attribution": "http://croatia.hr/en-GB/nehaj-fortress"
        }, {
            "name": "Tavern Lavlji Dvor",
            "lat": 44.9903168,
            "lng": 14.8980225,
            "description": "A 16th century garden in the center of the city has been transformed into a restaurant that offers homemade food such as scallops, grilled fish and meat, various types of soup, pasta and risotto.",
            "attribution": "http://visitsenj.com/en/tourist-offer/tavern-buffet-bistro/tavern-lavlji-dvor/"
        }]
    }, {
        "name": "Novalja",
        "lat": 44.5526593,
        "lng": 14.8848009,
        "places": [{
            "name": "Sirana Glijora",
            "lat": 44.5002958,
            "lng": 14.955202,
            "description": "The Gligora Dairy is not just the most awarded dairies in Croatia, but one of the most awarded in the world for it's hard sheep cheese.",
            "attribution": "https://gligora.com/dairy-cheese-production/"
        }, {
            "name": "Aroma Bakery",
            "lat": 44.4461761,
            "lng": 15.0367902,
            "description": "Fantastic croissants with chocolate filling, plus many other pastries to choose from.",
            "attribution": "https://wego.here.com/croatia/zadar/restaurant/krostula-bakery-pastry--191aabd1-ba8b435f9b940bc7bcb27dc9b243e291?x=ep&map=44.11491,15.22771,15,normal"
        }, {
            "name": "Trapula Wine & Cheese Bar",
            "lat": 44.4438073,
            "lng": 15.0544936,
            "description": "This fine bar on the main square has an excellent list of local wines (by the glass or bottle) and a range of tapas; order a board with local Pag cheese and prosciutto. Bliss!",
            "attribution": "https://www.lonelyplanet.com/croatia/pag-town/restaurants/trapula-wine-cheese-bar/a/poi-eat/1598980/1326084"
        }]
    }, {
        "name": "Zadar",
        "lat": 44.118044,
        "lng": 15.2239898,
        "places": [{
            "name": "The Greeting to the Sun",
            "lat": 44.1176075,
            "lng": 15.2176507,
            "description": "Monument to the Sun or The Greeting to the Sun (Croatian: Pozdrav suncu) is a monument in Zadar, Croatia dedicated to the Sun.",
            "attribution": "https://en.wikipedia.org/wiki/Monument_to_the_Sun"
        }, {
            "name": "Restaurant Kastel",
            "lat": 44.1179503,
            "lng": 15.2215734,
            "description": "The excellent fusion cuisine served here is Dalmatian in style, with French, Italian and even Peruvian influences. Don't be surprised to find ceviche on the menu - the chef was born in Peru!",
            "attribution": "https://www.viamichelin.com/web/Restaurant/Zadar-23000-Kastel-131wwlca3"
        }, {
            "name": "Degarra Winery",
            "lat": 44.1555529,
            "lng": 15.2533855,
            "description": "This young winery, founded in 2012, has 1.8 hectares of vineyards in property and 3.6 hectares in concession. At the best wine-growing location in Ravni kotar, the varieties of Cabernet, Merlot, Syrah, Plavin, Pošip, and Maraština are cultivated, from which quality wines – Pošip, Bonterra, Rose, Bommary, Primo and Perla are produced.",
            "attribution": "https://www.thewineandmore.com/stories/degarra-winery/"
        }]

    }, {
        "name": "Lika Region",
        "lat": 44.8798702,
        "lng": 15.6090371,
        "places": [{
            "name": "Lička Kuća",
            "lat": 44.865748,
            "lng": 15.3003881,
            "description": "The restaurant menu brings together all the delicacies of the Lika region, made from traditional recipes and from locally sourced products. Prosciutto, cheese, lamb baked under the iron bell, grilled dishes, roasted potato halves, trout, fermented milk, Lika fritters, Lika cheese, apple or plum strudels, are just a few of the specialities made at this famous restaurant.",
            "attribution": "https://np-plitvicka-jezera.hr/en/plan-your-visit/hospitality-facilities/national-restaurant-licka-kuca/"
        }, {
            "name": "Plitvice Lakes National Park",
            "lat": 45.020372,
            "lng": 15.0682249,
            "description": "This wonderful natural phenomenon consists of 16 interconnected lakes and over 90 waterfalls of different size.",
            "attribution": "https://www.frankaboutcroatia.com/plitvice-lakes/"
        }, {
            "name": "Beekeeping Brozovic",
            "lat": 45.229529,
            "lng": 15.3460585,
            "description": "Award winning honey and many beeswax and honey products.",
            "attribution": "https://www.facebook.com/pcelarstvo.brozovic"
        }]

    }, {
        "name": "Zagreb",
        "lat": 45.8164017,
        "lng": 15.9714403,
        "places": [{
            "name": "Dubovac Castle",
            "lat": 45.495117,
            "lng": 15.5257941,
            "description": "This 13th century fortress was the first major settlement building in the Karlovac area, existing at the time as one of a series of defensive fortresses defending this area of strategic importance",
            "attribution": "https://www.timeout.com/croatia/attractions/dubovac-castle"
        }, {
            "name": "Museum of Broken Relationships",
            "lat": 45.814925,
            "lng": 15.9712403,
            "description": "An unavoidable sight in your exploration of Zagreb and a unique emotional journey around the world through hundreds of break-ups.",
            "attribution": "https://brokenships.com/visit/museum-details"
        }, {
            "name": "Bistro Apetit by Marin Rendić, Zagreb",
            "lat": 45.831228,
            "lng": 15.9724202,
            "description": "A superb and modern blend of food, drink and hedonism.",
            "attribution": "https://www.bistroapetit.com/"
        }]

    }]
}, {
    "name": "castles",
    "label": "Castles & Culture",
    "details": "Tour castles, cathedrals, museums, fortresses, roman ruins and other cultural sites.",
    "days": [{
        "name": "Osijek",
        "lat": 45.5464305,
        "lng": 18.6186473,
        "places": [{
            "name": "Place of Remembrance - Vukovar Hospital",
            "lat": 45.3578582,
            "lng": 18.9926594,
            "description": "The place of remembrance – the Vukovar hospital 1991 is a tragic truth ... In mass grave at Ovčara, the sacred place in Croatia, 261 persons lost their lives.",
            "attribution": "http://www.visitvukovar-srijem.com/en/sights-and-more/cultural-and-historical-tourism/vukovar-nocturne/"
        }, {
            "name": "Church of St Peter & Paul",
            "lat": 45.5608331,
            "lng": 18.6759909,
            "description": "This red-brick neo-Gothic church's 90m-high tower is surpassed in height only by the cathedral in Zagreb and dominates downtown Osijek. Built in the 1890s, the interior has 40 elaborate stained-glass windows in Viennese style and vividly coloured frescos by Croatian painter Mirko Rački.",
            "attribution": "https://www.lonelyplanet.com/croatia/osijek/attractions/church-of-st-peter-paul/a/poi-sig/1047806/1002809"
        }, {
            "name": "Vučedol Culture Museum",
            "lat": 45.5554131,
            "lng": 18.6214556,
            "description": "See artifacts from the Vučedol culture which flourished between 3000 and 2200 BC which flourished along the right bank of the Danube river.",
            "attribution": "https://en.wikipedia.org/wiki/Vu%C4%8Dedol_Culture_Museum"
        }, {
            "name": "King Peter Krešimir IV Park",
            "lat": 45.5554131,
            "lng": 18.6214556,
            "description": "Created in 1935, with help from France, King Peter Krešimir IV park is all the more attractive because its trees were specifically chosen to be beautiful whatever the season.",
            "attribution": "https://travelguide.michelin.com/europe/croatia/osijek-baranja-county/osijek/king-peter-kresimir-iv-park"
        }]
    }, {
        "name": "Papuk",
        "lat": 45.5216295,
        "lng": 17.6854224,
        "places": [{
            "name": "Castle Pejačević - Nasice",
            "lat": 45.5548595,
            "lng": 18.4140927,
            "description": "This castle built in 1811 on the edge of the park and the crest of a hill, is classical in style with a few late Baroque details.",
            "attribution": "https://travelguide.michelin.com/europe/croatia/osijek-baranja-county/nasice/pejacevic-castle"
        },{
            "name": "Ružica Grad",
            "lat": 45.511156,
            "lng": 17.858181,
            "description": "A great number of medieval fortifications, most of them originating from the 13th century, witness about the importance of the area of Papuk, especially during the time of the invasion of the Turks.",
            "attribution": "https://pp-papuk.hr/en/kulturno-povijesna-bastina/srednji-vijek/"
        }, {
            "name": "Požega Cathedral",
            "lat": 45.332597,
            "lng": 17.678054,
            "description": "Saint Teresa of Ávila Cathedral is a cathedral in Požega and it is a beautiful example of Baroque architecture. ",
            "attribution": "https://croatiareviews.com/culture-and-heritage/pozega-cathedral"
        }]
    }, {
        "name": "Karlovac",
        "lat": 45.489252,
        "lng": 15.548630,
        "places": [{
            "name": "Ozalj Castle",
            "lat": 45.614280,
            "lng": 15.470743,
            "description": "he Ozalj fortress, located on the stone cliff perched above the Kupa River, is a very old stronghold that has been converted into a castle.",
            "attribution": "https://croatiareviews.com/culture-and-heritage/ozalj-castle"
        }, {
            "name": "Dubovac Castle",
            "lat": 45.495117,
            "lng": 15.5257941,
            "description": "This 13th century fortress was the first major settlement building in the Karlovac area, existing at the time as one of a series of defensive fortresses defending this area of strategic importance",
            "attribution": "https://www.timeout.com/croatia/attractions/dubovac-castle"
        }, {
            "name": "Aquatika Museum",
            "lat": 45.485100,
            "lng": 15.562098,
            "description": "Croatia is one of the European countries with the richest ichthyofauna and flora, and the city of Karlovac, famous for its four rivers, is a particularly suitable place for the presentation of the natural richness of our fresh waters.",
            "attribution": "https://aquariumkarlovac.com/en/"
        }]
    }, {
        "name": "Zadar",
        "lat": 44.118608,
        "lng": 15.232136,
        "places": [{
            "name": "Plitvice Lakes",
            "lat": 45.020372,
            "lng": 15.0682249,
            "description": "The national park was founded in 1949 and is in the mountainous karst area of central Croatia, at the border to Bosnia and Herzegovina.",
            "attribution": "https://en.wikipedia.org/wiki/Plitvice_Lakes_National_Park"
        }, {
            "name": "Nikola Tesla Memorial Center",
            "lat": 44.559580,
            "lng": 15.309660,
            "description": "The Nikola Tesla Memorial Center is a cultural-historical site and museum located in Smiljan, Croatia, located at the birthplace of Nikola Tesla, one of the world's foremost electrical researchers and inventors.",
            "attribution": "http://www.mcnikolatesla.hr/memorijalni-centar/o-nama/"

        }, {
            "name": "Zadar Walking tour",
            "lat": 44.112110,
            "lng": 15.228485,
            "description": "Avoid the impersonal nature of big city tours and discover Zadar by foot on a small-group excursion, gaining intimate insight into the city’s cultural heritage with visits to landmarks including the Sea Organ and Church of St. Donatus, as well as liqueur and cheese tasting in the market.",
            "attribution": "https://www.viator.com/tours/Zadar/Zadar-walking-tour/d22433-30182P4?mcid=56757"
        }]
    }, {
        "name": "Split",
        "lat": 43.507303,
        "lng": 16.441423,
        "places": [{
            "name": "Klis Fortress",
            "lat": 43.560050,
            "lng": 16.524220,
            "description": "The Fortress of Klis has a history of more than 2000 years, beginning with the Illyrian tribe called Dalmatae that used it as a stronghold before it was taken by the Romans. After the fall of the Roman Empire, the site became a seat for several Croatian kings.",
            "attribution": "https://www.expatincroatia.com/visiting-klis-fortress/"
        }, {
            "name": "Cathedral of St. Lawrence",
            "lat": 43.517046,
            "lng": 16.251428,
            "description": "The Cathedral in Trogir is the most distinctive building, dominating the area. Built on foundations of the old basilica which was destroyed after Saracens attack 1123, construction of this splendid structure started in 1193 and has been building for four centuries until finally completed around 1500.",
            "attribution": "https://split-excursions.com/attractions/cathedral-of-st-lawrence-in-trogir/"
        },{
            "name": "Diocletian's Palace",
            "lat": 43.508359,
            "lng": 16.440183,
            "description": "Considered to be one of the most imposing Roman ruins, Diocletian’s palace is certainly the main attraction of the city of Split, Croatia.",
            "attribution": "http://www.diocletianspalace.org/"
        }]
    }]
}, {
    "name": "nature",
    "label": "Nature Nut",
    "details": "Spend the majority of your time by the sea catching the rays and enjoying the sea air.",
    "days": [{
        "name": "Papuk",
        "lat": 45.5216295,
        "lng": 17.6854224,
        "places": [{
            "name": "Ružica Grad",
            "lat": 45.511156,
            "lng": 17.858181,
            "description": "A great number of medieval fortifications, most of them originating from the 13th century, witness about the importance of the area of Papuk, especially during the time of the invasion of the Turks.",
            "attribution": "https://pp-papuk.hr/en/kulturno-povijesna-bastina/srednji-vijek/"
        }, {
            "name": "Skakavac Waterfall",
            "lat": 45.523237,
            "lng": 17.684505,
            "description": "One of the most beautiful waterfalls in Papuk Nature Park.",
            "attribution": "https://www.chasingthedonkey.com/papuk-nature-park-slavonia-croatia-unesco-geopark/"
        }, {
            "name": "Jankovac Forest Park",
            "lat": 45.560265,
            "lng": 17.500889,
            "description": "There are ten different natural forest communities in Papuk Nature Park, woods covering about 95% of the entire park. Its lower areas are predominantly hornbeam and oak forest, while the higher altitudes are where you’ll find the beech forests.",
            "attribution": "https://www.chasingthedonkey.com/papuk-nature-park-slavonia-croatia-unesco-geopark/"
        }]
    }, {
        "name": "Lonjsko Polje ",
        "lat": 45.359070,
        "lng": 16.816789,
        "places": [{
            "name": "Čigoć - stork village",
            "lat": 45.415395,
            "lng": 16.630886,
            "description": "Hundreds of the creatures descend on Čigoć every year, and almost every house in the village boasts a stork’s nest.",
            "attribution": "https://www.timeout.com/croatia/things-to-do/lonjsko-polje"
        }, {
            "name": "Krapje - traditional houses",
            "lat": 45.302066,
            "lng": 16.827112,
            "description": " Krapje is and exemplary bucolic villages made up of traditional wooden houses and barns.",
            "attribution": "https://www.timeout.com/croatia/things-to-do/lonjsko-polje"
        }, {
            "name": "Mužilovčica - wetlands and horses",
            "lat": 45.390890,
            "lng": 16.682421,
            "description": "Rent a canoe, explore the wetlands, catch sight of the posavski horse, a local breed that grazes in the oak forests.",
            "attribution": "https://www.lonelyplanet.com/croatia/attractions/lonjsko-polje-nature-park/a/poi-sig/1271901/358781"
        }]
    }, {
        "name": "Plitvice Lakes",
        "lat": 45.020372,
        "lng": 15.0682249,
        "places": [{
            "name": "Veliki Slap",
            "lat": 44.902543,
            "lng": 15.607900,
            "description": "The highest waterfall in the Plitvice National Park is the Large (Great) Waterfall (aka Veliki slap in Croatian) – 78 meters high situated at the very end of the Lower Lakes",
            "attribution": "https://www.plitvice-lakes.info/waterfalls/veliki-slap-waterfall/"
        }, {
            "name": "Barac Caves",
            "lat": 44.983817,
            "lng": 15.722790,
            "description": "Located in a village of Nova Krslja, just few kilometers from the lakes, the Barac caves were first open to visitors back in 1893, but soon forgotten following the WWII.",
            "attribution": "https://www.frankaboutcroatia.com/plitvice-lakes/"
        }, {
            "name": "Velika Kaskada ",
            "lat": 44.899876,
            "lng": 15.611025,
            "description": "Take a walk along and over a series of Lovely cascades located on the border of Gavanovac and Kaluđerovac lake.",
            "attribution": "https://www.plitvice-lakes.info/cascades/velike-kaskade/"
        }]
    }, {
        "name": "Paklenica Mountain",
        "lat": 44.341576,
        "lng": 15.489762,
        "places": [{
            "name": "Manita Pec Cave",
            "lat": 44.314565,
            "lng": 15.474718,
            "description": "Manita Peć has a wealth of stalagmites and stalactites enhanced by strategically placed lighting in the main chamber (40m long and 32m high).",
            "attribution": "http://www.np-paklenica.hr/en/index.php/park/tourist-facilities/manita-pec-cave"
        }, {
            "name": "Mali Vaganac adventure Park",
            "lat": 44.304790,
            "lng": 15.429620,
            "description": "Get outdoors, challenge yourself, and experience the exhilaration of rock climbing, abseiling, balancing and zipping!",
            "attribution": "http://distinct-travel.com/?page_id=11"
        }, {
            "name": "Zrmanja River Tours",
            "lat": 44.182897,
            "lng": 15.694342,
            "description": "The upper reaches of the Zrmanja are one of the country’s hottest spots for rafting and kayaking through its spectacular limestone canyons",
            "attribution": "https://www.viator.com/Zadar-attractions/Zrmanja/d22433-a21399"
        }]
    }, {
        "name": "Kornati",
        "lat": 43.821580,
        "lng": 15.319932,
        "places": [{
            "name": "Najada diving",
            "lat": 43.826843,
            "lng": 15.580262,
            "description": "The Dive sites in Kornati National Park are among the most beautiful in the Mediterranean, we know all the best spots to visit from shipwrecks to where the most diverse sea life can be found.",
            "attribution": "https://www.najada.com/word-press/divesites/"
        }, {
            "name": "Telašćica",
            "lat": 43.891586,
            "lng": 15.168010,
            "description": "The contrasts of nature is very expressed here with peaceful bays and rugged cliffs, forests of Aleppo pine on one side and Holm oak on the other side, the area of cultivated fields of vineyards and olive-trees, as well as the area of rocky meadows.",
            "attribution": "http://www.dugiotok.hr/en/attractions-telascica"
        }, {
            "name": "Nin - KiteBoarding",
            "lat": 44.247832,
            "lng": 15.047539,
            "description": "Nin’s sandy beaches are great places for windsurfing and kitesurfing and to learn surfing",
            "attribution": "https://visitnin.com/surfing/"
        }]

    }, {
        "name": "Krka",
        "lat": 43.915454,
        "lng": 16.012183,
        "places": [{
            "name": "Visovac Monestary",
            "lat": 43.861037,
            "lng": 15.973209,
            "description": "At the center of Lake Viskovac is a tree-fringed island, the perfect place for a monastery.",
            "attribution": "https://www.lonelyplanet.com/croatia/attractions/mother-of-mercy-franciscan-monastery/a/poi-sig/1336736/1318910"
        }, {
            "name": "Skradinski Buk - waterfalls",
            "lat": 43.804920,
            "lng": 15.964044,
            "description": "Swim in the Krka river, see if you are strong enough to make it to the falls.",
            "attribution": "https://www.swedishnomad.com/krka-national-park-in-croatia/"
        }, {
            "name": "Skradin - Boat trip",
            "lat": 43.817866,
            "lng": 15.923372,
            "description": "the advantage to starting your visit to Krka National Park in Skradin is that the park admission fee includes a boat ride through the canyon to Skradinski Buk waterfall.",
            "attribution": "https://www.swedishnomad.com/krka-national-park-in-croatia/"
        }]
    }]

}, {
    "name": "beaches",
    "label": "Beach Life",
    "details": "Caves, waterfalls, crazy cliffs, stunning mountain views and the Kornati archipelago await.",
    "days": [{
        "name": "Novalja",
        "lat": 44.5526593,
        "lng": 14.8848009,
        "places": [{
            "name": "Zrce",
            "lat": 44.539592,
            "lng": 14.915023,
            "description": "An exciting pebbly beach with many facilities and sport opportunities. A good spot to party the night away in one of the open-air clubs.",
            "attribution": "https://zrce.eu/en/"
        }, {
            "name": "Babe Beach",
            "lat": 44.567268,
            "lng": 14.866303,
            "description": "Babe beach lies in a shallow cove west of Novalja. It is the shallowest and warmest of Novalja’s beaches, with fine sand, ideal for playing with picigin with your friends.",
            "attribution": "http://croatia.hr/en-GB/experiences/beaches/babe-beach"
        }, {
            "name": "Planjka – Trinćel Beach",
            "lat": 44.571195,
            "lng": 14.887818,
            "description": "The winner of “The most beautiful beach on the Adriatic” is a must-see for anybody vacationing on Pag. It has a lot of kid-friendly activities, as well as sports courts for the adults.",
            "attribution": "https://www.camping-simuni.hr/en/blog/which-are-the-best-sandy-beaches-in-croatia/"
        }, {
            "name": "Nin - KiteBoarding",
            "lat": 44.247832,
            "lng": 15.047539,
            "description": "Nin’s sandy beaches are great places for windsurfing and kitesurfing and to learn surfing",
            "attribution": "https://visitnin.com/surfing/"
        }]
    }, {
        "name": "Kornati Islands",
        "lat": 43.821580,
        "lng": 15.319932,
        "places": [{
            "name": "Sakarun",
            "lat": 44.133719,
            "lng": 14.871812,
            "description": "One of Croatia's best nightlife beaches where the party doesn't stop until the morning. Well-equipped with bars and other facilities.",
            "attribution": "http://www.dugiotok.hr/en/attractions-telascica"
        }, {
            "name": "Telašćica",
            "lat": 43.891586,
            "lng": 15.168010,
            "description": "The contrasts of nature is very expressed here with peaceful bays and rugged cliffs, forests of Aleppo pine on one side and Holm oak on the other side, the area of cultivated fields of vineyards and olive-trees, as well as the area of rocky meadows.",
            "attribution": "http://www.dugiotok.hr/en/attractions-telascica"
        }, {
            "name": "Lojena Cove",
            "lat": 43.820556,
            "lng": 15.250562,
            "description": "The sandy cove of Lojena on the island of Levrnaki is the most beautiful beach of the Kornati National Park.",
            "attribution": "http://croatia.hr/en-GB/experiences/nautical/paradise-coves-in-the-adriatic-that-only-sailors-know-of"
        }]
    }, {
        "name": "Split",
        "lat": 43.507303,
        "lng": 16.441423,
        "places": [{
            "name": "Trstenik beach",
            "lat": 43.501913,
            "lng": 16.464737,
            "description": "Water is very clear, mostly because it's open for currents, and if you need bigger company, over crowded Žnjan is just around the corner.",
            "attribution": "https://visitsplit.com/en/2457/swimming-in-split-top-5-beaches"
        }, {
            "name": "Bacvice Beach",
            "lat": 43.502243,
            "lng": 16.446891,
            "description": "It's the central city beach, popular among locals and young tourists looking for some fun.",
            "attribution": "https://visitsplit.com/en/2457/swimming-in-split-top-5-beaches"
        }, {
            "name": "Bene -kayak tour",
            "lat": 43.514264,
            "lng": 16.401528,
            "description": "Located in Marjan Hill Forest Park just north of Split, kayak tours start from a shady beach.",
            "attribution": "https://visitsplit.com/en/2457/swimming-in-split-top-5-beaches"
        }]
    }, {
        "name": "Brac",
        "lat": 43.319969,
        "lng": 16.644528,
        "places": [{
            "name": "Golden Horn - Zlatni Rat",
            "lat": 43.257460,
            "lng": 16.634258,
            "description": "One of Croatia's best nightlife beaches where the party doesn't stop until the morning. Well-equipped with bars and other facilities.",
            "attribution": "http://www.dugiotok.hr/en/attractions-telascica"
        }, {
            "name": "Lovrecina Beach",
            "lat": 43.372175,
            "lng": 16.660535,
            "description": "A wonderful sandy beach, located near charming Positra town, on the northern side of the island. The sand on the beach and in the sea stretches for almost 100 m.",
            "attribution": "http://www.dugiotok.hr/en/attractions-telascica"
        }, {
            "name": "Blaca cove",
            "lat": 43.292984,
            "lng": 16.497051,
            "description": "Not only is Blaca famous for its historical hermitage (cave monastery), but also for its stunning cove, which is surrounded by a dense pine forest. Deep in the same cove lays a lovely beach.",
            "attribution": "http://www.dugiotok.hr/en/attractions-telascica"
        }]
    }, {
        "name": "Hvar",
        "lat": 43.156604,
        "lng": 16.728718,
        "places": [{
            "name": "Dubovica",
            "lat": 43.145968,
            "lng": 16.534604,
            "description": "This beach is regularly found in many top lists throughout Croatian listings. Perfect and peaceful spot for those who enjoy swimming in crystal clear waters with not so many people around.",
            "attribution": "https://www.via-croatia.com/blog/the-best-beaches-in-hvar/"
        }, {
            "name": "Kordovon ",
            "lat": 43.159308,
            "lng": 16.434939,
            "description": "Going out by kayak can present you with a fantastic place to enjoy the beach and take in some sunshine.",
            "attribution": "https://www.via-croatia.com/blog/the-best-beaches-in-hvar/"
        }, {
            "name": "Grebišće",
            "lat": 43.159405,
            "lng": 16.710760,
            "description": "This beach is a favorite amongst families and it can be found near the North end of Jelsa harbor and a popular spot to watch sunsets.",
            "attribution": "https://www.via-croatia.com/blog/the-best-beaches-in-hvar/"
        }]
    }, {
        "name": "Korčula",
        "lat": 42.941492,
        "lng": 16.898200,
        "places": [{
            "name": "Proizd",
            "lat": 42.986544,
            "lng": 16.613283,
            "description": "Renowned for its crystal clear turquoise seas, Proizd is located in the Vela Luka gulf area.",
            "attribution": "https://www.croatiaweek.com/10-great-beaches-on-korcula-island/"
        }, {
            "name": "Vaja Beach",
            "lat": 42.975141,
            "lng": 17.004354,
            "description": "A small beach with white pebbles and azure sea water. It is a picturesque and romantic place, isolated and rarely visited.",
            "attribution": "https://www.korculainfo.com/vaja/"
        }, {
            "name": "Istruga Bay",
            "lat": 42.909735,
            "lng": 16.857803,
            "description": "The most special thing about Istruga bays is it's 6 metres thick sediments of 'peloid' - dark sea mud which is created by sedimentation of organic and inorganic substances brought by river and sea waters and has great therapeutic value.",
            "attribution": "http://www.ikorculainfo.com/island-korcula/korcula-beaches.htm"
        }]
    }, {
        "name": "Dubrovnik",
        "lat": 42.649964,
        "lng": 18.093695,
        "places": [{
            "name": "Copacabana Beach",
            "lat": 42.663620,
            "lng": 18.065433,
            "description": "A half-moon of pebbles and gravel set in Seka Bay, Copacabana is one of Dubrovnik's best beaches.",
            "attribution": "https://www.timeout.com/croatia/travel/the-best-dubrovnik-beaches"
        }, {
            "name": "Lapad Beach",
            "lat": 42.655120,
            "lng": 18.070047,
            "description": "A family-friendly public beach complete with showers, sunloungers and shallow waters overseen by lifeguards",
            "attribution": "https://www.timeout.com/croatia/travel/the-best-dubrovnik-beaches"
        }, {
            "name": "Bellevue Beach",
            "lat": 42.646285,
            "lng": 18.092268,
            "description": "This pebbly cove is sheltered by high cliffs, which provide a platform for daredevil cliff divers but also cast a shadow over the beach by late afternoon – a boon on a scorching day.",
            "attribution": "https://www.lonelyplanet.com/croatia/dubrovnik/activities/bellevue-beach/a/poi-act/1544881/358783"
        }]
    }]
}];

const ROOMS =
    [
        {
            "name": "bargain",
            "label": "Bargain",
            "details": "Sobe, Zimmer, Room Free signs along the road side indicate a family has a private room available. Sometimes there's a woman with a sign at the bus stop or train depot.  Don't expect meals or a private restroom, but you will save big, paying as little as $20 a night. But be warned, this venue is not regulated.",
            "booking": "You chose to choose your lodging on the fly. You can't typically book bargain accommodations in advance, but most of the time you get a decent roof over your head. Just start looking before sunset for those signs or the callers at the public transportation sites."
        },
        {
            "name": "camping",
            "label": "Camping",
            "details": "There are over 300 registered campsites in Croatia with 90% close to a beach. Glamping may be a more appropriate term for camping in Croatia as most campgrounds have permanent bungalows and tents on site. Some of the larger campsites include restaurants, sports facilities, laundries, and general store too.",
            "booking": "Glamping here you come. Be sure to book your camping experience early via <a target='_blank' href='https://www.camping.hr'> www.capming.hr</a>"
        },
        {
            "name": "hostel",
            "label": "Youth Hostels",
            "details": "Dormitory style living with strict university schedules to boutique private rooms are popping up all over Croatia in order to provide moderate lodging options to traveling university students..",
            "booking": "Book your youth hostel stay with a registered (government condoned) facility at <a href='https://www.hfhs.hr' target='_blank'>www.hfhs.hr</a>."
        },
        {
            "name": "hotels",
            "label": "Hotels & Apartments",
            "details": "Hotels and Apartments in Croatia are family run operations, the only difference being that hotels typically include breakfast and apartments include kitchenettes. The government regulates these groups by the 5 star system and require a blue sign with the star rating to be fixed to the outside of the building, with permits on premise.",
            "booking": "You opted to have a clean private, government accredited roof over you head. Use the Croatian registry to book you spot at <a href='https://www.omh.hr' target='_blank'>www.omh.hr</a>."
        },
        {
            "name": "homes",
            "label": "Private Homes",
            "details": "Need an apartment or private house with the ability to cook your own meals. And want places vetted by your peers?",
            "booking": "Many villas and apartments are listed both on <a href ='https://www.omh.hr' target='_blank'>the Croatia apartment and hotel registry</a> as well as <a href='https://www.airbnb.com' target=_blank'>abnr</a>."
        },
        {
            "name": "unique",
            "label": "Weird & Wonderful",
            "details": "Can you, would you want to sleep in a Lighthouse, Treehouse, Wine Barrel, Castle or Boat?",
            "booking": "You adventurous soul, you have opted to find the most interesting of places to rest your head. <a href='https://www.chasingthedonkey.com/weird-accommodation-in-croatia/' target='_blank'>This article</a> has a short list of how to reserve your spot from a boat motel to a lighthouse. "
        }
    ];