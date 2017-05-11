(function(){
	'use strict';

	angular
		.module('app')
		.factory('ShirtService', ShirtService);

	function ShirtService() {
		var service = {
			// functions defined here
			addShirt: 		addShirt
		};

		return service;

		function addShirt() {
			return $http.put('/design/add-shirt/').then(
				function(response) {
					return response.data;
				}, function(err) {
					return err.data;
				}
			);
		}
	}
})();