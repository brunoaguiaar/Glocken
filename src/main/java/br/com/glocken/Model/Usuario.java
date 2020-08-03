package br.com.glocken.Model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.Size;


@Entity
public class Usuario implements Serializable {

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_USUARIO")
    @SequenceGenerator(name = "SEQ_USUARIO", sequenceName = "SEQ_USUARIO", allocationSize = 1)
	@Column(name = "ID_USUARIO")
    private Long id;
	
	@Size(min = 1, max = 50, message = "O nome deve ter entre {min} e {max} caracteres.")
    @Basic(optional = false)
    @Column(name = "NOME_USUARIO")
    private String nome;
	
	@Size(min = 1, max = 50, message = "O email deve ter entre {min} e {max} caracteres.")
    @Basic(optional = false)
    @Column(name = "EMAIL_USUARIO")
    private String email;
	
	@Size(min = 1, max = 200, message = "A senha deve ter entre {min} e {max} caracteres.")
    @Basic(optional = false)
    @Column(name = "SENHA")
    private String senha;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	@Override
    public boolean equals(Object user) {
        return this.id.equals(((Usuario)user).id);
    }
}
