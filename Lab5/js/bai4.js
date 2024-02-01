let tinh = angular.module('myApp', []);
tinh.controller('myController', function ($scope) {
    $scope.calculate = function(){
        var a = parseFloat($scope.width);
        var b = parseFloat($scope.length);
        $scope.acreage = a*b;
        $scope.perimeter = (a+b)*2;
    }
});