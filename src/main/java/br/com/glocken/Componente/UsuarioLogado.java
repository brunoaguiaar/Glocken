package br.com.glocken.Componente;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import br.com.glocken.Model.Usuario;
import br.com.glocken.Service.UsuarioService;

@Component
public class UsuarioLogado {

	@Autowired
	UsuarioService service;
	
	public Usuario getUsuarioLogado() {
        return Optional.ofNullable(SecurityContextHolder.getContext())
                .map(SecurityContext::getAuthentication)
                .map(Authentication::getPrincipal)
                .map(UserDetails.class::cast)
                .map(UserDetails::getUsername)
                .map(service::buscarPorEmail)
                .orElse(null);
    }
}
