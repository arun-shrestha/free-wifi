var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};


var doAddReview = function(req, res, location) {
    if (!location) {
        sendJsonResponse(res, 404, {
            "message": "locationid not found"
        });
    } else {
        location.reviews.push({
            author: req.body.author,
            rating: req.body.rating,
            reviewText: req.body.reviewText
        });
        location.save(function(err, location) {
            var thisReview;
            if (err) {
                sendJsonResponse(res, 400, err);
            } else {
                updateAverageRating(location._id);
                thisReview = location.reviews[location.reviews.length - 1];
                sendJsonResponse(res, 201, thisReview);
            }
        });
    }
};


var doAddReview = function(req, res, location) {
    if (!location) {
        sendJsonResponse(res, 404, {
            "message": "locationid not found"
        });
    } else {
        location.reviews.push({
            author: req.body.author,
            rating: req.body.rating,
            reviewText: req.body.reviewText
        });
        location.save(function(err, location) {
            var thisReview;
            if (err) {
                sendJsonResponse(res, 400, err);
            } else {
                updateAverageRating(location._id);
                thisReview = location.reviews[location.reviews.length - 1];
                sendJsonResponse(res, 201, thisReview);
            }
        });
    }
};


module.exports.reviewsCreate = function(req, res) {
    var locationid = req.params.locationid;
    if (locationid) {
        Loc
            .findById(locationid)
            .select('reviews')
            .exec(
                function(err, location) {
                    if (err) {
                        sendJsonResponse(res, 400, err);
                    } else {
                        doAddReview(req, res, location);
                    }
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, locationid required"
        });
    }
};