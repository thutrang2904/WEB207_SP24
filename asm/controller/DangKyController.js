window.DangKyController = function($scope, $http, $location){
    $scope.title = "Thêm thông tin học viên mới";
    $scope.createHocVien = function(){
        const apiCreate = 'http://localhost:3000/create';
        let flag = true; // Tạo biến kiểm tra lỗi
        // Tạo biến hiển thị lỗi
        $scope.kiemTra = {
            hoTen : false,
            email : false,
            sdt : false,
            ngaySinh : false,
            cccd : false,
            khoaHoc : false
        }

        // Check trống
        if(!$scope.create || !$scope.create.hoTen){
            flag = true;
            $scope.kiemTra.hoTen = true;
        }
        if(!$scope.create || !$scope.create.email){
            flag = true;
            $scope.kiemTra.email = true;
        }
        if(!$scope.create || !$scope.create.sdt){
            flag = true;
            $scope.kiemTra.sdt = true;
        }
        if(!$scope.create || !$scope.create.ngaySinh){
            flag = true;
            $scope.kiemTra.ngaySinh = true;
        }
        if(!$scope.create || !$scope.create.cccd){
            flag = true;
            $scope.kiemTra.cccd = true;
        }
        if(!$scope.create || !$scope.create.khoaHoc){
            flag = true;
            $scope.kiemTra.khoaHoc = true;
        }

        // Check email bằng biểu thức regex
        let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        let checkEmail = regexEmail.test($scope.create.email);
        if(!checkEmail){
            flag = false;
            $scope.kiemTra.email = true;
        }

        //check sdt
        let regexSdt = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        let checkSdt = regexSdt.test($scope.create.sdt);
        if(!checkSdt){
            flag = false;
            $scope.kiemTra.sdt = true;
        }

        //check cmt/cccd
        let regexCccd = /^\d+$/;
        let checkCccd = regexCccd.test($scope.create.cccd);
        if(!checkCccd){
            flag = false;
            $scope.kiemTra.cccd = true;
        }

        if(flag){
           let newCreate = {
            hoTen : $scope.create.hoTen,
            email : $scope.create.email,
            sdt : $scope.create.sdt,
            ngaySinh : $scope.create.ngaySinh,
            cccd : $scope.create.cccd,
            khoaHoc : $scope.create.khoaHoc
           }
           $http.post(
            apiCreate,
            newCreate
           ).then(function(response){
                if(response.status == 201){
                    alert("Đăng ký thành công!");
                    $location.path('/list');
                }
           });
        }
    }
}