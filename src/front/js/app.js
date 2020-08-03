var app = angular.module("ContainerOnicron", ['ngRoute', 'toastr', 'auth', 'ui.bootstrap', 'angular-loading-bar']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        controller: 'loginController',
        templateUrl: 'login/login.html'
      })
      .when('/cadastro', {
        controller: 'cadastroController',
        templateUrl: 'cadastro/cadastro.html'
      })
      .when('/menu', {
        controller: 'menuController',
        templateUrl: 'menu/menu.html'
      })
      .when('/cadastroContainer', {
        controller: 'cadastrarContainerController',
        templateUrl: 'cadastroContainer/cadastroContainer.html',
      })
      .when('/container/:id', {
        controller: 'containerController',
        templateUrl: 'container/container.html'
      })
      .otherwise({
        redirectTo: '/menu'
      });
  });

app.constant('authConfig', {

    // Obrigatória - URL da API que retorna o usuário
    urlUsuario: 'http://localhost:9090/usuario/login',

    // Obrigatória - URL da aplicação que possui o formulário de login
    urlLogin: '/login',

    // Opcional - URL da aplicação para onde será redirecionado (se for informado) após o LOGIN com sucesso
    urlPrivado: '/menu',

    // Opcional - URL da aplicação para onde será redirecionado (se for informado) após o LOGOUT
    urlLogout: '/login'
});

angular.module('ContainerOnicron').directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});
