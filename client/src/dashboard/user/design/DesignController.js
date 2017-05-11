(function () {
    'use strict';
    // var Item = mongoose.model('Items');

    angular
        .module('app')
        .controller('DesignController', DesignController);

    function DesignController($scope,$http) {

        // var scope = this
        console.log('visited design controller');
        // var item = new Item();
     	$scope.item = {description:'',price:'',category:'',title :'',files: []};
    //     item = $scope.item
    // 	item.title = req.body.title;
    // 	item.description = req.body.description;
    // 	item.price = req.body.price;
    // item.images = req.body.images;
    // 	item.category = req.body.category;
    console.log("h2")

    $scope.addItem = function (){

            
    		console.log("hi")
        	// var item = $scope.item
        	console.log($scope.item)
            return $http.post('/items/', $scope.item).then(function(response){
               return response.data;
            });
        }
    }


     
})();