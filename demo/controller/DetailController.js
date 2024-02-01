window.DetailController = function($scope, $http, $routeParams){
    $scope.title = "Chi tiết thông tin sinh viên";

    // console.log($routeParams.id);
    let studentID = $routeParams.id;
    //Link API
    const apiStudent = 'http://localhost:3000/student';
    $http.get(
        `${apiStudent}/${studentID}`
    ).then(function(response){
        if(response.status == 200){
            // console.log(response.data.hoTen);
            $scope.student = {
                id : response.data.id,
                hoTen : response.data.hoTen,
                email : response.data.email,
                ngaySinh : new Date(response.data.ngaySinh)
            }
        }
    });

}