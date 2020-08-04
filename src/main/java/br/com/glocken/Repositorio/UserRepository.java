package br.com.glocken.Repositorio;


import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.glocken.Model.Users;

@Repository
public interface UserRepository extends PagingAndSortingRepository<Users, Long> {
	
	public Users findByEmail(String email);
	
	public List<Users> findByNameContainingIgnoreCase(String name);

}
