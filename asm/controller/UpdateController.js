window.UpdateController = function ($scope, $http, $routeParams, $location) {
    $scope.title = "Chỉnh sửa thông tin học viên";
    let createID = $routeParams.id;
    const apiCreate = 'http://localhost:3000/create';
    $http.get(
        `${apiCreate}/${createID}`
    ).then(function (response) {
        if (response.status == 200) {
            $scope.create = {
                id: response.data.id,
                hoTen: response.data.hoTen,
                email: response.data.email,
                sdt: response.data.sdt,
                ngaySinh: new Date(response.data.ngaySinh),
                cccd: response.data.cccd,
                khoaHoc: response.data.khoaHoc
            }
        }
    });

    $scope.update = function () {
        let flag = true;
        $scope.kiemTra = {
            hoTen: false,
            email: false,
            sdt: false,
            ngaySinh: false,
            cccd: false,
            khoaHoc: false
        }
        //Check trống
        if (!$scope.create || !$scope.create.hoTen) {
            flag = true;
            $scope.kiemTra.hoTen = true;
        }
        if (!$scope.create || !$scope.create.email) {
            flag = true;
            $scope.kiemTra.email = true;
        }
        if (!$scope.create || !$scope.create.sdt) {
            flag = true;
            $scope.kiemTra.sdt = true;
        }
        if (!$scope.create || !$scope.create.ngaySinh) {
            flag = true;
            $scope.kiemTra.ngaySinh = true;
        }
        if (!$scope.create || !$scope.create.cccd) {
            flag = true;
            $scope.kiemTra.cccd = true;
        }
        if (!$scope.create || !$scope.create.khoaHoc) {
            flag = true;
            $scope.kiemTra.khoaHoc = true;
        }

        // regex
        let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        let checkEmail = regexEmail.test($scope.create.email);
        if (!checkEmail) {
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
 

        if (flag) {
            let update = {
                hoTen: $scope.create.hoTen,
                email: $scope.create.email,
                sdt: $scope.create.sdt,
                ngaySinh: $scope.create.ngaySinh,
                cccd: $scope.create.cccd,
                khoaHoc: $scope.create.khoaHoc
            }
            $http.put(
                `${apiCreate}/${createID}`,
                update
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Chỉnh sửa thông tin học viên thành công");
                    $location.path('/list');
                }
            });
        }
    }
}