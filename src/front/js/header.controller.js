app.controller('headerController', function($scope, authService,  $location, postService, usuarioService, toastr) { 
    $scope.url = {};
    $scope.url.path = $location.path();
    console.log(authService.getUsuario());
    $scope.isAutenticado = authService.isAutenticado;
    $scope.logout = authService.logout;
    $scope.getUsuario = authService.getUsuario;

    $scope.cadastrarContainer = function() {
        postService.cadastrarContainer($scope.post).then(res => {
            toastr.success("Container cadastrado com sucesso");
        });
    }
});