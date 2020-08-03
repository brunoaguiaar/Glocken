app.controller('cadastroController', function($scope, $location, authService, usuarioService, toastr) { 

  $scope.cadastrar = function(usuario) {
      usuarioService.registrarUsuario(usuario).then(res => {
          authService.login($scope.usuario).then(response => {
              toastr.success('Login com sucesso!');
          })
      }, error => {
          toastr.error(error.data.message);
      })
  }

})