app.controller('loginController', function($scope, $location, authService, toastr) {

    $scope.login = function() {
        authService.login($scope.usuario).then(res => {
            toastr.success('Login com sucesso!');
        }, error => {
            toastr.error('Erro no Login!');
        })
        console.log($scope.usuario);
    }
  });