package br.com.glocken.Controller;

import java.util.HashMap;
import java.util.Map;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.glocken.Model.Usuario;
import br.com.glocken.Service.UsuarioService;

@RestController
@RequestMapping(value="/usuario")
public class UsuarioController {
	
	@Autowired
    UsuarioService service;
	
	@GetMapping
	public List<Usuario> listarUsuarios() {
		return (List<Usuario>) service.listar();
	}

	@GetMapping(value = "/{id}")
    public Usuario getUsuario(@PathVariable Long id) {
        return service.buscarPorId(id);
    }
	
	@PostMapping(value = "/cadastrar")
    public void cadastrarUsuario(@RequestBody Usuario usuario) throws Exception{
        service.cadastrar(usuario);
    }
	
	@DeleteMapping(value = "/deletar")
    public Usuario deletarUsuario(@RequestBody Usuario usuario){
        service.excluir(usuario);
        return usuario;
    }
	
	@PutMapping(value = "/editar")
    public Usuario editarUsuario(@RequestBody Usuario usuario, @AuthenticationPrincipal User user) {
		Usuario usuarioBanco = service.buscarPorEmail(user.getUsername());
		usuarioBanco.setNome(usuario.getNome());
        return service.alterar(usuarioBanco);
    }
	
	@GetMapping("/usuarioLogado")
    public Map<String, Usuario> listarUsuarios(@AuthenticationPrincipal User user) {
        final Map<String, Usuario> hashMap = new HashMap<>();
        hashMap.put("dados", service.buscarPorEmail(user.getUsername()));
        return hashMap;
    }
    
    @GetMapping(value = "/nome")
    public List<Usuario> buscarUsuariosPorNome(@RequestParam String nome){
        return service.buscarPorNome("%" + nome + "%");
    }
    
    @GetMapping(value = "/email/{email}")
    public Usuario buscarUsuarioPorEmail(@PathVariable("email") String email){
        return service.buscarPorEmail(email);
    }
    
    @PutMapping
    public void updateUsuario(@RequestBody Usuario usuario) {
        service.alterar(usuario);
    }    
    
}
