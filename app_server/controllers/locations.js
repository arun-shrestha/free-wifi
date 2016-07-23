/* GET 'home' page */
module.exports.homelist = function(req, res){
    res.render('locations-list', { 
        title: 'Free-Wifi - find a place to work with wifi',
        pageHeader: {
            title: 'Free-Wifi',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Free-Wifi helps you find placesto work when out and about. Perhaps with coffee, cake or a pint? Let Free-Wifi help you find the place you're looking for.",
        locations: [{
            name: 'Starcups',
            address: '7 Kelly Street, Ultimo, 2007',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
		},{
            name: 'James Cafe',
            address: '7 Pitt Street, Sydney, 2000',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
		},{
            name: 'Three Wise Monkeys',
            address: '125 George Street, Sydney, 2000',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
		}]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res){
    res.render('location-info', { 
        title: 'Starcups',
        pageHeader: {title: 'Starcups'}, 
		sidebar: {
			context: 'is on Free-Wifi because it has accessible wifi and space to sit down with your laptop and get some work done.',
			callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
		},
		location: {
			name: 'Starcups',
			address: '7 Kelly Street, Ultimo, 2007',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			coords: {lat: -33.881742, lng: 151.195569},
			openingTimes: [{
				days: 'Monday - Friday',
				opening: '7:00am',
				closing: '7:00pm',
				closed: false
			},{
				days: 'Saturday',
				opening: '8:00am',
				closing: '5:00pm',
				closed: false
			},{
				days: 'Sunday',
				closed: true
			}],
			reviews: [{
				author: 'Arun Shrestha',
				rating: 5,
				timestamp: '16 July 2016',
				reviewText: 'What a great place. I can\'t say enough good things about it.'
			},{
				author: 'Some Guy',
				rating: 3,
				timestamp: '16 June 2016',
				reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
			}]
		}
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
    res.render('location-review-form', {
		title: 'Review Starcups on Free-Wifi',
			pageHeader: { title: 'Review Starcups' } 
		});
};