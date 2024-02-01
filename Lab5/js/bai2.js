let infor = angular.module('Bai2', []);
infor.controller('myController', function ($scope) {
    $scope.student = {
        fullname: "Nguyễn Văn Tèo",
        birthday: "20-01-1995",
        gender: "Nam",
        photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHXBYrZHxtjB1zIPI9wZnoyzai6O0U77jCGVUszFCAjIj7h6w-",
        mark: 8.5
    }
}
);
