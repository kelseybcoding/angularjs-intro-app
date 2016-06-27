(function(){
	"use strict";

	angular.module("app").controller("stuffCtrl", function($scope)){

		$scope.reviews = [
		{
			text: "Whatever!",
			rating: 5,
			reviewer: "Bill"
		},

		{
			text: "Yo Mama",
			rating: 10
			reviewer: "Yo Pappa" 
		},

		{
			text: "Snoopy"
			rating: 2
			reviewer: "Charlie Brown"
		}];
		
		$scope.isPositive = function(review){
			review.indexOf('stupid') === -1;
		};

		$scope.addReview = function(reviewText, reviewRating, reviewReviewer){
			if (reviewText !== ''){
				var reviewObject = {
					text: "Whatever!",
					rating: 5,
					reviewer: "Bill"
				};

				$scope.reviews.push(reviewObject);
				$scope.newReviewText = '';
				$scope.newReviewRating = '';
				$scope.newReviewReviewer = '';
			}	
		}

		$scope.deleteReview = function(index){
			$scope.review.splice(index, 1);
		};

		window.scope = $scope;


	});
}());