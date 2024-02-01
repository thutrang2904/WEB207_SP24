let NhanVien = angular.module('ThuTrang', []);

function myFunction($scope){
    $scope.nv = "Danh sách nhân viên";
}
NhanVien.controller('NhanVien', function($scope){
    $scope.dsnv = "Danh sách nhân viên";

    $scope.nvArr = [
        {
            ten : "Thu Trang",
            ngaySinh : new Date("2004-04-29"),
            luong : "4500000",
            gioiTinh : 1
        },
        {
            ten : "Thùy Dung",
            ngaySinh : new Date("2007-10-26"),
            luong : "4500000",
            gioiTinh : 1
        },
        {
            ten : "Hoài Nam",
            ngaySinh : new Date("2003-03-10"),
            luong : "5000000",
            gioiTinh : 0
        },
        {
            ten : "Anh Tú",
            ngaySinh : new Date("2003-03-10"),
            luong : "5000000",
            gioiTinh : 0
        }
    ];

    // Khai báo hàm
    $scope.sayHello = function (name){
        alert("Xin chào" + name);
    }

    $scope.myFunction = function(){
        console.log("Mãi bên nhau bạn nhéeeeee")
    }

    $scope.orderBy1 = '';
    $scope.limitTo1 = '';
    $scope.search = '';
});