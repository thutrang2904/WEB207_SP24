window.ListController = function($scope, $http){
    $scope.title = "Danh sách chi tiết học viên";
    const apiCreate = 'http://localhost:3000/create';
    function getAll(){
        $http.get(apiCreate).then(function(response){
            if(response.status == 200){
                $scope.list = response.data;
            }
            else{
                alert("Call dữ liệu không thành công!");
            }
        });
    }
    getAll();
    $scope.delete = function(deleteID){
        let confirm = window.confirm("Bạn có muốn xóa thông tin học viên không?")
        if(confirm){
            $http.delete(
                `${apiCreate}/${deleteID}`
            ).then(function(response){
                if(response.status == 200){
                    alert("Xóa thành công");
                    getAll();
                }
            });
        };
    }

}