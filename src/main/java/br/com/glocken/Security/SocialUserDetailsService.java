package br.com.glocken.Security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.glocken.Model.Usuario;
import br.com.glocken.Repositorio.UsuarioRepositorio;

@Service
public class SocialUserDetailsService implements UserDetailsService {

    @Autowired
    UsuarioRepositorio repositorio;
            
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = repositorio.findByEmail(username);
        if (usuario == null) {
            throw new UsernameNotFoundException("Usuario nao cadastrado!");
        }
        final List<GrantedAuthority> grants = new ArrayList<>();
        return new User(username, usuario.getSenha(), grants);
    }
}
