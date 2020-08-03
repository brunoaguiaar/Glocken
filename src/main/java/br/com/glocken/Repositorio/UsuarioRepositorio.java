package br.com.glocken.Repositorio;


import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.glocken.Model.Usuario;

@Repository
public interface UsuarioRepositorio extends PagingAndSortingRepository<Usuario, Long> {
	
	public Usuario findByEmail(String email);
	
	public List<Usuario> findByNomeContainingIgnoreCase(String nome);

}
