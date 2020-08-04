package br.com.glocken.Model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Users implements Serializable {

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_USUARIO")
    @SequenceGenerator(name = "SEQ_USUARIO", sequenceName = "SEQ_USUARIO", allocationSize = 1)
	@Column(name = "USERS_ID")
    private Long id;
	
    @Basic(optional = false)
    @Column(name = "USERS_NAME")
    private String name;
	
    @JsonIgnore
    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "permission_id")
    private Permissions permission;
	
    @Basic(optional = false)
    @Column(name = "USERS_ADDRESS")
    private String address;

    @Basic(optional = true)
    @Column(name = "USERS_GENDER")
    private int gender;
    
    @Basic(optional = false)
    @Column(name = "USERS_CPF")
    private long cpf;

    @Basic(optional = false)
    @Column(name = "USERS_RG")
    private long rg;
    
    @Basic(optional = true)
    @Column(name = "USERS_BIRTHDAY")
    private Date birthDay;

    @Basic(optional = false)
    @Column(name = "USERS_EMAIL")
    private String email;
	
    @Basic(optional = false)
    @Column(name = "USERS_PHONE")
    private Long phone;

    @Basic(optional = false)
    @Column(name = "USERS_EMERGENCYPHONE")
    private Long emergencyPhone;
    
    @Basic(optional = true)
    @Column(name = "USERS_JOB")
    private String job;

    @Basic(optional = false)
    @Column(name = "USERS_PASSWORD")
    private String password;
    
    @JsonIgnore
    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "contract_id")
    private Contracts contract;

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Permissions getPermission() {
		return permission;
	}

	public void setPermission(Permissions permission) {
		this.permission = permission;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getGender() {
		return gender;
	}

	public void setGender(int gender) {
		this.gender = gender;
	}

	public long getCpf() {
		return cpf;
	}

	public void setCpf(long cpf) {
		this.cpf = cpf;
	}

	public long getRg() {
		return rg;
	}

	public void setRg(long rg) {
		this.rg = rg;
	}

	public Date getBirthDay() {
		return birthDay;
	}

	public void setBirthDay(Date birthDay) {
		this.birthDay = birthDay;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public Long getEmergencyPhone() {
		return emergencyPhone;
	}

	public void setEmergencyPhone(Long emergencyPhone) {
		this.emergencyPhone = emergencyPhone;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Contracts getContract() {
		return contract;
	}

	public void setContract(Contracts contract) {
		this.contract = contract;
	}

	@Override
    public boolean equals(Object user) {
        return this.id.equals(((Users)user).id);
    }
}
