window.GioiThieuController = function($scope, $routeParams){
    $scope.title = "Giới thiệu";
    // @routeParams sẽ chứa toàn bộ tham số được truyền lên Url
    console.log($routeParams.des);

    // Bài 1: Tạo 1 form nhập vào 2 số, 1 button
    // Tính tổng 2 số truyền và hiển thị ra màn hình

    $scope.tinhTong = function (){
        console.log($scope.inputValue.num1);
        console.log($scope.inputValue.num2);
        let num1 = parseFloat($scope.num1);
        let num2 = parseFloat($scope.num2);
        $scope.ketqua = num1 + num2;
    }

    // Tạo 1 form đăng nhập
    // Nếu tài khoản = dinhtv7, mật khẩu = 12345678
    // Hiển thị alert(Chào mừng + tên đăng nhập)
    // Nếu nhập sai: hiển thị thông báo đỏ bên dưới ô input

    $scope.dangNhap = function(){
        $scope.error = {};
        let tenDN = $scope.inputValue.tenDangNhap;
        let mk = $scope.inputValue.matKhau;
        // console.log(tenDN, mk);

        if(tenDN == 'DinhTV7' || tenDN == ""){
            $scope.error.tenDangNhap = "";
        }
        else{
            $scope.error.tenDangNhap = "Sai tên đăng nhập";
        }

        if(matKhau == '12345678' || matKhau == ""){
            $scope.error.matKhau = "";
        }
        else{
            $scope.error.matKhau = "Sai mật khẩu";
        }

        if(tenDN == "DinhTV7" && matKhau == "12345678"){
            alert("Xin chào" + tenDN);
        }
    }
}