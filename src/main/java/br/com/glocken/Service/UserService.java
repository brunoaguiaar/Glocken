package br.com.glocken.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.glocken.Model.Users;
import br.com.glocken.Repositorio.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public Page<Users> list(Pageable pageable){
		return userRepository.findAll(pageable);
	}
	
	public Iterable<Users> list(){
		return userRepository.findAll();
	}

	
	public Users findById(Long id) {
        return userRepository.findOne(id);
    }
    
    public Users create(Users u)throws Exception {
        if (findByEmail(u.getEmail()) != null) {
            throw new Exception("Email já cadastrado!");
        }
        u.setPassword(new BCryptPasswordEncoder().encode(u.getPassword()));
        return userRepository.save(u);
    }
    
    public void delete(Users u){
    	userRepository.delete(u);
    }
    
    public List<Users> findByName(String name){
        return userRepository.findByNameContainingIgnoreCase(name);
    }
    
    public Users update(Users usuario) {
        return userRepository.save(usuario);
    }
    
    public Users findByEmail(String email){
        return userRepository.findByEmail(email);
    }
}
