let infor = angular.module('Bai1', []);

infor.controller('myController', function ($scope) {
    $scope.photo = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHXBYrZHxtjB1zIPI9wZnoyzai6O0U77jCGVUszFCAjIj7h6w-"
    $scope.hoTen = "Nguyễn Văn Tèo";
    $scope.ngaySinh = "20-01-1995";
    $scope.gioiTinh = "Nam";
    $scope.diemTB = "8.5";
}
);

