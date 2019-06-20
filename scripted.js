coderjy.directive('myHeader',function(){
    return {
        restrict : "E",
        templateUrl: 'app/header.html',
        // controller : "homeCtrl"
    }
});
coderjy.directive('myFooter',function(){
    return {
        restrict : "E",
        templateUrl: 'app/footer.html'
    }
});
