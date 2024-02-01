window.ListController = function($scope, $http){
    $scope.title = "Danh sách sinh viên";

    // Sử dụng tham số $http để thực hiện việc call API

    // Link API
    const apiStudent = 'http://localhost:3000/student';

    //$http.phương thức truy cập http
    // GET, POST, PUT, DELETE
    function getAll(){
        $http.get(apiStudent).then(function(response){
            console.log(response);
            console.log(response.data); //Lấy ra dữ liệu
            if(response.status == 200){
                $scope.listStudent = response.data;
            }
            else{
                alert("Call dữ liệu không thành công");
            }
        });
    }
    getAll();

    $scope.deleteStudent = function(deleteID){
        // alert(deleteID)
        let confirm = window.confirm("Bạn có muốn xóa không?");
        // console.log(confirm)
        if(confirm){
            $http.delete(
                // apiStudent + '/' + deleteID
                `${apiStudent}/${deleteID}`
            ).then(function(response){
                if(response.status == 200){
                    alert("Xoa thanh cong");
                    getAll();
                }
            });
        };
    }

    $scope.svArr = [
        {
            hoTen : "Hoàng Thu Trang",
            maSV : "PH40450",
            gioiTinh : "Nữ"
        },
        {
            hoTen : "Nguyễn Hoài Thu",
            maSV : "PH40458",
            gioiTinh : "Nữ"
        },
        {
            hoTen : "Nguyễn Hồng Ánh",
            maSV : "PH40387",
            gioiTinh : "Nam"
        },
        {
            hoTen : "Vũ Văn Tuấn",
            maSV : "PH37940",
            gioiTinh : "Nam"
        }
    ];
}