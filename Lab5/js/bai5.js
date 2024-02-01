let myApp = angular.module('myApp',[]);
myApp.controller('myController',function($scope){
    $scope.student = {};
    $scope.save = function(){
        var a = parseFloat($scope.student.mark);
        if(a<5){
            $scope.student.grade = "Rot"
        }
        else{
            $scope.student.grade = "Dau"
        }
    }
})