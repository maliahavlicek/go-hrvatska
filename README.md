## Go Hrvatska! - Milestone Project 2
This website allows users to pick one of 4 prescribed tours of Croatia for their next holiday/vacation.  

**Main View:** When the user comes to the site, they see a banner image that rotates through stunning pictures that highlight Croatia's wonders. 
There is a call to action button to start choosing your trip below the banner.

**Picking Adventure View:** Upon clicking the Go Hrvatska button, the user is presented a screen where they choose from 4 trips.
Each tour has an image button across it which when clicked reveals a short description of the tour and a go Hrvatska button.

**Pick Accommodation View:** following the pick adventure view, the user is shown options regarding 6 different lodging options. Clicking the button label takes the user to the next view.
There is also a learn more button that reveals a popover that provides greater detail about each lodging choice.

**Itinerary View:** After selecting a tour and accommodations, the user is presented a view that summarizes a 7 day trip for their adventure.
A google map with the cities that are being visited is presented numbering day 1-7 with a linked list along the left of the map in desktop view. Below the map is a daily agenda
which has a large image retrived via google's Places API. 3-4 suggested places to visit with a small map for the day is shown. These small maps have infowindows on the map pins to
provide more details about each suggested place to visit.  Below the agenda is a button to email the itinerary. 

There is a start over button as well for views past the Main view.

## Author
Malia Havlicek

## UX 
The Go Hrvatska! Project was envisioned as a mobile website and then expanded to desktop. It is a single page application that helps
users determine an itinerary of places to see and visit while on Holiday in Croatia.

### Mockups
Note: The wireframes are not entirely accurate, they only give a rough estimate on how the website will look on a mobile device.
[Figma.com](https://www.figma.com/) was used to create the following mockups:
- [Home Page](https://www.figma.com/file/741n0nfS9y7b1T2ICOAqDn/Go-Hrvatska?node-id=1%3A2)\
![homepage mockup](assets/images/mockups/Go-hrvatska-homepage.png) 
- [Choose Adventure](https://www.figma.com/file/741n0nfS9y7b1T2ICOAqDn/Go-Hrvatska?node-id=3%3A2)\
![choose adventure mockup](assets/images/mockups/Go-hrvatska-choose-adventure.png) 
- [Itinerary](https://www.figma.com/file/741n0nfS9y7b1T2ICOAqDn/Go-Hrvatska?node-id=17%3A41)\
![itinerary mockup](assets/images/mockups/Go-hrvatska-itinerary.png) 
### User Stories
- **Hero Banner**: Eye Catching Landing Page with Enticing Imagery swapping out. Note: Only one image is required for initial banner. The subsequent images are injected via jquery.
- **Choose Adventure** html is built by looping through TRIPS json object. Fancy clip path CSS to do diagonal image on buttons. Customization of Bootstrap card and buttons.
- **Choose Accommodation** HTML is build by looping through ROOMS json object. Customization of Bootstap button and popover.
- **Itinerary** Uses google maps and google places API to highlight a 7 day trip based on User's Adventure Choice. HTML is built by looping through TRIPS json. Email.js is also provided to 
allow user to email the proposed agenda to themselves or others.

## Features
qu

### Features Left to Implement
- use google places API to suggest matches on lodging choice via [nearby](https://developers.google.com/maps/documentation/javascript/places?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_315916118099-ADGP_Hybrid+%7C+AW+SEM+%7C+SKWS+~+Nearby+Search-KWID_43700039136946351-kwd-582432942915-userloc_9028759&utm_term=KW_%2Bnearby%20%2Bsearch-ST_%2Bnearby+%2Bsearch&gclid=EAIaIQobChMI8IKMxKaW5gIVj8DACh1GrQ6WEAAYASAAEgLKjvD_BwE#place_search_requests)
- migrate constants into database to reduce duplicate destinations

## Technologies Used
- [CSS3](https://www.w3schools.com/w3css/default.asp) The project uses **CSS** to define DOM appearance. 
- [HTML5](https://www.w3schools.com/html/default.asp) The project uses **HTML** to define DOM elements.
- [Bootstrap 4.0](https://getbootstrap.com/docs/4.0/getting-started/introduction/) Rather than re-invent many things, I chose to customize the look and feel of bootstrap 4.0 
- [jQuery3.3.1](https://api.jquery.com/) Used jQuery 3.3.1.slim.min.js as recommended by Bootstrap

## Testing
Constant integration testing was preformed to ensure no console/javascript. Beyond that, validation testing, cross browser testing and accessibility testing were manually performed. 

### Validation Testing
Used the following validation websites to test the code:
- [CSS Validator](https://jigsaw.w3.org/css-validator/) Note, any error associated with root: color variables were ignored.
- [HTML Validator](https://validator.w3.org/)

### Cross Browser and Cross Device Testing
For device testing, I would ideally have access to browser stack and derive a list of iOs devices and versions to test with from 
[David Smith's site](https://david-smith.org/iosversionstats/). Likewise, I would make use of stats from [android](https://developer.android.com/about/dashboards) 
to handpick android devices and versions to test with.  Then I'd test top browsers on PC's and Macs using the statistics from [w3Counter](https://www.w3counter.com/globalstats.php). 
Since I don't have a handful of devices or a proper testing tool suite at my fingertips, I'm going to rely on Chrome Dev tools and my windows PC.  

Below are the scenarios I picked to test my website:
* Windows 10, Edge
* Windows 10, Chrome
* Chrome Emulator iphone 6
* Chrome Emulator iPadAir
* Chrome Emulator Pixel 2

### Accessibility Testing
I used the AXE chrome plugin to test the accessibility of the website. https://www.deque.com/axe/ 

### automated testing
Jasmine was considered as an automated testing option, but this site is heavy in presentation
and there are no standalone utility functions that Jasmine could help validate their continual functionality.

### Testing Results
During manual unit testing, it was noticed that the imagery retrieved from google's places API was hitting
the Query Limit. To overcome this issue, the findImage call within maps.js BuildMapContent function was wrapped in a setTimout.

## Deployment
Note: The coding for the project was done in PyCharm in a local environment with default configurations as it only requires javascript, CSS and HTML files. This website is 
hosted using GitHub pages, deployed directly from the master branch.

1. Logged into GitHub and created a new repository called go-hrvatska with a description of Milestone Project 2.
2. Cloned the repository to my local machine via PyCharm by clicking the VCS menu, then the git menu, then clone option and setting the url to https://github.com/maliahavlicek/go-hrvatska.git.
(could have opened the terminal and typed <strong>git clone https://github.com/maliahavlicek/go-hrvatska.git</strong>)
3. Created files and used the VCS menu to commit and push files as changes were made.
4. Once I was ready to deploy my solution, I logged into gitHub and navigated to the go-hrvatska repository.
5. Click on the settings icon and scroll down to the GitHub Pages section.
6. Select master-branch as the source.
7. Wait up to 10 minutes, then check your-username.github.io. Your website should be there!

## Credits

### Content
To gather rich imagery and interesting places to visit, I made use of the following websites:
- [Croatia.hr](http://croatia.hr/en-GB) - A huge variety of fantastic imagery and numerous places to visit were gleaned from reading this site. Hvala!
- [Chasing The Donkey](https://www.chasingthedonkey.com/croatia-travel-blog/) - Is a blog site that has many interesting facts and things to do while visiting Croatia that only insiders know about including quirky museums, great local festivals and everything about The Game of Thrones filming. I used bits of their various lists to customize the itineraries.
- [Croatia Week](https://www.croatiaweek.com) - This site has articles with lists of places of interest that I used when customizing the prescribed trips and was used to help fact check which sites might be of most interest to tourists.
- Other sites used for specific places to see are attributed in the map pin info windows.
### Media
Hero imagery seen in this project was gleaned from the sites listed below. Ordinal imagery has been renamed and resized.
- [Croatia.hr](http://croatia.hr/en-GB) 
- [ChasingTheDonkey](https://www.chasingthedonkey.com/croatia-travel-blog/) 
- [CroatiaWeek](https://www.croatiaweek.com)
- Imagery gleaned from google's Places API are attributed in line if such information is provided in the API response.

### Acknowledgements
- [w3schools](https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr) - The main page slideshow of images found its beginnings from w3school's example.
- [tutorialzine](https://tutorialzine.com/2017/03/css-triangles-without-hacks) - The diagonal cut of images on the trip selection page started from this tutorial on how to make CSS triangles.
- [clippy](https://bennettfeely.com/clippy/) - This tool makes it easy to determine clip paths without getting lost in the inverse y coordinate bliss of CSS.
- [google places search](https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/place-search)- Documentation helped set up request for places search to get a google place_id
- [google places details](https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/place-details)- Provided a good example of how use a place_id to retrieve Places Details response to get imagery for itinerary page.
- [javascript constants](https://www.linkedin.com/in/syedmhassan/) - Moosa Hassan suggested to move large json constants out of functional javascript files into constants.js
