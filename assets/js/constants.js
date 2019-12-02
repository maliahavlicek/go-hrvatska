/*
  Large data objects are located in this file to keep the core functionality files clean
*/

const TRIPS = [
    {
        "name": "wine",
        "label": "Wind & Dine",
        "details": "Enjoy the delights of regional food hot spots, local vineyards and to die for pastries.",
        "days": [
            {
                name: "Pula",
                lat: 44.8732299,
                lng: 13.8480518,
                places: [
                    {
                        name: "Church of St. Euphemia, Rovinj",
                        lat: 45.0832203,
                        lng: 13.628919,
                        description : 'The Church of St. Euphemia, often known as the Basilica of St. Euphemia (although it is not formally a basilica minor), is a Baroque church located in the heart of the historic part of Rovinj, Croatia, dominating the town.',
                        attribution : 'https://en.wikipedia.org/wiki/Church_of_St._Euphemia,_Rovinj'
                    }, {
                        name: "Vina Radovan",
                        lat: 45.2757258,
                        lng: 13.6899502,
                        description: 'Radovan Winery started in 1994 on a 1.5 hectare vineyard. We began by renewing and planting new Malvasia vines and soon other varieties were introduced. In 1996, we planted our first cabernet sauvignon grape vines (vineyards).',
                        attribution: 'http://vinaradovan.com/who-we-are/',
                    }, {
                        name: "Konoba Dolina",
                        lat: 45.3753656,
                        lng: 13.8648394,
                        description: 'The tavern Dolina, in the small Istrian village Gradinje, is an ideal place to enjoy a home-cooked Istrian cuisine. You can enjoy the truffles that grow in the surrounding forests prepared with meat, eggs or homemade pasta, such as fuzi, gnocchi and ravioli.',
                        attribution: 'https://www.konobadolina.hr/en/'
                    }
                ]
            },
            {
                name: "Rijeka",
                lat: 45.3330489,
                lng: 14.4202891,
                places: [
                    {
                        name: "Bevanda Restaurant",
                        lat: 45.3395272,
                        lng: 14.2952159,
                        description: 'Bevanda, a renowned restaurant, uses only fresh ingredients from the continent ' +
                            'and the sea to create classic, but versatile dishes with a touch of modernity.',
                        attribution: 'http://www.bevanda.hr/en/restoran/'
                    },
                    {
                        name: "Restaurant Jist",
                        lat: 45.3475939,
                        lng:14.3917946,
                        description: 'J-I-S-T is a fine–dining restaurant located in Rijeka, Croatia that mainly serves Boškarin meat, a strain of long-horned cattle from the Istrian peninsula.',
                        attribution: 'https://zambellidesign.com/portfolio/jist/'
                    },
                    {
                        name: "Castillo de Trast",
                        lat:45.3326798,
                        lng: 14.4553218,
                        description: "The Castle of Trsat, on the outskirts of Rijeka ,plays a triple role: it is a historical monument, a place of recreation and a privileged point of observation to the Gulf of Kvarner. Formerly there stood a Roman fortress, today its tourist destination with summer banquets being offered in the main courtyard.",
                        attribution: "https://www.rutasymapas.com/castillo-de-trast/"
                    }
                ]
            },{
                name: "Senj",
                lat: 44.9912466,
                lng: 14.9026532,
                places:[
                    {
                        name: "Restaurant Uskok",
                        lat: 44.9941219,
                        lng: 14.8915563,
                        description: "Local family restaurant with product from local farms. World champion cheese and honey in combination is in our menu. Friendly and welcoming staff, reasonable prices and excellent cuisine.",
                        attribution: "https://www.tripadvisor.com/ShowUserReviews-g776611-d14079535-r626549063-Restaurant_Uskok-Senj_Lika_Senj_County.html"
                    },{
                        name: "Nehaj Fortress",
                        lat: 45.0201921,
                        lng: 15.069873,
                        description: "The fortress represents a unique and exceptional example of fortification architecture from the transition from the middle ages to the Renaissance. The fortress represents, as an important strategic building for the defence against the Turks.",
                        attribution: "http://croatia.hr/en-GB/nehaj-fortress"
                    }, {
                        name: "Tavern Lavlji Dvor",
                        lat: 44.9903168,
                        lng: 14.8980225,
                        description: "A 16th century garden in the center of the city has been transformed into a restaurant that offers homemade food such as scallops, grilled fish and meat, various types of soup, pasta and risotto.",
                        attribution: "http://visitsenj.com/en/tourist-offer/tavern-buffet-bistro/tavern-lavlji-dvor/"
                    }
                ]
            },{
                name: "Novalja",
                lat: 44.5526593,
                lng: 14.8848009,
                places: [
                    {
                        name: "Sirana Glijora",
                        lat: 44.5002958,
                        lng: 14.955202,
                        description: "The Gligora Dairy is not just the most awarded dairies in Croatia, but one of the most awarded in the world for it's hard sheep cheese.",
                        attribution: "https://gligora.com/dairy-cheese-production/"
                    }, {
                        name: "Aroma Bakery",
                        lat: 44.4461761,
                        lng: 15.0367902,
                        description: "Fantastic croissants with chocolate filling, plus many other pastries to choose from.",
                        attribution: "https://wego.here.com/croatia/zadar/restaurant/krostula-bakery-pastry--191aabd1-ba8b435f9b940bc7bcb27dc9b243e291?x=ep&map=44.11491,15.22771,15,normal"
                    },{
                        name: "Trapula Wine & Cheese Bar",
                        lat: 44.4438073,
                        lng: 15.0544936,
                        description: "This fine bar on the main square has an excellent list of local wines (by the glass or bottle) and a range of tapas; order a board with local Pag cheese and prosciutto. Bliss!",
                        attribution: "https://www.lonelyplanet.com/croatia/pag-town/restaurants/trapula-wine-cheese-bar/a/poi-eat/1598980/1326084"
                    }
                ]
            },{
                name: "Zadar",
                lat: 44.118044,
                lng: 15.2239898,
                places: [
                    {
                        name: "The Greeting to the Sun",
                        lat: 44.1176075,
                        lng: 15.2176507,
                        description: "Monument to the Sun or The Greeting to the Sun (Croatian: Pozdrav suncu) is a monument in Zadar, Croatia dedicated to the Sun.",
                        attribution: "https://en.wikipedia.org/wiki/Monument_to_the_Sun"
                    },{
                        name: "Restaurant Kastel",
                        lat: 44.1179503,
                        lng: 15.2215734,
                        description: "The excellent fusion cuisine served here is Dalmatian in style, with French, Italian and even Peruvian influences. Don't be surprised to find ceviche on the menu - the chef was born in Peru!",
                        attribution: "https://www.viamichelin.com/web/Restaurant/Zadar-23000-Kastel-131wwlca3"
                    },{
                        name: "Degarra Winery",
                        lat: 44.1555529,
                        lng: 15.2533855,
                        description: "This young winery, founded in 2012, has 1.8 hectares of vineyards in property and 3.6 hectares in concession. At the best wine-growing location in Ravni kotar, the varieties of Cabernet, Merlot, Syrah, Plavin, Pošip, and Maraština are cultivated, from which quality wines – Pošip, Bonterra, Rose, Bommary, Primo and Perla are produced.",
                        attribution: "https://www.thewineandmore.com/stories/degarra-winery/"
                    }
                ]

            },{
                name: "Lika Region",
                lat: 44.8798702,
                lng: 15.6090371,
                places: [
                    {
                        name: "Lička Kuća",
                        lat: 44.865748,
                        lng: 15.3003881,
                        description: "The restaurant menu brings together all the delicacies of the Lika region, made from traditional recipes and from locally sourced products. Prosciutto, cheese, lamb baked under the iron bell, grilled dishes, roasted potato halves, trout, fermented milk, Lika fritters, Lika cheese, apple or plum strudels, are just a few of the specialities made at this famous restaurant.",
                        attribution: "https://np-plitvicka-jezera.hr/en/plan-your-visit/hospitality-facilities/national-restaurant-licka-kuca/"
                    }, {
                        name: "Plitvice Lakes National Park",
                        lat: 45.020372,
                        lng: 15.0682249,
                        description: "This wonderful natural phenomenon consists of 16 interconnected lakes and over 90 waterfalls of different size.",
                        attribution: "https://www.frankaboutcroatia.com/plitvice-lakes/"
                    }, {
                        name: "Beekeeping Brozovic",
                        lat: 45.229529,
                        lng: 15.3460585,
                        description: "Award winning honey and many beeswax and honey products.",
                        attribution: "https://www.facebook.com/pcelarstvo.brozovic"
                    }
                ]

            },{
                name: "Zagreb",
                lat: 45.8164017,
                lng: 15.9714403,
                places: [
                    {
                        name: "Dubovac Castle",
                        lat: 45.495117,
                        lng: 15.5257941,
                        description: "This 13th century fortress was the first major settlement building in the Karlovac area, existing at the time as one of a series of defensive fortresses defending this area of strategic importance",
                        attribution: "https://www.timeout.com/croatia/attractions/dubovac-castle"
                    },{
                        name: "Museum of Broken Relationships",
                        lat: 45.814925,
                        lng: 15.9712403,
                        description: "An unavoidable sight in your exploration of Zagreb and a unique emotional journey around the world through hundreds of break-ups.",
                        attribution: "https://brokenships.com/visit/museum-details"
                    },{
                        name: "Bistro Apetit by Marin Rendić, Zagreb",
                        lat: 45.831228,
                        lng: 15.9724202,
                        description: "A superb and modern blend of food, drink and hedonism.",
                        attribution: "https://www.bistroapetit.com/"
                    }
                ]

            }
        ]
    },
    {
        "name": "castles",
        "label": "Castles & Culture",
        "details": "Tour castles, cathedrals, museums, fortresses, roman ruins and other cultural sites.",
        "days": [
            {
                name: "Osijek",
                lat: 45.5464305,
                lng: 18.6186473,
                places: [
                    {
                        name: "Place of Remembrance - Vukovar Hospital",
                        lat: 45.3578582,
                        lng: 18.9926594,
                        description: "The place of remembrance – the Vukovar hospital 1991 is a tragic truth ... In mass grave at Ovčara, the sacred place in Croatia, 261 persons lost their lives.",
                        attribution: "http://www.visitvukovar-srijem.com/en/sights-and-more/cultural-and-historical-tourism/vukovar-nocturne/"
                    }, {
                        name: "Church of St Peter & Paul",
                        lat: 45.5608331,
                        lng: 18.6759909,
                        description: "This red-brick neo-Gothic church's 90m-high tower is surpassed in height only by the cathedral in Zagreb and dominates downtown Osijek. Built in the 1890s, the interior has 40 elaborate stained-glass windows in Viennese style and vividly coloured frescos by Croatian painter Mirko Rački.",
                        attribution: "https://www.lonelyplanet.com/croatia/osijek/attractions/church-of-st-peter-paul/a/poi-sig/1047806/1002809"
                    }, {
                        name: "Vučedol Culture Museum",
                        lat: 45.5554131,
                        lng: 18.6214556,
                        description: "See artifacts from the Vučedol culture which flourished between 3000 and 2200 BC which flourished along the right bank of the Danube river.",
                        attribution: "https://en.wikipedia.org/wiki/Vu%C4%8Dedol_Culture_Museum"
                    }, {
                        name: "King Peter Krešimir IV Park",
                        lat: 45.5554131,
                        lng: 18.6214556,
                        description: "Created in 1935, with help from France, King Peter Krešimir IV park is all the more attractive because its trees were specifically chosen to be beautiful whatever the season.",
                        attribution: "https://travelguide.michelin.com/europe/croatia/osijek-baranja-county/osijek/king-peter-kresimir-iv-park"
                    }
                ]
            },{
                name: "Slovania Region",
                lat: 45.4811677,
                lng: 17.981144,
                places: [
                    {
                        name: "Castle Pejačević - Nasice",
                        lat: 45.5548595,
                        lng: 18.4140927,
                        description: "This castle built in 1811 on the edge of the park and the crest of a hill, is classical in style with a few late Baroque details.",
                        attribution: "https://travelguide.michelin.com/europe/croatia/osijek-baranja-county/nasice/pejacevic-castle"
                    }, {
                        name: "Papuk Nature Park",
                        lat: 45.5216295,
                        lng: 17.6854224,
                        description: "A great number of medieval fortifications, most of them originating from the 13th century, witness about the importance of the area of Papuk, especially during the time of the invasion of the Turks.",
                        attribution: "https://pp-papuk.hr/en/kulturno-povijesna-bastina/srednji-vijek/"
                    },{
                        name: "Požega Cathedral",
                        lat: 45.332597,
                        lng: 17.678054,
                        description: "Saint Teresa of Ávila Cathedral is a cathedral in Požega and it is a beautiful example of Baroque architecture. ",
                        attribution: "https://croatiareviews.com/culture-and-heritage/pozega-cathedral"
                    }

                ]
            }
        ]
    },
    {
        "name": "nature",
        "label": "Nature Nut",
        "details": "Spend the majority of your time by the sea catching the rays and enjoying the sea air.",
        "days" : [
            {
                name: "Papuk Nature Park",
                lat: 45.5216295,
                lng: 17.6854224,
                places: [
                    {
                        name: "Ružica Grad",
                        lat: 45.511156,
                        lng: 17.858181,
                        description: "A great number of medieval fortifications, most of them originating from the 13th century, witness about the importance of the area of Papuk, especially during the time of the invasion of the Turks.",
                        attribution: "https://pp-papuk.hr/en/kulturno-povijesna-bastina/srednji-vijek/"
                    }, {
                        name: "Skakavac Waterfall",
                        lat: 45.523237,
                        lng: 17.684505,
                        description:"One of the most beautiful waterfalls in Papuk Nature Park.",
                        attribution: "https://www.chasingthedonkey.com/papuk-nature-park-slavonia-croatia-unesco-geopark/"
                    }, {
                        name: "Jankovac Forest Park",
                        lat: 45.560265,
                        lng: 17.500889,
                        description: "There are ten different natural forest communities in Papuk Nature Park, woods covering about 95% of the entire park. Its lower areas are predominantly hornbeam and oak forest, while the higher altitudes are where you’ll find the beech forests.",
                        attribution: "https://www.chasingthedonkey.com/papuk-nature-park-slavonia-croatia-unesco-geopark/"
                    }
                ]
            }, {
                name: "Plitvice Lakes National Park",
                lat: 45.020372,
                lng: 15.0682249,
                places:[
                    {
                        name: "Veliki Slap",
                        lat:44.902543,
                        lng: 15.607900,
                        description: "The highest waterfall in the Plitvice National Park is the Large (Great) Waterfall (aka Veliki slap in Croatian) – 78 meters high situated at the very end of the Lower Lakes",
                        attribution: "https://www.plitvice-lakes.info/waterfalls/veliki-slap-waterfall/"
                    }, {
                        name: "Barac Caves",
                        lat:44.983817,
                        lng: 15.722790,
                        description: "Located in a village of Nova Krslja, just few kilometers from the lakes, the Barac caves were first open to visitors back in 1893, but soon forgotten following the WWII.",
                        attribution: "https://www.frankaboutcroatia.com/plitvice-lakes/"
                    }, {
                        name: "Velika Kaskada ",
                        lat: 44.899876,
                        lng: 15.611025,
                        description: "Take a walk along and over a series of Lovely cascades located on the border of Gavanovac and Kaluđerovac lake.",
                        attribution: "https://www.plitvice-lakes.info/cascades/velike-kaskade/"
                    }
                ]
            }
        ]
    },
    {
        "name": "beaches",
        "label": "Beach Life",
        "details": "Caves, waterfalls, crazy cliffs, stunning mountain views and the Kornati archipelago await.",
        days: [
            {
                name: "Kornati",
                lat: 43.821580,
                lng: 15.319932,
                places: [
                    {
                        name: "Fortress of Tureta",
                        lat: 43.829340,
                        lng: 15.262701,
                        description: "The Fortress of Tureta is the most significant fortress in Kornati National Park, dating all the way back to the Byzantine period",
                        attribution: "http://www.tzo-murter.hr/en/explore/cultural-heritage/the-tureta-fortress/"
                    },{
                        name: "Sakarun",
                        lat: 44.133719,
                        lng: 14.871812,
                        description: "One of Croatia's best nightlife beaches where the party doesn't stop until the morning. Well-equipped with bars and other facilities.",
                        attribution: "http://www.dugiotok.hr/en/attractions-telascica"
                    }, {
                        name: "Telašćica",
                        lat: 43.891586,
                        lng: 15.168010,
                        description: "The contrasts of nature is very expressed here with peaceful bays and rugged cliffs, forests of Aleppo pine on one side and Holm oak on the other side, the area of cultivated fields of vineyards and olive-trees, as well as the area of rocky meadows.",
                        attribution: "http://www.dugiotok.hr/en/attractions-telascica"
                    }
                ]
            }
        ]
    }
];

const ROOMS =
[
    {
        "name" : "bargain",
        "label": "Bargain",
        "details": "Sobe, Zimmer, Room Free signs along the road side indicate a family has a private room available. Sometimes there's a woman with a sign at the bus stop or train depot.  Don't expect meals or a private restroom, but you will save big, paying as little as $20 a night. But be warned, this venue is not regulated.",
        "booking": "You chose to choose your lodging on the fly. You can't typically book bargain accommodations in advance, but most of the time you get a decent roof over your head. Just start looking before sunset for those signs or the callers at the public transportation sites."
    },
    {
        "name" : "camping",
        "label": "Camping",
        "details": "There are over 300 registered campsites in Croatia with 90% close to a beach. Glamping may be a more appropriate term for camping in Croatia as most campgrounds have permanent bungalows and tents on site. Some of the larger campsites include restaurants, sports facilities, laundries, and general store too.",
        "booking": "Glamping here you come. Be sure to book your camping experience early via <a target='_blank' href='https://www.camping.hr'> www.capming.hr</a>"
    },
    {
        "name": "hostel",
        "label":"Youth Hostels",
        "details": "Dormitory style living with strict university schedules to boutique private rooms are popping up all over Croatia in order to provide moderate lodging options to traveling university students..",
        "booking":"Book your youth hostel stay with a registered (government condoned) facility at <a href='https://www.hfhs.hr' target='_blank'>www.hfhs.hr</a>."
    },
    {
        "name" : "hotels",
        "label": "Hotels & Apartments",
        "details": "Hotels and Apartments in Croatia are family run operations, the only difference being that hotels typically include breakfast and apartments include kitchenettes. The government regulates these groups by the 5 star system and require a blue sign with the star rating to be fixed to the outside of the building, with permits on premise.",
        "booking": "You opted to have a clean private, government accredited roof over you head. Use the Croatian registry to book you spot at <a href='https://www.omh.hr' target='_blank'>www.omh.hr</a>."
    },
    {
        "name" : "homes",
        "label": "Private Homes",
        "details": "Need an apartment or private house with the ability to cook your own meals. And want places vetted by your peers?",
        "booking" : "Many villas and apartments are listed both on <a href ='https://www.omh.hr' target='_blank'>the Croatia apartment and hotel registry</a> as well as <a href='https://www.airbnb.com' target=_blank'>abnr</a>."
    },
    {
        "name" : "unique",
        "label": "Weird & Wonderful",
        "details": "Can you, would you want to sleep in a Lighthouse, Treehouse, Wine Barrel, Castle or Boat?",
        "booking": "You adventurous soul, you have opted to find the most interesting of places to rest your head. <a href='https://www.chasingthedonkey.com/weird-accommodation-in-croatia/' target='_blank'>This article</a> has a short list of how to reserve your spot from a boat motel to a lighthouse. "
    }
];