function sendMail(contactForm) {

    try {
        //clear out error message
        let error = $('.email-error');
        error.empty();
        // build wrapper div with inline styles to match what user has seen on itinerary view
        let itinerary = '<div style="background: #254c5c; max-width: 900px; color: #FFF; font-size: 18px; margin: 0px; padding: 0; font-family:\' Quicksand\', arial; font-weight: normal;"><h1 style="font-size: 3.6rem; margin: 10px 20px;">Go Hrvatska!</h1>';
        itinerary += '<h2 style="font-size: 2.6rem; margin: 20px 20px 30px;">Here\'s your ' + myTrip.label + ' itinerary:</h2>';
        itinerary += '<div id="itinerary-details">';

        // grab the itinerary details and modify html for inline styles, and removal of day map
        $('#itinerary-details .day').each(function (index, day) {
            itinerary += '<div style="flex-direction: row!important; display: flex!important; margin:10px; padding: 0; border-top: 1px solid #fff;">';
            // first child is city
            let city = day.children[0];
            if (city) {
                city = city.innerHTML;
                city = city.replace(/<h3>/g, '<h3 style="font-size: 2.2rem; margin: 0px;">');
                city = city.replace(/class="disclaimer"/g, 'style="font-size: 0.8rem;"');
                city = city.replace(/<a href=/g, '<a style="font-size: 0.8rem; color: #FFF!important; text-decoration: underline;" href=');
                city = city.replace(/width="100%"/g, 'width="300px"');
                itinerary += '<div style="flex: 50%; max-width: 300px; margin: 10px;">' + city + '</div>';
            }
            // second child is places to see list
            let details = day.children[1].innerHTML;
            details = details.replace(/<h3>/g, '<h3 style="font-size: 1.8rem; margin: 10px;">');
            details = details.replace(/<ol /g, '<ul');
            details = details.replace(/ol>/g, 'ul>');
            if (details) {
                itinerary += '<div style="flex: 50%; max-width: 300px; margin: 40px 20px 10px 0;">' + details + '</div>';
            }
            itinerary += '</div>';
        });
        itinerary += '</div>';
        // build accommodations block for email to match styles of itinerary page
        let lodging = $('.lodging');
        if (lodging) {
            let room = '<div style="margin: 0; padding: 9px 25px 25px; background: rgb(57, 147, 156); color: #EBEDEE;">';
            lodging = lodging[0].innerHTML;
            lodging = lodging.replace(/<a href=/g, "<a style='color: #FFF!important; text-decoration: underline;' href=");
            itinerary += room + lodging + '</div>';
        }
        itinerary += '</div>';

        //wrap consoles in debug check so we don't deploy with any logging
        if (debug) {
            console.log("in send email");
            console.log("user_email: " + contactForm.emailaddress.value);
            console.log("trip_type: " + myTrip.label);
            console.log("itinerary_details: " + itinerary);
        }

        // emailJS API call sending in fields as built in template
        var data = {
            'service_id': 'malia_havlicek_gmail_com',
            'template_id': 'codeinstitue',
            'user_id': 'user_QxqbTJ64EJafBGLHni6tU',
            'template_params': {
                'user_name': contactForm.name.value,
                'user_email': contactForm.emailaddress.value,
                'trip_type': myTrip.label,
                'itinerary_details': itinerary
            }
        };
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            $('.email-error').html("You should be receiving an email at " + contactForm.emailaddress.value + " shortly.");
        }).fail(function (error) {
            $('.email-error').html("Sorry, there was an issue sending you an email. Please try again." + JSON.stringify(error));
        });
        return false;
    } catch (emailError) {
        // overall error message/catch in event emailJS changes API without me knowing it
        $('.email-error').html("Sorry, there was an issue sending you an email. Please try again.");
        return false;
    }
}
