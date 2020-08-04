package br.com.glocken.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.glocken.Model.Users;
import br.com.glocken.Service.UserService;

@RestController
@RequestMapping(value="/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@GetMapping
	public List<Users> listUsers() {
		return (List<Users>) userService.list();
	}

	@GetMapping(value = "/{id}")
    public Users getUsuario(@PathVariable Long id) {
        return userService.findById(id);
    }
	
	@PostMapping(value = "/create")
    public void creatUser(@RequestBody Users user) throws Exception{
		userService.create(user);
    }
	
	@DeleteMapping(value = "/delete")
    public Users deleteUser(@RequestBody Users user){
		userService.delete(user);
        return user;
    }
		    
    @GetMapping(value = "/name")
    public List<Users> findUsersByName(@RequestParam String name){
        return userService.findByName("%" + name + "%");
    }
    
    @GetMapping(value = "/email/{email}")
    public Users findUsersByEmail(@PathVariable("email") String email){
        return userService.findByEmail(email);
    }
    
	@PutMapping(value = "/update")
    public void updateUser(@RequestBody Users user) {
    	userService.update(user);
    }    
    
}
