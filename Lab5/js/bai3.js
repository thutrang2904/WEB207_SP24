let infor = angular.module('Bai3', []);

function myFunction($scope){
    $scope.student = "";
}

infor.controller('myController', function($scope){


    $scope.studentArr = [
        {
            fullname : "Nguyễn Văn Tèo",
            birthday : "20-01-1995",
            gender : "Nam",
            photo : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHXBYrZHxtjB1zIPI9wZnoyzai6O0U77jCGVUszFCAjIj7h6w-",
            mark : "8.5"
        },
        {
            fullname : "Phạm Thị Nở",
            birthday : "11-12-1985",
            gender : "Nữ",
            photo : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHXBYrZHxtjB1zIPI9wZnoyzai6O0U77jCGVUszFCAjIj7h6w-",
            mark : "5.5"
        },
        {
            fullname : "Trần Ngọc Quang",
            birthday : "31-12-1980",
            gender : "Nam",
            photo : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHXBYrZHxtjB1zIPI9wZnoyzai6O0U77jCGVUszFCAjIj7h6w-",
            mark : "7"
        }
    ];
});