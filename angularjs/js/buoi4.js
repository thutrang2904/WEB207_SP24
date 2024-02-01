    // Khởi tạo module
    // Set vùng AngularJS cho vùng ThuTrang
    let Trang = angular.module('ThuTrang', []);
    // Truyền vào 2 tham số: tên của ng-app, thành phần phụ thuộc(để trong mảng)

    // Định nghĩa vùng controller
    Trang.controller('myController', myFunction);
    // Truyền vào 2 tham số: tên của controller cần định nghĩa, hàm muốn trỏ đến để thực hiện công việc

    function myFunction($scope) {
        // $scope: laf 1 tham số mặc định, không được thay đổi
        // Luôn luôn có, dùng để gender dữ liệu ra view

        $scope.xinchao = "Hello";
    }

    // Định nghĩa 1 vùng controller mới
    // Khai báo và hiển thị ra view hoTen, diaChi, sdt, ngayChiaTay của nym


    //Viết tắt: 
    Trang.controller('nymController', function ($scope) {
        $scope.hoTen = "Thu Trang";
        $scope.diaChi = "Thạch Hòa";
        $scope.sdt = "0867224231";
        $scope.ngayCT = "Ngày ctay nhớ làm gì =))";

        $scope.nymArr = [
            {
                hoTen : "Thu Trang",
                diaChi : "Thạch Hòa",
                sdt : "0867224231",
                ngayChiaTay : "20/10/2020"
            },
            {
                hoTen : "Hoài Thu",
                diaChi : "Thạch Hòa",
                sdt : "0376558965",
                ngayChiaTay : "22/10/2023"
            },
            {
                hoTen : "Thùy Dung",
                diaChi : "Hà Nội",
                sdt : "0867224231",
                ngayChiaTay : "20/10/2020"
            }
        ];
    });