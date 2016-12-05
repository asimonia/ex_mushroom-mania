"use strict";

app.controller("mushroomCtrl", function($scope, $location, ItemStorage) {

	$scope.reload = function () {
		$location.reload();
	};

	ItemStorage.getShrooms()
	.then(function(data) {

		let Shrooms = data.map(function(mushroom) {
			let shroomObj = {};
			shroomObj.name = Object.keys(mushroom)[0];
			shroomObj.edible = mushroom[Object.keys(mushroom)[0]].edible;
			shroomObj.description = mushroom[Object.keys(mushroom)[0]].description;
			return shroomObj;
		});

		$scope.mushrooms = Shrooms;
		$scope.$apply();
	});
});