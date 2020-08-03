app.service('containerService', function($http) {
 
    this.getFeedContainers = function(page = 0, size = 5) {
        return $http.get('http://localhost:9090/container/feed?page=' + page + '&size=' + size);
    }

    this.getContainerByUsuario = function(id) {
        return $http.get('http://localhost:9090/container/' + id);
    }

    this.cadastrarContainer = function(post) {
        return $http.post('http://localhost:9090/container/cadastrar', post);
    }
});