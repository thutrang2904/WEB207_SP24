window.DetailController = function($scope, $http, $routeParams){
    $scope.title = "Chi tiết thông tin học viên";

    let createID = $routeParams.id;
    const apiCreate = 'http://localhost:3000/create';
    $http.get(
        `${apiCreate}/${createID}`
    ).then(function(response){
        if(response.status == 200){
            $scope.create = {
                id : response.data.id,
                hoTen : response.data.hoTen,
                email : response.data.email,
                sdt : response.data.sdt,
                ngaySinh : new Date(response.data.ngaySinh),
                cccd : response.data.cccd,
                khoaHoc : response.data.khoaHoc
            }
        }
    });
}