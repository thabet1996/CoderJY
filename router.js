var coderjy = angular.module("coderjy", ['ui.router']);
coderjy.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('index', {
            url : "/",
            templateUrl: 'app/content.html',
            controller: 'contentCtrl',
            param :{
                id: null
            }
        })
        .state('product', {
            url : "/product/:id",
            templateUrl: 'app/deatils.html',
            controller: 'productCtrl',
            param :{
                id: null
            }
        })
});
coderjy.factory('ergastAPIservice', function($http) {

    var ergastAPI = [];
    ergastAPI.getProductDetails = function() {
        return $http({
            method: 'GET',
            url: 'productAll.json'
        });
    };
    return ergastAPI;
});
coderjy.controller('contentCtrl', function($scope,ergastAPIservice) {
    ergastAPIservice.getProductDetails().then(function (response) {
        $scope.MyData = response.data;
    });
});
coderjy.controller('productCtrl', function($http,$stateParams,$scope,ergastAPIservice,$state) {
    $scope.thisAlbum = $state.params.id;
    $scope.productID = $stateParams.id;
    $scope.ProductDetails = null;
    ergastAPIservice.getProductDetails($scope.productID).then(function (response) {
        $scope.ProductDetails = response.data;
    });
    
});

