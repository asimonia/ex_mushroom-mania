"use strict";

// Provider is the umbrella term
// Factory export an object
// Service export is an object you instantiate
// Values, Constants
// Controller is the domain, business logic

app.factory("ItemStorage", ($http) => {

	let getShrooms = () => {
		return new Promise (function(resolve, reject) {
			$http.get('https://mushrooms-3b28f.firebaseio.com/mushrooms.json')
			.success(function(mushroomObj) {
				resolve(mushroomObj);
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

	return {getShrooms};
});