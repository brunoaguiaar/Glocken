package br.com.glocken.Model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Permissions implements Serializable {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_PERMISSION")
    @SequenceGenerator(name = "SEQ_PERMISSION", sequenceName = "SEQ_PERMISSION", allocationSize = 1)
	@Column(name = "PERMISSION_ID")
    private Long id;
	
    @Basic(optional = false)
    @Column(name = "PERMISSION_CATEGORY")
    private String category;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	

}
