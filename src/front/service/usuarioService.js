app.service('cadastroService', function ($http) {
    
    this.cadastrarUsuario = function(usuario) {
      return $http.post('http://localhost:9090/usuario/cadastrar', usuario);
    }
  
    this.carregarDadosUsuario = function(id) {
      return $http.get('http://localhost:9090/usuario/' + id);
    }

    this.carregarUsuariosPorNome = function(nome) {
      return $http.get('http://localhost/usuario/nome?nome=' + nome);
    }

    this.updateUsuario = function(usuario) {
      return $http.post('http://localhost/usuario/editar', usuario);
    }
});