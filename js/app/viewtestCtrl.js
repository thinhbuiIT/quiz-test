app.controller('viewtestCtrl', function($scope, $routeParams, $route, $rootScope) {
    $rootScope.subjects.forEach(ar => {
        if (ar.Id == $routeParams.id) {
            $scope.subject = angular.copy(ar);
            return;
        }
    });
    $scope.test = function() {
        if ($rootScope.student == null) {
            Swal.fire({
                icon: 'error',
                title: 'Bạn chưa đăng nhập!',
                text: 'Hãy quay lại sau khi đăng nhập!'
            });
        } else {
            Swal.fire({
                title: 'Bắt đầu',
                text: "Sẳn sàng?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Bắt đầu thi.',
                cancelButtonText: 'Hủy'
            }).then((result) => {
                if (result.value) {
                    window.location.href = "#!test/" + $scope.subject.Id;
                }
            })
        }
    }
});