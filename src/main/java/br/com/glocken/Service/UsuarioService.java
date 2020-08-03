package br.com.glocken.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.glocken.Model.Usuario;
import br.com.glocken.Repositorio.UsuarioRepositorio;

@Service
public class UsuarioService {

	@Autowired
    UsuarioRepositorio repositorio;
	
	public Page<Usuario> listar(Pageable pageable){
		return repositorio.findAll(pageable);
	}
	
	public Iterable<Usuario> listar(){
		return repositorio.findAll();
	}

	
	public Usuario buscarPorId(Long id) {
        return repositorio.findOne(id);
    }
    
    public Usuario cadastrar(Usuario u)throws Exception {
        if (buscarPorEmail(u.getEmail()) != null) {
            throw new Exception("Email já cadastrado!");
        }
        u.setSenha(new BCryptPasswordEncoder().encode(u.getSenha()));
        return repositorio.save(u);
    }
    
    public void excluir(Usuario u){
        repositorio.delete(u);
    }
    
    public List<Usuario> buscarPorNome(String nome){
        return repositorio.findByNomeContainingIgnoreCase(nome);
    }
    
    public Usuario alterar(Usuario usuario) {
        return repositorio.save(usuario);
    }
    
    public Usuario buscarPorEmail(String email){
        return repositorio.findByEmail(email);
    }
}
