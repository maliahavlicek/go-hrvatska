function sendMail(contactForm){

    try {
        let itinerary = '<div style="background: #254c5c; max-width: 900px; color: #FFF; font-size: 18px; margin: 0px; padding: 0; font-family:\' Quicksand\', arial; font-weight: normal;"><h1 style="font-size: 3.6rem; margin: 10px 20px;">Go Hrvatska!</h1>';
        itinerary += '<h2 style="font-size: 2.6rem; margin: 20px 20px 30px;">Here\'s your ' + myTrip.label + ' itinerary:</h2>';
        itinerary += '<div id="itinerary-details">';

        $('#itinerary-details .d-flex.flex-row').each( function (index, day) {
            itinerary += '<div style="flex-direction: row!important; display: flex!important; margin:10px; padding: 0; border-top: 1px solid #fff;">';

            let city = day.children[0];
            if (city) {
                city = city.innerHTML;
                city = city.replace('<h3>', '<h3 style="font-size: 2.2rem; margin: 0px;">');
                city = city.replace('class="disclaimer"', 'style="font-size: .6rem;"');
                city =  city.replace('<a href=', '<a style="font-size: .6rem; color: #FFF!important;" href=');
                city = city.replace('width="100%"', 'width="300px"');
                itinerary += '<div style="flex: 50%; max-width: 300px; margin: 10px;">' + city +'</div>';
            }
            let details = day.children[1];
            if (details) {
                itinerary += '<div style="flex: 50%; max-width: 300px; margin: 40px 20px 10px 0;">' + details.innerHTML.replace('<h3>','<h3 style="font-size: 1.8rem; margin: 10px;">') + '</div>';
            }
            itinerary += '</div>';
        });
        itinerary += '</div>';
        let lodging = $('.lodging');
        if (lodging){
            let room = '<div style = "margin: 0; padding: 9px 25px 25px; background: rgb(57, 147, 156); color: #EBEDEE;">'
            lodging = lodging[0].innerHTML;
            lodging.replace('<a ', '<a style="color: #FFF!important;" ');
            itinerary += room + lodging + '</div>';
        }
        itinerary += '</div>';

        console.log("in send email");
        console.log("user_email: " + contactForm.emailaddress.value);
        console.log("trip_type: ") + myTrip.label;
        console.log("itinerary_details: " + itinerary);

        emailjs.send("malia_havlicek_gmail_com", "codeinstitue", {
            "user_name": contactForm.name.value,
            "user_email": contactForm.emailaddress.value,
            "trip_type": myTrip.label,
            "itinerary_details": itinerary
        })
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        return false;
    }
    catch(emailError){
        console.log(emailError.message);
    }
}
